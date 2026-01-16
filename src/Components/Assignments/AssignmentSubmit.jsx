// frontend/src/Components/Assignments/AssignmentSubmit.jsx
// Modal for submitting assignments

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitTextAssignment, submitFileAssignment } from '../../api/api';

const AssignmentSubmit = ({ assignment, onClose, onSuccess }) => {
  const [submitType, setSubmitType] = useState('file'); // 'file' or 'text'
  const [textContent, setTextContent] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const allowedFormats = assignment.allowed_formats || ['pdf', 'ppt', 'pptx', 'doc', 'docx', 'txt'];
  const allowedExtensions = allowedFormats.map(f => `.${f}`).join(',');

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (file) => {
    const ext = file.name.split('.').pop().toLowerCase();
    if (!allowedFormats.includes(ext)) {
      setError(`Invalid file type. Allowed: ${allowedFormats.join(', ')}`);
      return;
    }
    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      setError('File too large. Maximum size is 10MB');
      return;
    }
    setSelectedFile(file);
    setError('');
  };

  const handleSubmit = async () => {
    try {
      setUploading(true);
      setError('');

      if (submitType === 'text') {
        if (!textContent.trim()) {
          setError('Please enter your submission content');
          return;
        }
        await submitTextAssignment(assignment.id, textContent);
      } else {
        if (!selectedFile) {
          setError('Please select a file to upload');
          return;
        }
        await submitFileAssignment(assignment.id, selectedFile);
      }

      onSuccess();
    } catch (err) {
      console.error('Submit error:', err);
      setError(err.response?.data?.detail || 'Failed to submit assignment');
    } finally {
      setUploading(false);
    }
  };

  const getFileIcon = (filename) => {
    const ext = filename?.split('.').pop().toLowerCase();
    const icons = {
      pdf: '📕',
      ppt: '📊',
      pptx: '📊',
      doc: '📄',
      docx: '📄',
      txt: '📝'
    };
    return icons[ext] || '📁';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold mb-1">📤 Submit Assignment</h2>
              <p className="text-blue-100 text-sm">{assignment.title}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {/* Submission Type Toggle */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setSubmitType('file')}
              className={`flex-1 py-3 rounded-xl font-medium transition-all ${
                submitType === 'file'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              📁 Upload File
            </button>
            <button
              onClick={() => setSubmitType('text')}
              className={`flex-1 py-3 rounded-xl font-medium transition-all ${
                submitType === 'text'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              ✏️ Write Text
            </button>
          </div>

          <AnimatePresence mode="wait">
            {submitType === 'file' ? (
              <motion.div
                key="file"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                {/* File Upload Area */}
                <div
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${
                    dragActive
                      ? 'border-blue-500 bg-blue-50'
                      : selectedFile
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept={allowedExtensions}
                    onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
                    className="hidden"
                  />
                  
                  {selectedFile ? (
                    <div>
                      <div className="text-5xl mb-3">{getFileIcon(selectedFile.name)}</div>
                      <p className="font-medium text-gray-900">{selectedFile.name}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedFile(null);
                        }}
                        className="mt-3 text-red-600 hover:text-red-700 text-sm font-medium"
                      >
                        ✕ Remove
                      </button>
                    </div>
                  ) : (
                    <div>
                      <div className="text-5xl mb-3">📤</div>
                      <p className="font-medium text-gray-700">
                        Drag & drop your file here
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        or click to browse
                      </p>
                      <p className="text-xs text-gray-400 mt-3">
                        Supported: {allowedFormats.join(', ').toUpperCase()} (Max 10MB)
                      </p>
                    </div>
                  )}
                </div>

                {/* Format Icons */}
                <div className="flex justify-center gap-4 mt-4">
                  {[
                    { ext: 'pdf', icon: '📕', label: 'PDF' },
                    { ext: 'ppt', icon: '📊', label: 'PPT' },
                    { ext: 'doc', icon: '📄', label: 'DOC' },
                    { ext: 'txt', icon: '📝', label: 'TXT' }
                  ].filter(f => allowedFormats.some(a => a.includes(f.ext))).map(format => (
                    <div key={format.ext} className="text-center">
                      <div className="text-2xl">{format.icon}</div>
                      <div className="text-xs text-gray-500">{format.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="text"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                {/* Text Input */}
                <textarea
                  value={textContent}
                  onChange={(e) => setTextContent(e.target.value)}
                  placeholder="Write your submission here..."
                  className="w-full h-64 p-4 border-2 border-gray-200 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="flex justify-between mt-2 text-sm text-gray-500">
                  <span>{textContent.length} characters</span>
                  <span>{textContent.split(/\s+/).filter(w => w).length} words</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm"
            >
              ⚠️ {error}
            </motion.div>
          )}

          {/* Instructions */}
          {assignment.instructions && (
            <div className="mt-6 p-4 bg-gray-50 rounded-xl">
              <h4 className="font-medium text-gray-700 mb-2">📋 Instructions</h4>
              <p className="text-sm text-gray-600 whitespace-pre-wrap">
                {assignment.instructions}
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 bg-gray-50 border-t flex gap-3">
          <button
            onClick={onClose}
            disabled={uploading}
            className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-300 transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={uploading || (submitType === 'file' && !selectedFile) || (submitType === 'text' && !textContent.trim())}
            className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {uploading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
                Submitting...
              </>
            ) : (
              <>🚀 Submit Assignment</>
            )}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AssignmentSubmit;
