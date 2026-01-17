import React, { useEffect, useState } from 'react';
import { supabase } from '../Config/Config';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LogOut, User, Calendar, Users, Clock, BookOpen, Bell, Award, FileText,
  ChevronLeft, ChevronRight, GraduationCap, Brain, CheckCircle, X,
  Plus, Save, Search, AlertCircle, MapPin, Building, Mail, Phone, Briefcase
} from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StaffAssignments } from './Assignments';
import { StaffRiskDashboard } from './RiskPrediction';

const StaffDashboard = () => {
  const [user, setUser] = useState(null);
  const [students, setStudents] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [attendance, setAttendance] = useState({});
  const [subjectList, setSubjectList] = useState([]);
  const [selectedSection, setSelectedSection] = useState('1A');
  const [activeTab, setActiveTab] = useState('profile');
  const [loading, setLoading] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Schedule state
  const [scheduleDate, setScheduleDate] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');
  const [roomNo, setRoomNo] = useState('');
  const [block, setBlock] = useState('');

  // Results state
  const [studentId, setStudentId] = useState('');
  const [resultEntries, setResultEntries] = useState([]);
  const [studentDetails, setStudentDetails] = useState(null);

  // Notice state
  const [noticeTopic, setNoticeTopic] = useState('');
  const [noticeDescription, setNoticeDescription] = useState('');
  const [notices, setNotices] = useState([]);

  const sidebarItems = [
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'attendance', label: 'Attendance', icon: Calendar },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'schedule', label: 'Schedule', icon: Clock },
    { id: 'notices', label: 'Notices', icon: Bell },
    { id: 'results', label: 'Results', icon: Award },
    { id: 'assignments', label: 'Assignments', icon: FileText },
    { id: 'risk-dashboard', label: 'Risk Analysis', icon: Brain },
  ];

  // Initialize Dashboard
  useEffect(() => {
    const initDashboard = async () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        await fetchSubjects(parsedUser.user_id);
        await fetchNotices(parsedUser.user_id);
        await fetchStudents('1A');
      } else {
        window.location.href = "/login";
      }
    };
    initDashboard();
  }, []);

  // Fetch Functions
  const fetchNotices = async (staffId) => {
    const { data, error } = await supabase
      .from('notice')
      .select('*')
      .eq('staff_id', staffId)
      .order('date', { ascending: false })
      .order('time', { ascending: false });
    if (!error) setNotices(data || []);
  };

  const fetchStudentDetails = async (stuId) => {
    if (!stuId) return;
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('user_id', stuId)
      .single();
    if (!error) setStudentDetails(data);
    else { setStudentDetails(null); toast.error("Student not found"); }
  };

  const fetchSubjectsForResult = async (stuId) => {
    if (!stuId) { toast.warn("Please enter a valid student ID"); return; }
    await fetchStudentDetails(stuId);
    setLoading(true);

    const { data: existingResults } = await supabase
      .from('results')
      .select('*')
      .eq('user_id', stuId);

    const resultMap = {};
    existingResults?.forEach(res => {
      resultMap[res.subject_id] = { mid_term_score: res.mid_term_score, end_term_score: res.end_term_score, result_id: res.result_id };
    });

    const filteredSubjects = subjectList.map(subj => ({
      ...subj,
      mid_term_score: resultMap[subj.subject_id]?.mid_term_score ?? '',
      end_term_score: resultMap[subj.subject_id]?.end_term_score ?? '',
      result_id: resultMap[subj.subject_id]?.result_id || null,
    }));

    setResultEntries(filteredSubjects);
    setLoading(false);
  };

  const handleScoreChange = (subjectId, field, value) => {
    if (value !== '' && (parseFloat(value) < 0 || parseFloat(value) > 100)) {
      toast.warn("Score must be between 0 and 100");
      return;
    }
    setResultEntries(prev => prev.map(entry =>
      entry.subject_id === subjectId ? { ...entry, [field]: value } : entry
    ));
  };

  const handleResultSubmit = async () => {
    if (!studentId) { toast.warn("Please enter a student ID first"); return; }
    setLoading(true);

    for (const entry of resultEntries) {
      const { subject_id, mid_term_score, end_term_score, result_id } = entry;
      const cleanMid = mid_term_score !== '' ? parseFloat(mid_term_score) : null;
      const cleanEnd = end_term_score !== '' ? parseFloat(end_term_score) : null;

      try {
        if (result_id) {
          await supabase.from('results').update({ mid_term_score: cleanMid, end_term_score: cleanEnd }).eq('result_id', result_id);
        } else {
          await supabase.from('results').insert([{ user_id: studentId, subject_id, mid_term_score: cleanMid, end_term_score: cleanEnd }]);
        }
      } catch (error) {
        toast.error(`Failed to save result for subject ID: ${subject_id}`);
      }
    }
    setLoading(false);
    toast.success("Results saved successfully!");
  };

  const handleScheduleSubmit = async () => {
    if (!selectedSubject || !scheduleDate || !scheduleTime || !roomNo || !block) {
      toast.warn("Please fill all schedule fields");
      return;
    }
    setLoading(true);
    const { error } = await supabase.from('classes_schedule').insert([{
      subject_id: selectedSubject, date: scheduleDate, time: scheduleTime, room_no: roomNo, block: block, staff_id: user.user_id
    }]);
    setLoading(false);
    if (error) toast.error("Failed to add schedule");
    else { toast.success("Schedule added!"); setScheduleDate(''); setScheduleTime(''); setRoomNo(''); setBlock(''); }
  };

  const handleNoticeSubmit = async () => {
    if (!noticeTopic.trim()) { toast.warn("Please enter a notice topic"); return; }
    setLoading(true);
    const now = new Date();
    const { error } = await supabase.from('notice').insert([{
      topic: noticeTopic, description: noticeDescription, staff_id: user.user_id,
      date: now.toISOString().split('T')[0], time: now.toTimeString().split(' ')[0],
    }]);
    setLoading(false);
    if (error) toast.error("Failed to post notice");
    else { toast.success("Notice posted!"); setNoticeTopic(''); setNoticeDescription(''); fetchNotices(user.user_id); }
  };

  const fetchSubjects = async (staffId) => {
    const { data: assigned } = await supabase.from('staff_subjects').select('subject_id').eq('staff_id', staffId);
    if (!assigned) return;
    const subjectIds = assigned.map(s => s.subject_id);
    const { data: subjects } = await supabase.from('subjects').select('subject_id, subject_name, subject_code').in('subject_id', subjectIds);
    if (subjects) { setSubjectList(subjects); if (subjects.length > 0) setSelectedSubject(subjects[0].subject_id); }
  };

  const fetchStudents = async (section) => {
    if (!section) return;
    const { data } = await supabase.from('users').select('user_id, name, email').eq('section', section).eq('role', 'student').order('name', { ascending: true });
    if (data) {
      setStudents(data);
      const initialAttendance = {};
      data.forEach((stu) => { initialAttendance[stu.user_id] = ''; });
      setAttendance(initialAttendance);
    }
  };

  useEffect(() => { if (selectedSection) fetchStudents(selectedSection); }, [selectedSection]);

  const handleAttendanceChange = (studentId, present) => {
    setAttendance({ ...attendance, [studentId]: present });
  };

  const handleSubmit = async () => {
    if (!selectedSubject || !selectedSection || !selectedDate) {
      toast.warn('Please select subject, section, and date');
      return;
    }
    setLoading(true);
    const studentIds = students.map(s => s.user_id);
    const { data: existing } = await supabase.from('attendance').select('*').in('student_id', studentIds).eq('subject_id', selectedSubject).eq('date', selectedDate);
    if (existing?.length > 0) { toast.warn("Attendance already marked"); setLoading(false); return; }

    const records = students.map((stu) => ({
      student_id: stu.user_id, subject_id: selectedSubject, date: selectedDate, status: attendance[stu.user_id] || 'absent', marked_by: user.user_id
    }));
    const { error } = await supabase.from('attendance').insert(records);
    setLoading(false);
    if (error) toast.error("Failed to mark attendance");
    else toast.success("Attendance marked successfully!");
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#EEF1EF]">
        <div className="w-12 h-12 border-4 border-[#5E6572] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#EEF1EF]">
      <ToastContainer position="top-right" autoClose={3000} />
      
      {/* Loading Overlay */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <div className="bg-white p-6 rounded-2xl shadow-2xl flex items-center gap-4">
              <div className="w-8 h-8 border-2 border-[#5E6572] border-t-transparent rounded-full animate-spin" />
              <span className="font-medium text-[#2D3139]">Processing...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: sidebarCollapsed ? 80 : 280 }}
        className="bg-gradient-to-b from-[#5E6572] to-[#3D434D] text-white flex flex-col shadow-2xl relative z-20"
      >
        {/* Logo */}
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center justify-between">
            {!sidebarCollapsed ? (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-bold text-lg">COSMO</h2>
                  <p className="text-xs text-white/60">Faculty Portal</p>
                </div>
              </div>
            ) : (
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mx-auto">
                <GraduationCap className="w-6 h-6" />
              </div>
            )}
          </div>
        </div>

        {/* Toggle */}
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="absolute -right-3 top-20 w-6 h-6 bg-[#5E6572] rounded-full flex items-center justify-center shadow-lg hover:bg-[#4a505b] transition-colors"
        >
          {sidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {sidebarItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id ? 'bg-white/20 shadow-lg' : 'hover:bg-white/10'
              }`}
            >
              <item.icon className={`w-5 h-5 flex-shrink-0 ${activeTab === item.id ? 'text-white' : 'text-white/70'}`} />
              {!sidebarCollapsed && (
                <span className={`text-sm font-medium ${activeTab === item.id ? 'text-white' : 'text-white/70'}`}>
                  {item.label}
                </span>
              )}
            </motion.button>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-3 border-t border-white/10">
          <motion.button
            onClick={() => { localStorage.removeItem('user'); window.location.href = '/login'; }}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/20 text-red-300 transition-all"
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {!sidebarCollapsed && <span className="text-sm font-medium">Logout</span>}
          </motion.button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-sm p-4 mb-6 flex justify-between items-center border border-[#A9B4C2]/20"
        >
          <div>
            <h1 className="text-2xl font-bold text-[#2D3139]">
              {sidebarItems.find(item => item.id === activeTab)?.label || 'Dashboard'}
            </h1>
            <p className="text-sm text-[#6B7280]">{user.department || 'Faculty'} Dashboard</p>
          </div>
          <div className="flex items-center gap-3 pl-4 border-l border-[#A9B4C2]/30">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#5E6572] to-[#3D434D] flex items-center justify-center text-white font-bold shadow-lg">
              {user.name?.charAt(0).toUpperCase()}
            </div>
            <div className="hidden md:block">
              <p className="font-medium text-[#2D3139]">{user.name}</p>
              <p className="text-xs text-[#6B7280]">{user.designation || 'Faculty'}</p>
            </div>
          </div>
        </motion.header>

        {/* Content */}
        <AnimatePresence mode="wait">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <motion.div
              key="profile"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-[#A9B4C2]/20">
                <div className="flex items-center gap-6 mb-8 pb-6 border-b border-[#A9B4C2]/20">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#5E6572] to-[#3D434D] flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                    {user.name?.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#2D3139]">{user.name}</h2>
                    <p className="text-[#6B7280]">Staff ID: {user.user_id}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="px-3 py-1 bg-[#5E6572]/10 rounded-full text-sm text-[#5E6572] font-medium">{user.department || 'Department'}</span>
                      <span className="px-3 py-1 bg-[#A9B4C2]/20 rounded-full text-sm text-[#5E6572] font-medium">{user.designation || 'Faculty'}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-bold text-[#2D3139] flex items-center gap-2">
                      <User className="w-5 h-5 text-[#5E6572]" /> Personal Information
                    </h3>
                    {[
                      { label: "Email", value: user.email, icon: Mail },
                      { label: "Phone", value: user.phone, icon: Phone },
                      { label: "Experience", value: user.experience_years ? `${user.experience_years} years` : null, icon: Briefcase },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-3 p-3 bg-[#EEF1EF]/50 rounded-xl">
                        <item.icon className="w-5 h-5 text-[#A9B4C2]" />
                        <div>
                          <p className="text-xs text-[#6B7280]">{item.label}</p>
                          <p className="font-medium text-[#2D3139]">{item.value || 'Not provided'}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-bold text-[#2D3139] flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-[#5E6572]" /> Assigned Subjects
                    </h3>
                    {subjectList.length > 0 ? (
                      <div className="space-y-2">
                        {subjectList.map(subj => (
                          <div key={subj.subject_id} className="flex items-center justify-between p-3 bg-[#EEF1EF]/50 rounded-xl">
                            <span className="font-medium text-[#2D3139]">{subj.subject_name}</span>
                            <span className="px-3 py-1 bg-[#5E6572]/10 rounded-full text-sm text-[#5E6572]">{subj.subject_code}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-[#6B7280] text-center py-8">No subjects assigned</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Attendance Tab */}
          {activeTab === 'attendance' && (
            <motion.div
              key="attendance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-2xl shadow-sm p-6 border border-[#A9B4C2]/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-[#5E6572] mb-2">Subject</label>
                  <select
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    className="w-full px-4 py-3 bg-[#EEF1EF]/50 border border-[#A9B4C2]/30 rounded-xl text-[#2D3139] focus:outline-none focus:border-[#5E6572]"
                  >
                    <option value="">Select Subject</option>
                    {subjectList.map((subj) => (
                      <option key={subj.subject_id} value={subj.subject_id}>{subj.subject_name} ({subj.subject_code})</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#5E6572] mb-2">Section</label>
                  <select
                    value={selectedSection}
                    onChange={(e) => setSelectedSection(e.target.value)}
                    className="w-full px-4 py-3 bg-[#EEF1EF]/50 border border-[#A9B4C2]/30 rounded-xl text-[#2D3139] focus:outline-none focus:border-[#5E6572]"
                  >
                    {['1A', '1B', '2A', '2B'].map(sec => <option key={sec} value={sec}>{sec}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#5E6572] mb-2">Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 bg-[#EEF1EF]/50 border border-[#A9B4C2]/30 rounded-xl text-[#2D3139] focus:outline-none focus:border-[#5E6572]"
                  />
                </div>
              </div>

              <div className="flex gap-3 mb-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => { const a = {}; students.forEach(s => a[s.user_id] = 'present'); setAttendance(a); }}
                  className="px-4 py-2 bg-green-500 text-white rounded-xl font-medium flex items-center gap-2 hover:bg-green-600 transition-colors"
                >
                  <CheckCircle className="w-4 h-4" /> Mark All Present
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => { const a = {}; students.forEach(s => a[s.user_id] = 'absent'); setAttendance(a); }}
                  className="px-4 py-2 bg-red-500 text-white rounded-xl font-medium flex items-center gap-2 hover:bg-red-600 transition-colors"
                >
                  <X className="w-4 h-4" /> Mark All Absent
                </motion.button>
              </div>

              <div className="space-y-2 mb-6 max-h-[400px] overflow-y-auto">
                {students.length > 0 ? students.map((stu, i) => (
                  <motion.div
                    key={stu.user_id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03 }}
                    className="flex justify-between items-center p-4 bg-[#EEF1EF]/50 rounded-xl hover:bg-[#EEF1EF] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5E6572] to-[#A9B4C2] flex items-center justify-center text-white font-bold">
                        {stu.name?.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-medium text-[#2D3139]">{stu.name}</p>
                        <p className="text-sm text-[#6B7280]">{stu.email}</p>
                      </div>
                    </div>
                    <select
                      value={attendance[stu.user_id] || ''}
                      onChange={(e) => handleAttendanceChange(stu.user_id, e.target.value)}
                      className={`px-4 py-2 rounded-xl border font-medium transition-colors ${
                        attendance[stu.user_id] === 'present' ? 'bg-green-100 border-green-300 text-green-700' :
                        attendance[stu.user_id] === 'absent' ? 'bg-red-100 border-red-300 text-red-700' :
                        'bg-white border-[#A9B4C2]/30 text-[#5E6572]'
                      }`}
                    >
                      <option value="">Select</option>
                      <option value="present">Present</option>
                      <option value="absent">Absent</option>
                    </select>
                  </motion.div>
                )) : (
                  <p className="text-[#6B7280] text-center py-12">No students in this section</p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                className="w-full py-4 bg-gradient-to-r from-[#5E6572] to-[#3D434D] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                Submit Attendance
              </motion.button>
            </motion.div>
          )}

          {/* Students Tab */}
          {activeTab === 'students' && (
            <motion.div
              key="students"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-2xl shadow-sm p-6 border border-[#A9B4C2]/20"
            >
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#5E6572] mb-2">Select Section</label>
                <select
                  value={selectedSection}
                  onChange={(e) => setSelectedSection(e.target.value)}
                  className="w-full md:w-1/3 px-4 py-3 bg-[#EEF1EF]/50 border border-[#A9B4C2]/30 rounded-xl text-[#2D3139] focus:outline-none focus:border-[#5E6572]"
                >
                  {['1A', '1B', '2A', '2B'].map(sec => <option key={sec} value={sec}>{sec}</option>)}
                </select>
              </div>

              {students.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {students.map((stu, i) => (
                    <motion.div
                      key={stu.user_id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ y: -5 }}
                      className="p-4 bg-[#EEF1EF]/50 rounded-2xl border border-[#A9B4C2]/20 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5E6572] to-[#A9B4C2] flex items-center justify-center text-white text-lg font-bold">
                          {stu.name?.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-bold text-[#2D3139]">{stu.name}</p>
                          <p className="text-sm text-[#6B7280]">ID: {stu.user_id}</p>
                        </div>
                      </div>
                      <p className="text-sm text-[#6B7280] flex items-center gap-1">
                        <Mail className="w-4 h-4" /> {stu.email}
                      </p>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p className="text-[#6B7280] text-center py-12">No students in this section</p>
              )}
            </motion.div>
          )}

          {/* Schedule Tab */}
          {activeTab === 'schedule' && (
            <motion.div
              key="schedule"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-2xl shadow-sm p-6 border border-[#A9B4C2]/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  { label: "Subject", value: selectedSubject, onChange: setSelectedSubject, type: "select", options: subjectList.map(s => ({ value: s.subject_id, label: `${s.subject_name} (${s.subject_code})` })) },
                  { label: "Date", value: scheduleDate, onChange: setScheduleDate, type: "date" },
                  { label: "Time", value: scheduleTime, onChange: setScheduleTime, type: "time" },
                  { label: "Room Number", value: roomNo, onChange: setRoomNo, type: "text", placeholder: "E.g. 204" },
                  { label: "Block", value: block, onChange: setBlock, type: "text", placeholder: "E.g. C Block" },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="block text-sm font-medium text-[#5E6572] mb-2">{field.label}</label>
                    {field.type === "select" ? (
                      <select
                        value={field.value}
                        onChange={(e) => field.onChange(e.target.value)}
                        className="w-full px-4 py-3 bg-[#EEF1EF]/50 border border-[#A9B4C2]/30 rounded-xl text-[#2D3139] focus:outline-none focus:border-[#5E6572]"
                      >
                        <option value="">Select {field.label}</option>
                        {field.options?.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        value={field.value}
                        onChange={(e) => field.onChange(e.target.value)}
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3 bg-[#EEF1EF]/50 border border-[#A9B4C2]/30 rounded-xl text-[#2D3139] focus:outline-none focus:border-[#5E6572]"
                      />
                    )}
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleScheduleSubmit}
                className="px-6 py-3 bg-gradient-to-r from-[#5E6572] to-[#3D434D] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2"
              >
                <Plus className="w-5 h-5" /> Add Schedule
              </motion.button>
            </motion.div>
          )}

          {/* Notices Tab */}
          {activeTab === 'notices' && (
            <motion.div
              key="notices"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Post Notice */}
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-[#A9B4C2]/20">
                <h3 className="text-lg font-bold text-[#2D3139] mb-4 flex items-center gap-2">
                  <Plus className="w-5 h-5 text-[#5E6572]" /> Post New Notice
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#5E6572] mb-2">Topic</label>
                    <input
                      type="text"
                      value={noticeTopic}
                      onChange={(e) => setNoticeTopic(e.target.value)}
                      placeholder="Enter notice topic"
                      className="w-full px-4 py-3 bg-[#EEF1EF]/50 border border-[#A9B4C2]/30 rounded-xl text-[#2D3139] focus:outline-none focus:border-[#5E6572]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#5E6572] mb-2">Description</label>
                    <textarea
                      value={noticeDescription}
                      onChange={(e) => setNoticeDescription(e.target.value)}
                      placeholder="Enter notice description"
                      rows={4}
                      className="w-full px-4 py-3 bg-[#EEF1EF]/50 border border-[#A9B4C2]/30 rounded-xl text-[#2D3139] focus:outline-none focus:border-[#5E6572] resize-none"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleNoticeSubmit}
                    className="px-6 py-3 bg-gradient-to-r from-[#5E6572] to-[#3D434D] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2"
                  >
                    <Bell className="w-5 h-5" /> Post Notice
                  </motion.button>
                </div>
              </div>

              {/* Previous Notices */}
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-[#A9B4C2]/20">
                <h3 className="text-lg font-bold text-[#2D3139] mb-4 flex items-center gap-2">
                  <Bell className="w-5 h-5 text-[#5E6572]" /> Previous Notices
                </h3>
                {notices.length > 0 ? (
                  <div className="space-y-4">
                    {notices.map((notice, i) => (
                      <motion.div
                        key={notice.notice_id || i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="p-4 bg-[#EEF1EF]/50 rounded-xl border border-[#A9B4C2]/20"
                      >
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold text-[#2D3139]">{notice.topic}</h4>
                          <span className="text-sm text-[#6B7280]">{notice.date}</span>
                        </div>
                        <p className="text-[#6B7280] mt-2">{notice.description}</p>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <p className="text-[#6B7280] text-center py-8">No notices posted yet</p>
                )}
              </div>
            </motion.div>
          )}

          {/* Results Tab */}
          {activeTab === 'results' && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-2xl shadow-sm p-6 border border-[#A9B4C2]/20"
            >
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-[#5E6572] mb-2">Student ID (Roll No)</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={studentId}
                      onChange={(e) => setStudentId(e.target.value)}
                      placeholder="Enter student ID"
                      className="flex-1 px-4 py-3 bg-[#EEF1EF]/50 border border-[#A9B4C2]/30 rounded-xl text-[#2D3139] focus:outline-none focus:border-[#5E6572]"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => fetchSubjectsForResult(studentId)}
                      className="px-6 py-3 bg-[#5E6572] text-white rounded-xl font-medium flex items-center gap-2"
                    >
                      <Search className="w-4 h-4" /> Load
                    </motion.button>
                  </div>
                </div>

                {studentDetails && (
                  <div className="md:flex-1 p-4 bg-[#EEF1EF]/50 rounded-xl">
                    <p className="font-bold text-[#2D3139]">{studentDetails.name}</p>
                    <p className="text-sm text-[#6B7280]">Section: {studentDetails.section} • Email: {studentDetails.email}</p>
                  </div>
                )}
              </div>

              {resultEntries.length > 0 && (
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="border-b border-[#A9B4C2]/20">
                          <th className="px-4 py-3 text-left text-sm font-semibold text-[#5E6572]">Subject</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-[#5E6572]">Code</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-[#5E6572]">Mid Term</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-[#5E6572]">End Term</th>
                        </tr>
                      </thead>
                      <tbody>
                        {resultEntries.map((subj) => (
                          <tr key={subj.subject_id} className="border-b border-[#A9B4C2]/10 hover:bg-[#EEF1EF]/50">
                            <td className="px-4 py-3 font-medium text-[#2D3139]">{subj.subject_name}</td>
                            <td className="px-4 py-3 text-[#6B7280]">{subj.subject_code}</td>
                            <td className="px-4 py-3">
                              <input
                                type="number"
                                min="0"
                                max="100"
                                value={subj.mid_term_score}
                                onChange={(e) => handleScoreChange(subj.subject_id, 'mid_term_score', e.target.value)}
                                className="w-24 px-3 py-2 bg-[#EEF1EF]/50 border border-[#A9B4C2]/30 rounded-lg text-center"
                              />
                            </td>
                            <td className="px-4 py-3">
                              <input
                                type="number"
                                min="0"
                                max="100"
                                value={subj.end_term_score}
                                onChange={(e) => handleScoreChange(subj.subject_id, 'end_term_score', e.target.value)}
                                className="w-24 px-3 py-2 bg-[#EEF1EF]/50 border border-[#A9B4C2]/30 rounded-lg text-center"
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleResultSubmit}
                    className="px-6 py-3 bg-green-500 text-white rounded-xl font-semibold shadow-lg hover:bg-green-600 transition-colors flex items-center gap-2"
                  >
                    <Save className="w-5 h-5" /> Save Results
                  </motion.button>
                </div>
              )}
            </motion.div>
          )}

          {/* Assignments Tab */}
          {activeTab === 'assignments' && (
            <motion.div
              key="assignments"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <StaffAssignments user={user} />
            </motion.div>
          )}

          {/* Risk Dashboard Tab */}
          {activeTab === 'risk-dashboard' && (
            <motion.div
              key="risk-dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-gradient-to-br from-[#2D3139] to-[#5E6572] rounded-2xl shadow-xl p-6 min-h-[600px]"
            >
              <StaffRiskDashboard />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default StaffDashboard;
