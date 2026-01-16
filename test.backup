--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

CREATE ROLE anon;
ALTER ROLE anon WITH NOSUPERUSER INHERIT NOCREATEROLE NOCREATEDB NOLOGIN NOREPLICATION NOBYPASSRLS;
CREATE ROLE authenticated;
ALTER ROLE authenticated WITH NOSUPERUSER INHERIT NOCREATEROLE NOCREATEDB NOLOGIN NOREPLICATION NOBYPASSRLS;
CREATE ROLE authenticator;
ALTER ROLE authenticator WITH NOSUPERUSER NOINHERIT NOCREATEROLE NOCREATEDB LOGIN NOREPLICATION NOBYPASSRLS;
CREATE ROLE dashboard_user;
ALTER ROLE dashboard_user WITH NOSUPERUSER INHERIT CREATEROLE CREATEDB NOLOGIN REPLICATION NOBYPASSRLS;
CREATE ROLE pgbouncer;
ALTER ROLE pgbouncer WITH NOSUPERUSER INHERIT NOCREATEROLE NOCREATEDB LOGIN NOREPLICATION NOBYPASSRLS;
CREATE ROLE postgres;
ALTER ROLE postgres WITH NOSUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS;
CREATE ROLE service_role;
ALTER ROLE service_role WITH NOSUPERUSER INHERIT NOCREATEROLE NOCREATEDB NOLOGIN NOREPLICATION BYPASSRLS;
CREATE ROLE supabase_admin;
ALTER ROLE supabase_admin WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS;
CREATE ROLE supabase_auth_admin;
ALTER ROLE supabase_auth_admin WITH NOSUPERUSER NOINHERIT CREATEROLE NOCREATEDB LOGIN NOREPLICATION NOBYPASSRLS;
CREATE ROLE supabase_read_only_user;
ALTER ROLE supabase_read_only_user WITH NOSUPERUSER INHERIT NOCREATEROLE NOCREATEDB LOGIN NOREPLICATION BYPASSRLS;
CREATE ROLE supabase_realtime_admin;
ALTER ROLE supabase_realtime_admin WITH NOSUPERUSER NOINHERIT NOCREATEROLE NOCREATEDB NOLOGIN NOREPLICATION NOBYPASSRLS;
CREATE ROLE supabase_replication_admin;
ALTER ROLE supabase_replication_admin WITH NOSUPERUSER INHERIT NOCREATEROLE NOCREATEDB LOGIN REPLICATION NOBYPASSRLS;
CREATE ROLE supabase_storage_admin;
ALTER ROLE supabase_storage_admin WITH NOSUPERUSER NOINHERIT CREATEROLE NOCREATEDB LOGIN NOREPLICATION NOBYPASSRLS;

--
-- User Configurations
--

--
-- User Config "anon"
--

ALTER ROLE anon SET statement_timeout TO '3s';

--
-- User Config "authenticated"
--

ALTER ROLE authenticated SET statement_timeout TO '8s';

--
-- User Config "authenticator"
--

ALTER ROLE authenticator SET session_preload_libraries TO 'safeupdate';
ALTER ROLE authenticator SET statement_timeout TO '8s';
ALTER ROLE authenticator SET lock_timeout TO '8s';

--
-- User Config "postgres"
--

ALTER ROLE postgres SET search_path TO E'\\$user', 'public', 'extensions';

--
-- User Config "supabase_admin"
--

ALTER ROLE supabase_admin SET search_path TO '$user', 'public', 'auth', 'extensions';
ALTER ROLE supabase_admin SET log_statement TO 'none';

--
-- User Config "supabase_auth_admin"
--

ALTER ROLE supabase_auth_admin SET search_path TO 'auth';
ALTER ROLE supabase_auth_admin SET idle_in_transaction_session_timeout TO '60000';
ALTER ROLE supabase_auth_admin SET log_statement TO 'none';

--
-- User Config "supabase_storage_admin"
--

ALTER ROLE supabase_storage_admin SET search_path TO 'storage';
ALTER ROLE supabase_storage_admin SET log_statement TO 'none';


--
-- Role memberships
--

GRANT anon TO authenticator WITH INHERIT FALSE GRANTED BY supabase_admin;
GRANT anon TO postgres WITH ADMIN OPTION, INHERIT TRUE GRANTED BY supabase_admin;
GRANT authenticated TO authenticator WITH INHERIT FALSE GRANTED BY supabase_admin;
GRANT authenticated TO postgres WITH ADMIN OPTION, INHERIT TRUE GRANTED BY supabase_admin;
GRANT authenticator TO postgres WITH ADMIN OPTION, INHERIT TRUE GRANTED BY supabase_admin;
GRANT authenticator TO supabase_storage_admin WITH INHERIT FALSE GRANTED BY supabase_admin;
GRANT pg_create_subscription TO postgres WITH INHERIT TRUE GRANTED BY supabase_admin;
GRANT pg_monitor TO postgres WITH ADMIN OPTION, INHERIT TRUE GRANTED BY supabase_admin;
GRANT pg_read_all_data TO postgres WITH ADMIN OPTION, INHERIT TRUE GRANTED BY supabase_admin;
GRANT pg_read_all_data TO supabase_read_only_user WITH INHERIT TRUE GRANTED BY supabase_admin;
GRANT pg_signal_backend TO postgres WITH ADMIN OPTION, INHERIT TRUE GRANTED BY supabase_admin;
GRANT service_role TO authenticator WITH INHERIT FALSE GRANTED BY supabase_admin;
GRANT service_role TO postgres WITH ADMIN OPTION, INHERIT TRUE GRANTED BY supabase_admin;
GRANT supabase_realtime_admin TO postgres WITH INHERIT TRUE GRANTED BY supabase_admin;






--
-- Databases
--

--
-- Database "template1" dump
--

\connect template1

--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.5 (Debian 17.5-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

\connect postgres

--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.5 (Debian 17.5-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: auth; Type: SCHEMA; Schema: -; Owner: supabase_admin
--

CREATE SCHEMA auth;


ALTER SCHEMA auth OWNER TO supabase_admin;

--
-- Name: extensions; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA extensions;


ALTER SCHEMA extensions OWNER TO postgres;

--
-- Name: graphql; Type: SCHEMA; Schema: -; Owner: supabase_admin
--

CREATE SCHEMA graphql;


ALTER SCHEMA graphql OWNER TO supabase_admin;

--
-- Name: graphql_public; Type: SCHEMA; Schema: -; Owner: supabase_admin
--

CREATE SCHEMA graphql_public;


ALTER SCHEMA graphql_public OWNER TO supabase_admin;

--
-- Name: pgbouncer; Type: SCHEMA; Schema: -; Owner: pgbouncer
--

CREATE SCHEMA pgbouncer;


ALTER SCHEMA pgbouncer OWNER TO pgbouncer;

--
-- Name: realtime; Type: SCHEMA; Schema: -; Owner: supabase_admin
--

CREATE SCHEMA realtime;


ALTER SCHEMA realtime OWNER TO supabase_admin;

--
-- Name: storage; Type: SCHEMA; Schema: -; Owner: supabase_admin
--

CREATE SCHEMA storage;


ALTER SCHEMA storage OWNER TO supabase_admin;

--
-- Name: vault; Type: SCHEMA; Schema: -; Owner: supabase_admin
--

CREATE SCHEMA vault;


ALTER SCHEMA vault OWNER TO supabase_admin;

--
-- Name: pg_graphql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pg_graphql WITH SCHEMA graphql;


--
-- Name: EXTENSION pg_graphql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pg_graphql IS 'pg_graphql: GraphQL support';


--
-- Name: pg_stat_statements; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pg_stat_statements WITH SCHEMA extensions;


--
-- Name: EXTENSION pg_stat_statements; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pg_stat_statements IS 'track planning and execution statistics of all SQL statements executed';


--
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA extensions;


--
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


--
-- Name: supabase_vault; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS supabase_vault WITH SCHEMA vault;


--
-- Name: EXTENSION supabase_vault; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION supabase_vault IS 'Supabase Vault Extension';


--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA extensions;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


--
-- Name: aal_level; Type: TYPE; Schema: auth; Owner: supabase_auth_admin
--

CREATE TYPE auth.aal_level AS ENUM (
    'aal1',
    'aal2',
    'aal3'
);


ALTER TYPE auth.aal_level OWNER TO supabase_auth_admin;

--
-- Name: code_challenge_method; Type: TYPE; Schema: auth; Owner: supabase_auth_admin
--

CREATE TYPE auth.code_challenge_method AS ENUM (
    's256',
    'plain'
);


ALTER TYPE auth.code_challenge_method OWNER TO supabase_auth_admin;

--
-- Name: factor_status; Type: TYPE; Schema: auth; Owner: supabase_auth_admin
--

CREATE TYPE auth.factor_status AS ENUM (
    'unverified',
    'verified'
);


ALTER TYPE auth.factor_status OWNER TO supabase_auth_admin;

--
-- Name: factor_type; Type: TYPE; Schema: auth; Owner: supabase_auth_admin
--

CREATE TYPE auth.factor_type AS ENUM (
    'totp',
    'webauthn',
    'phone'
);


ALTER TYPE auth.factor_type OWNER TO supabase_auth_admin;

--
-- Name: one_time_token_type; Type: TYPE; Schema: auth; Owner: supabase_auth_admin
--

CREATE TYPE auth.one_time_token_type AS ENUM (
    'confirmation_token',
    'reauthentication_token',
    'recovery_token',
    'email_change_token_new',
    'email_change_token_current',
    'phone_change_token'
);


ALTER TYPE auth.one_time_token_type OWNER TO supabase_auth_admin;

--
-- Name: action; Type: TYPE; Schema: realtime; Owner: supabase_admin
--

CREATE TYPE realtime.action AS ENUM (
    'INSERT',
    'UPDATE',
    'DELETE',
    'TRUNCATE',
    'ERROR'
);


ALTER TYPE realtime.action OWNER TO supabase_admin;

--
-- Name: equality_op; Type: TYPE; Schema: realtime; Owner: supabase_admin
--

CREATE TYPE realtime.equality_op AS ENUM (
    'eq',
    'neq',
    'lt',
    'lte',
    'gt',
    'gte',
    'in'
);


ALTER TYPE realtime.equality_op OWNER TO supabase_admin;

--
-- Name: user_defined_filter; Type: TYPE; Schema: realtime; Owner: supabase_admin
--

CREATE TYPE realtime.user_defined_filter AS (
	column_name text,
	op realtime.equality_op,
	value text
);


ALTER TYPE realtime.user_defined_filter OWNER TO supabase_admin;

--
-- Name: wal_column; Type: TYPE; Schema: realtime; Owner: supabase_admin
--

CREATE TYPE realtime.wal_column AS (
	name text,
	type_name text,
	type_oid oid,
	value jsonb,
	is_pkey boolean,
	is_selectable boolean
);


ALTER TYPE realtime.wal_column OWNER TO supabase_admin;

--
-- Name: wal_rls; Type: TYPE; Schema: realtime; Owner: supabase_admin
--

CREATE TYPE realtime.wal_rls AS (
	wal jsonb,
	is_rls_enabled boolean,
	subscription_ids uuid[],
	errors text[]
);


ALTER TYPE realtime.wal_rls OWNER TO supabase_admin;

--
-- Name: email(); Type: FUNCTION; Schema: auth; Owner: supabase_auth_admin
--

CREATE FUNCTION auth.email() RETURNS text
    LANGUAGE sql STABLE
    AS $$
  select 
  coalesce(
    nullif(current_setting('request.jwt.claim.email', true), ''),
    (nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'email')
  )::text
$$;


ALTER FUNCTION auth.email() OWNER TO supabase_auth_admin;

--
-- Name: FUNCTION email(); Type: COMMENT; Schema: auth; Owner: supabase_auth_admin
--

COMMENT ON FUNCTION auth.email() IS 'Deprecated. Use auth.jwt() -> ''email'' instead.';


--
-- Name: jwt(); Type: FUNCTION; Schema: auth; Owner: supabase_auth_admin
--

CREATE FUNCTION auth.jwt() RETURNS jsonb
    LANGUAGE sql STABLE
    AS $$
  select 
    coalesce(
        nullif(current_setting('request.jwt.claim', true), ''),
        nullif(current_setting('request.jwt.claims', true), '')
    )::jsonb
$$;


ALTER FUNCTION auth.jwt() OWNER TO supabase_auth_admin;

--
-- Name: role(); Type: FUNCTION; Schema: auth; Owner: supabase_auth_admin
--

CREATE FUNCTION auth.role() RETURNS text
    LANGUAGE sql STABLE
    AS $$
  select 
  coalesce(
    nullif(current_setting('request.jwt.claim.role', true), ''),
    (nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'role')
  )::text
$$;


ALTER FUNCTION auth.role() OWNER TO supabase_auth_admin;

--
-- Name: FUNCTION role(); Type: COMMENT; Schema: auth; Owner: supabase_auth_admin
--

COMMENT ON FUNCTION auth.role() IS 'Deprecated. Use auth.jwt() -> ''role'' instead.';


--
-- Name: uid(); Type: FUNCTION; Schema: auth; Owner: supabase_auth_admin
--

CREATE FUNCTION auth.uid() RETURNS uuid
    LANGUAGE sql STABLE
    AS $$
  select 
  coalesce(
    nullif(current_setting('request.jwt.claim.sub', true), ''),
    (nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'sub')
  )::uuid
$$;


ALTER FUNCTION auth.uid() OWNER TO supabase_auth_admin;

--
-- Name: FUNCTION uid(); Type: COMMENT; Schema: auth; Owner: supabase_auth_admin
--

COMMENT ON FUNCTION auth.uid() IS 'Deprecated. Use auth.jwt() -> ''sub'' instead.';


--
-- Name: grant_pg_cron_access(); Type: FUNCTION; Schema: extensions; Owner: supabase_admin
--

CREATE FUNCTION extensions.grant_pg_cron_access() RETURNS event_trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  IF EXISTS (
    SELECT
    FROM pg_event_trigger_ddl_commands() AS ev
    JOIN pg_extension AS ext
    ON ev.objid = ext.oid
    WHERE ext.extname = 'pg_cron'
  )
  THEN
    grant usage on schema cron to postgres with grant option;

    alter default privileges in schema cron grant all on tables to postgres with grant option;
    alter default privileges in schema cron grant all on functions to postgres with grant option;
    alter default privileges in schema cron grant all on sequences to postgres with grant option;

    alter default privileges for user supabase_admin in schema cron grant all
        on sequences to postgres with grant option;
    alter default privileges for user supabase_admin in schema cron grant all
        on tables to postgres with grant option;
    alter default privileges for user supabase_admin in schema cron grant all
        on functions to postgres with grant option;

    grant all privileges on all tables in schema cron to postgres with grant option;
    revoke all on table cron.job from postgres;
    grant select on table cron.job to postgres with grant option;
  END IF;
END;
$$;


ALTER FUNCTION extensions.grant_pg_cron_access() OWNER TO supabase_admin;

--
-- Name: FUNCTION grant_pg_cron_access(); Type: COMMENT; Schema: extensions; Owner: supabase_admin
--

COMMENT ON FUNCTION extensions.grant_pg_cron_access() IS 'Grants access to pg_cron';


--
-- Name: grant_pg_graphql_access(); Type: FUNCTION; Schema: extensions; Owner: supabase_admin
--

CREATE FUNCTION extensions.grant_pg_graphql_access() RETURNS event_trigger
    LANGUAGE plpgsql
    AS $_$
DECLARE
    func_is_graphql_resolve bool;
BEGIN
    func_is_graphql_resolve = (
        SELECT n.proname = 'resolve'
        FROM pg_event_trigger_ddl_commands() AS ev
        LEFT JOIN pg_catalog.pg_proc AS n
        ON ev.objid = n.oid
    );

    IF func_is_graphql_resolve
    THEN
        -- Update public wrapper to pass all arguments through to the pg_graphql resolve func
        DROP FUNCTION IF EXISTS graphql_public.graphql;
        create or replace function graphql_public.graphql(
            "operationName" text default null,
            query text default null,
            variables jsonb default null,
            extensions jsonb default null
        )
            returns jsonb
            language sql
        as $$
            select graphql.resolve(
                query := query,
                variables := coalesce(variables, '{}'),
                "operationName" := "operationName",
                extensions := extensions
            );
        $$;

        -- This hook executes when `graphql.resolve` is created. That is not necessarily the last
        -- function in the extension so we need to grant permissions on existing entities AND
        -- update default permissions to any others that are created after `graphql.resolve`
        grant usage on schema graphql to postgres, anon, authenticated, service_role;
        grant select on all tables in schema graphql to postgres, anon, authenticated, service_role;
        grant execute on all functions in schema graphql to postgres, anon, authenticated, service_role;
        grant all on all sequences in schema graphql to postgres, anon, authenticated, service_role;
        alter default privileges in schema graphql grant all on tables to postgres, anon, authenticated, service_role;
        alter default privileges in schema graphql grant all on functions to postgres, anon, authenticated, service_role;
        alter default privileges in schema graphql grant all on sequences to postgres, anon, authenticated, service_role;

        -- Allow postgres role to allow granting usage on graphql and graphql_public schemas to custom roles
        grant usage on schema graphql_public to postgres with grant option;
        grant usage on schema graphql to postgres with grant option;
    END IF;

END;
$_$;


ALTER FUNCTION extensions.grant_pg_graphql_access() OWNER TO supabase_admin;

--
-- Name: FUNCTION grant_pg_graphql_access(); Type: COMMENT; Schema: extensions; Owner: supabase_admin
--

COMMENT ON FUNCTION extensions.grant_pg_graphql_access() IS 'Grants access to pg_graphql';


--
-- Name: grant_pg_net_access(); Type: FUNCTION; Schema: extensions; Owner: supabase_admin
--

CREATE FUNCTION extensions.grant_pg_net_access() RETURNS event_trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM pg_event_trigger_ddl_commands() AS ev
    JOIN pg_extension AS ext
    ON ev.objid = ext.oid
    WHERE ext.extname = 'pg_net'
  )
  THEN
    IF NOT EXISTS (
      SELECT 1
      FROM pg_roles
      WHERE rolname = 'supabase_functions_admin'
    )
    THEN
      CREATE USER supabase_functions_admin NOINHERIT CREATEROLE LOGIN NOREPLICATION;
    END IF;

    GRANT USAGE ON SCHEMA net TO supabase_functions_admin, postgres, anon, authenticated, service_role;

    IF EXISTS (
      SELECT FROM pg_extension
      WHERE extname = 'pg_net'
      -- all versions in use on existing projects as of 2025-02-20
      -- version 0.12.0 onwards don't need these applied
      AND extversion IN ('0.2', '0.6', '0.7', '0.7.1', '0.8', '0.10.0', '0.11.0')
    ) THEN
      ALTER function net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) SECURITY DEFINER;
      ALTER function net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) SECURITY DEFINER;

      ALTER function net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) SET search_path = net;
      ALTER function net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) SET search_path = net;

      REVOKE ALL ON FUNCTION net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) FROM PUBLIC;
      REVOKE ALL ON FUNCTION net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) FROM PUBLIC;

      GRANT EXECUTE ON FUNCTION net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) TO supabase_functions_admin, postgres, anon, authenticated, service_role;
      GRANT EXECUTE ON FUNCTION net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) TO supabase_functions_admin, postgres, anon, authenticated, service_role;
    END IF;
  END IF;
END;
$$;


ALTER FUNCTION extensions.grant_pg_net_access() OWNER TO supabase_admin;

--
-- Name: FUNCTION grant_pg_net_access(); Type: COMMENT; Schema: extensions; Owner: supabase_admin
--

COMMENT ON FUNCTION extensions.grant_pg_net_access() IS 'Grants access to pg_net';


--
-- Name: pgrst_ddl_watch(); Type: FUNCTION; Schema: extensions; Owner: supabase_admin
--

CREATE FUNCTION extensions.pgrst_ddl_watch() RETURNS event_trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  cmd record;
BEGIN
  FOR cmd IN SELECT * FROM pg_event_trigger_ddl_commands()
  LOOP
    IF cmd.command_tag IN (
      'CREATE SCHEMA', 'ALTER SCHEMA'
    , 'CREATE TABLE', 'CREATE TABLE AS', 'SELECT INTO', 'ALTER TABLE'
    , 'CREATE FOREIGN TABLE', 'ALTER FOREIGN TABLE'
    , 'CREATE VIEW', 'ALTER VIEW'
    , 'CREATE MATERIALIZED VIEW', 'ALTER MATERIALIZED VIEW'
    , 'CREATE FUNCTION', 'ALTER FUNCTION'
    , 'CREATE TRIGGER'
    , 'CREATE TYPE', 'ALTER TYPE'
    , 'CREATE RULE'
    , 'COMMENT'
    )
    -- don't notify in case of CREATE TEMP table or other objects created on pg_temp
    AND cmd.schema_name is distinct from 'pg_temp'
    THEN
      NOTIFY pgrst, 'reload schema';
    END IF;
  END LOOP;
END; $$;


ALTER FUNCTION extensions.pgrst_ddl_watch() OWNER TO supabase_admin;

--
-- Name: pgrst_drop_watch(); Type: FUNCTION; Schema: extensions; Owner: supabase_admin
--

CREATE FUNCTION extensions.pgrst_drop_watch() RETURNS event_trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  obj record;
BEGIN
  FOR obj IN SELECT * FROM pg_event_trigger_dropped_objects()
  LOOP
    IF obj.object_type IN (
      'schema'
    , 'table'
    , 'foreign table'
    , 'view'
    , 'materialized view'
    , 'function'
    , 'trigger'
    , 'type'
    , 'rule'
    )
    AND obj.is_temporary IS false -- no pg_temp objects
    THEN
      NOTIFY pgrst, 'reload schema';
    END IF;
  END LOOP;
END; $$;


ALTER FUNCTION extensions.pgrst_drop_watch() OWNER TO supabase_admin;

--
-- Name: set_graphql_placeholder(); Type: FUNCTION; Schema: extensions; Owner: supabase_admin
--

CREATE FUNCTION extensions.set_graphql_placeholder() RETURNS event_trigger
    LANGUAGE plpgsql
    AS $_$
    DECLARE
    graphql_is_dropped bool;
    BEGIN
    graphql_is_dropped = (
        SELECT ev.schema_name = 'graphql_public'
        FROM pg_event_trigger_dropped_objects() AS ev
        WHERE ev.schema_name = 'graphql_public'
    );

    IF graphql_is_dropped
    THEN
        create or replace function graphql_public.graphql(
            "operationName" text default null,
            query text default null,
            variables jsonb default null,
            extensions jsonb default null
        )
            returns jsonb
            language plpgsql
        as $$
            DECLARE
                server_version float;
            BEGIN
                server_version = (SELECT (SPLIT_PART((select version()), ' ', 2))::float);

                IF server_version >= 14 THEN
                    RETURN jsonb_build_object(
                        'errors', jsonb_build_array(
                            jsonb_build_object(
                                'message', 'pg_graphql extension is not enabled.'
                            )
                        )
                    );
                ELSE
                    RETURN jsonb_build_object(
                        'errors', jsonb_build_array(
                            jsonb_build_object(
                                'message', 'pg_graphql is only available on projects running Postgres 14 onwards.'
                            )
                        )
                    );
                END IF;
            END;
        $$;
    END IF;

    END;
$_$;


ALTER FUNCTION extensions.set_graphql_placeholder() OWNER TO supabase_admin;

--
-- Name: FUNCTION set_graphql_placeholder(); Type: COMMENT; Schema: extensions; Owner: supabase_admin
--

COMMENT ON FUNCTION extensions.set_graphql_placeholder() IS 'Reintroduces placeholder function for graphql_public.graphql';


--
-- Name: get_auth(text); Type: FUNCTION; Schema: pgbouncer; Owner: supabase_admin
--

CREATE FUNCTION pgbouncer.get_auth(p_usename text) RETURNS TABLE(username text, password text)
    LANGUAGE plpgsql SECURITY DEFINER
    AS $_$
begin
    raise debug 'PgBouncer auth request: %', p_usename;

    return query
    select 
        rolname::text, 
        case when rolvaliduntil < now() 
            then null 
            else rolpassword::text 
        end 
    from pg_authid 
    where rolname=$1 and rolcanlogin;
end;
$_$;


ALTER FUNCTION pgbouncer.get_auth(p_usename text) OWNER TO supabase_admin;

--
-- Name: apply_rls(jsonb, integer); Type: FUNCTION; Schema: realtime; Owner: supabase_admin
--

CREATE FUNCTION realtime.apply_rls(wal jsonb, max_record_bytes integer DEFAULT (1024 * 1024)) RETURNS SETOF realtime.wal_rls
    LANGUAGE plpgsql
    AS $$
declare
-- Regclass of the table e.g. public.notes
entity_ regclass = (quote_ident(wal ->> 'schema') || '.' || quote_ident(wal ->> 'table'))::regclass;

-- I, U, D, T: insert, update ...
action realtime.action = (
    case wal ->> 'action'
        when 'I' then 'INSERT'
        when 'U' then 'UPDATE'
        when 'D' then 'DELETE'
        else 'ERROR'
    end
);

-- Is row level security enabled for the table
is_rls_enabled bool = relrowsecurity from pg_class where oid = entity_;

subscriptions realtime.subscription[] = array_agg(subs)
    from
        realtime.subscription subs
    where
        subs.entity = entity_;

-- Subscription vars
roles regrole[] = array_agg(distinct us.claims_role::text)
    from
        unnest(subscriptions) us;

working_role regrole;
claimed_role regrole;
claims jsonb;

subscription_id uuid;
subscription_has_access bool;
visible_to_subscription_ids uuid[] = '{}';

-- structured info for wal's columns
columns realtime.wal_column[];
-- previous identity values for update/delete
old_columns realtime.wal_column[];

error_record_exceeds_max_size boolean = octet_length(wal::text) > max_record_bytes;

-- Primary jsonb output for record
output jsonb;

begin
perform set_config('role', null, true);

columns =
    array_agg(
        (
            x->>'name',
            x->>'type',
            x->>'typeoid',
            realtime.cast(
                (x->'value') #>> '{}',
                coalesce(
                    (x->>'typeoid')::regtype, -- null when wal2json version <= 2.4
                    (x->>'type')::regtype
                )
            ),
            (pks ->> 'name') is not null,
            true
        )::realtime.wal_column
    )
    from
        jsonb_array_elements(wal -> 'columns') x
        left join jsonb_array_elements(wal -> 'pk') pks
            on (x ->> 'name') = (pks ->> 'name');

old_columns =
    array_agg(
        (
            x->>'name',
            x->>'type',
            x->>'typeoid',
            realtime.cast(
                (x->'value') #>> '{}',
                coalesce(
                    (x->>'typeoid')::regtype, -- null when wal2json version <= 2.4
                    (x->>'type')::regtype
                )
            ),
            (pks ->> 'name') is not null,
            true
        )::realtime.wal_column
    )
    from
        jsonb_array_elements(wal -> 'identity') x
        left join jsonb_array_elements(wal -> 'pk') pks
            on (x ->> 'name') = (pks ->> 'name');

for working_role in select * from unnest(roles) loop

    -- Update `is_selectable` for columns and old_columns
    columns =
        array_agg(
            (
                c.name,
                c.type_name,
                c.type_oid,
                c.value,
                c.is_pkey,
                pg_catalog.has_column_privilege(working_role, entity_, c.name, 'SELECT')
            )::realtime.wal_column
        )
        from
            unnest(columns) c;

    old_columns =
            array_agg(
                (
                    c.name,
                    c.type_name,
                    c.type_oid,
                    c.value,
                    c.is_pkey,
                    pg_catalog.has_column_privilege(working_role, entity_, c.name, 'SELECT')
                )::realtime.wal_column
            )
            from
                unnest(old_columns) c;

    if action <> 'DELETE' and count(1) = 0 from unnest(columns) c where c.is_pkey then
        return next (
            jsonb_build_object(
                'schema', wal ->> 'schema',
                'table', wal ->> 'table',
                'type', action
            ),
            is_rls_enabled,
            -- subscriptions is already filtered by entity
            (select array_agg(s.subscription_id) from unnest(subscriptions) as s where claims_role = working_role),
            array['Error 400: Bad Request, no primary key']
        )::realtime.wal_rls;

    -- The claims role does not have SELECT permission to the primary key of entity
    elsif action <> 'DELETE' and sum(c.is_selectable::int) <> count(1) from unnest(columns) c where c.is_pkey then
        return next (
            jsonb_build_object(
                'schema', wal ->> 'schema',
                'table', wal ->> 'table',
                'type', action
            ),
            is_rls_enabled,
            (select array_agg(s.subscription_id) from unnest(subscriptions) as s where claims_role = working_role),
            array['Error 401: Unauthorized']
        )::realtime.wal_rls;

    else
        output = jsonb_build_object(
            'schema', wal ->> 'schema',
            'table', wal ->> 'table',
            'type', action,
            'commit_timestamp', to_char(
                ((wal ->> 'timestamp')::timestamptz at time zone 'utc'),
                'YYYY-MM-DD"T"HH24:MI:SS.MS"Z"'
            ),
            'columns', (
                select
                    jsonb_agg(
                        jsonb_build_object(
                            'name', pa.attname,
                            'type', pt.typname
                        )
                        order by pa.attnum asc
                    )
                from
                    pg_attribute pa
                    join pg_type pt
                        on pa.atttypid = pt.oid
                where
                    attrelid = entity_
                    and attnum > 0
                    and pg_catalog.has_column_privilege(working_role, entity_, pa.attname, 'SELECT')
            )
        )
        -- Add "record" key for insert and update
        || case
            when action in ('INSERT', 'UPDATE') then
                jsonb_build_object(
                    'record',
                    (
                        select
                            jsonb_object_agg(
                                -- if unchanged toast, get column name and value from old record
                                coalesce((c).name, (oc).name),
                                case
                                    when (c).name is null then (oc).value
                                    else (c).value
                                end
                            )
                        from
                            unnest(columns) c
                            full outer join unnest(old_columns) oc
                                on (c).name = (oc).name
                        where
                            coalesce((c).is_selectable, (oc).is_selectable)
                            and ( not error_record_exceeds_max_size or (octet_length((c).value::text) <= 64))
                    )
                )
            else '{}'::jsonb
        end
        -- Add "old_record" key for update and delete
        || case
            when action = 'UPDATE' then
                jsonb_build_object(
                        'old_record',
                        (
                            select jsonb_object_agg((c).name, (c).value)
                            from unnest(old_columns) c
                            where
                                (c).is_selectable
                                and ( not error_record_exceeds_max_size or (octet_length((c).value::text) <= 64))
                        )
                    )
            when action = 'DELETE' then
                jsonb_build_object(
                    'old_record',
                    (
                        select jsonb_object_agg((c).name, (c).value)
                        from unnest(old_columns) c
                        where
                            (c).is_selectable
                            and ( not error_record_exceeds_max_size or (octet_length((c).value::text) <= 64))
                            and ( not is_rls_enabled or (c).is_pkey ) -- if RLS enabled, we can't secure deletes so filter to pkey
                    )
                )
            else '{}'::jsonb
        end;

        -- Create the prepared statement
        if is_rls_enabled and action <> 'DELETE' then
            if (select 1 from pg_prepared_statements where name = 'walrus_rls_stmt' limit 1) > 0 then
                deallocate walrus_rls_stmt;
            end if;
            execute realtime.build_prepared_statement_sql('walrus_rls_stmt', entity_, columns);
        end if;

        visible_to_subscription_ids = '{}';

        for subscription_id, claims in (
                select
                    subs.subscription_id,
                    subs.claims
                from
                    unnest(subscriptions) subs
                where
                    subs.entity = entity_
                    and subs.claims_role = working_role
                    and (
                        realtime.is_visible_through_filters(columns, subs.filters)
                        or (
                          action = 'DELETE'
                          and realtime.is_visible_through_filters(old_columns, subs.filters)
                        )
                    )
        ) loop

            if not is_rls_enabled or action = 'DELETE' then
                visible_to_subscription_ids = visible_to_subscription_ids || subscription_id;
            else
                -- Check if RLS allows the role to see the record
                perform
                    -- Trim leading and trailing quotes from working_role because set_config
                    -- doesn't recognize the role as valid if they are included
                    set_config('role', trim(both '"' from working_role::text), true),
                    set_config('request.jwt.claims', claims::text, true);

                execute 'execute walrus_rls_stmt' into subscription_has_access;

                if subscription_has_access then
                    visible_to_subscription_ids = visible_to_subscription_ids || subscription_id;
                end if;
            end if;
        end loop;

        perform set_config('role', null, true);

        return next (
            output,
            is_rls_enabled,
            visible_to_subscription_ids,
            case
                when error_record_exceeds_max_size then array['Error 413: Payload Too Large']
                else '{}'
            end
        )::realtime.wal_rls;

    end if;
end loop;

perform set_config('role', null, true);
end;
$$;


ALTER FUNCTION realtime.apply_rls(wal jsonb, max_record_bytes integer) OWNER TO supabase_admin;

--
-- Name: broadcast_changes(text, text, text, text, text, record, record, text); Type: FUNCTION; Schema: realtime; Owner: supabase_admin
--

CREATE FUNCTION realtime.broadcast_changes(topic_name text, event_name text, operation text, table_name text, table_schema text, new record, old record, level text DEFAULT 'ROW'::text) RETURNS void
    LANGUAGE plpgsql
    AS $$
DECLARE
    -- Declare a variable to hold the JSONB representation of the row
    row_data jsonb := '{}'::jsonb;
BEGIN
    IF level = 'STATEMENT' THEN
        RAISE EXCEPTION 'function can only be triggered for each row, not for each statement';
    END IF;
    -- Check the operation type and handle accordingly
    IF operation = 'INSERT' OR operation = 'UPDATE' OR operation = 'DELETE' THEN
        row_data := jsonb_build_object('old_record', OLD, 'record', NEW, 'operation', operation, 'table', table_name, 'schema', table_schema);
        PERFORM realtime.send (row_data, event_name, topic_name);
    ELSE
        RAISE EXCEPTION 'Unexpected operation type: %', operation;
    END IF;
EXCEPTION
    WHEN OTHERS THEN
        RAISE EXCEPTION 'Failed to process the row: %', SQLERRM;
END;

$$;


ALTER FUNCTION realtime.broadcast_changes(topic_name text, event_name text, operation text, table_name text, table_schema text, new record, old record, level text) OWNER TO supabase_admin;

--
-- Name: build_prepared_statement_sql(text, regclass, realtime.wal_column[]); Type: FUNCTION; Schema: realtime; Owner: supabase_admin
--

CREATE FUNCTION realtime.build_prepared_statement_sql(prepared_statement_name text, entity regclass, columns realtime.wal_column[]) RETURNS text
    LANGUAGE sql
    AS $$
      /*
      Builds a sql string that, if executed, creates a prepared statement to
      tests retrive a row from *entity* by its primary key columns.
      Example
          select realtime.build_prepared_statement_sql('public.notes', '{"id"}'::text[], '{"bigint"}'::text[])
      */
          select
      'prepare ' || prepared_statement_name || ' as
          select
              exists(
                  select
                      1
                  from
                      ' || entity || '
                  where
                      ' || string_agg(quote_ident(pkc.name) || '=' || quote_nullable(pkc.value #>> '{}') , ' and ') || '
              )'
          from
              unnest(columns) pkc
          where
              pkc.is_pkey
          group by
              entity
      $$;


ALTER FUNCTION realtime.build_prepared_statement_sql(prepared_statement_name text, entity regclass, columns realtime.wal_column[]) OWNER TO supabase_admin;

--
-- Name: cast(text, regtype); Type: FUNCTION; Schema: realtime; Owner: supabase_admin
--

CREATE FUNCTION realtime."cast"(val text, type_ regtype) RETURNS jsonb
    LANGUAGE plpgsql IMMUTABLE
    AS $$
    declare
      res jsonb;
    begin
      execute format('select to_jsonb(%L::'|| type_::text || ')', val)  into res;
      return res;
    end
    $$;


ALTER FUNCTION realtime."cast"(val text, type_ regtype) OWNER TO supabase_admin;

--
-- Name: check_equality_op(realtime.equality_op, regtype, text, text); Type: FUNCTION; Schema: realtime; Owner: supabase_admin
--

CREATE FUNCTION realtime.check_equality_op(op realtime.equality_op, type_ regtype, val_1 text, val_2 text) RETURNS boolean
    LANGUAGE plpgsql IMMUTABLE
    AS $$
      /*
      Casts *val_1* and *val_2* as type *type_* and check the *op* condition for truthiness
      */
      declare
          op_symbol text = (
              case
                  when op = 'eq' then '='
                  when op = 'neq' then '!='
                  when op = 'lt' then '<'
                  when op = 'lte' then '<='
                  when op = 'gt' then '>'
                  when op = 'gte' then '>='
                  when op = 'in' then '= any'
                  else 'UNKNOWN OP'
              end
          );
          res boolean;
      begin
          execute format(
              'select %L::'|| type_::text || ' ' || op_symbol
              || ' ( %L::'
              || (
                  case
                      when op = 'in' then type_::text || '[]'
                      else type_::text end
              )
              || ')', val_1, val_2) into res;
          return res;
      end;
      $$;


ALTER FUNCTION realtime.check_equality_op(op realtime.equality_op, type_ regtype, val_1 text, val_2 text) OWNER TO supabase_admin;

--
-- Name: is_visible_through_filters(realtime.wal_column[], realtime.user_defined_filter[]); Type: FUNCTION; Schema: realtime; Owner: supabase_admin
--

CREATE FUNCTION realtime.is_visible_through_filters(columns realtime.wal_column[], filters realtime.user_defined_filter[]) RETURNS boolean
    LANGUAGE sql IMMUTABLE
    AS $_$
    /*
    Should the record be visible (true) or filtered out (false) after *filters* are applied
    */
        select
            -- Default to allowed when no filters present
            $2 is null -- no filters. this should not happen because subscriptions has a default
            or array_length($2, 1) is null -- array length of an empty array is null
            or bool_and(
                coalesce(
                    realtime.check_equality_op(
                        op:=f.op,
                        type_:=coalesce(
                            col.type_oid::regtype, -- null when wal2json version <= 2.4
                            col.type_name::regtype
                        ),
                        -- cast jsonb to text
                        val_1:=col.value #>> '{}',
                        val_2:=f.value
                    ),
                    false -- if null, filter does not match
                )
            )
        from
            unnest(filters) f
            join unnest(columns) col
                on f.column_name = col.name;
    $_$;


ALTER FUNCTION realtime.is_visible_through_filters(columns realtime.wal_column[], filters realtime.user_defined_filter[]) OWNER TO supabase_admin;

--
-- Name: list_changes(name, name, integer, integer); Type: FUNCTION; Schema: realtime; Owner: supabase_admin
--

CREATE FUNCTION realtime.list_changes(publication name, slot_name name, max_changes integer, max_record_bytes integer) RETURNS SETOF realtime.wal_rls
    LANGUAGE sql
    SET log_min_messages TO 'fatal'
    AS $$
      with pub as (
        select
          concat_ws(
            ',',
            case when bool_or(pubinsert) then 'insert' else null end,
            case when bool_or(pubupdate) then 'update' else null end,
            case when bool_or(pubdelete) then 'delete' else null end
          ) as w2j_actions,
          coalesce(
            string_agg(
              realtime.quote_wal2json(format('%I.%I', schemaname, tablename)::regclass),
              ','
            ) filter (where ppt.tablename is not null and ppt.tablename not like '% %'),
            ''
          ) w2j_add_tables
        from
          pg_publication pp
          left join pg_publication_tables ppt
            on pp.pubname = ppt.pubname
        where
          pp.pubname = publication
        group by
          pp.pubname
        limit 1
      ),
      w2j as (
        select
          x.*, pub.w2j_add_tables
        from
          pub,
          pg_logical_slot_get_changes(
            slot_name, null, max_changes,
            'include-pk', 'true',
            'include-transaction', 'false',
            'include-timestamp', 'true',
            'include-type-oids', 'true',
            'format-version', '2',
            'actions', pub.w2j_actions,
            'add-tables', pub.w2j_add_tables
          ) x
      )
      select
        xyz.wal,
        xyz.is_rls_enabled,
        xyz.subscription_ids,
        xyz.errors
      from
        w2j,
        realtime.apply_rls(
          wal := w2j.data::jsonb,
          max_record_bytes := max_record_bytes
        ) xyz(wal, is_rls_enabled, subscription_ids, errors)
      where
        w2j.w2j_add_tables <> ''
        and xyz.subscription_ids[1] is not null
    $$;


ALTER FUNCTION realtime.list_changes(publication name, slot_name name, max_changes integer, max_record_bytes integer) OWNER TO supabase_admin;

--
-- Name: quote_wal2json(regclass); Type: FUNCTION; Schema: realtime; Owner: supabase_admin
--

CREATE FUNCTION realtime.quote_wal2json(entity regclass) RETURNS text
    LANGUAGE sql IMMUTABLE STRICT
    AS $$
      select
        (
          select string_agg('' || ch,'')
          from unnest(string_to_array(nsp.nspname::text, null)) with ordinality x(ch, idx)
          where
            not (x.idx = 1 and x.ch = '"')
            and not (
              x.idx = array_length(string_to_array(nsp.nspname::text, null), 1)
              and x.ch = '"'
            )
        )
        || '.'
        || (
          select string_agg('' || ch,'')
          from unnest(string_to_array(pc.relname::text, null)) with ordinality x(ch, idx)
          where
            not (x.idx = 1 and x.ch = '"')
            and not (
              x.idx = array_length(string_to_array(nsp.nspname::text, null), 1)
              and x.ch = '"'
            )
          )
      from
        pg_class pc
        join pg_namespace nsp
          on pc.relnamespace = nsp.oid
      where
        pc.oid = entity
    $$;


ALTER FUNCTION realtime.quote_wal2json(entity regclass) OWNER TO supabase_admin;

--
-- Name: send(jsonb, text, text, boolean); Type: FUNCTION; Schema: realtime; Owner: supabase_admin
--

CREATE FUNCTION realtime.send(payload jsonb, event text, topic text, private boolean DEFAULT true) RETURNS void
    LANGUAGE plpgsql
    AS $$
BEGIN
  BEGIN
    -- Set the topic configuration
    EXECUTE format('SET LOCAL realtime.topic TO %L', topic);

    -- Attempt to insert the message
    INSERT INTO realtime.messages (payload, event, topic, private, extension)
    VALUES (payload, event, topic, private, 'broadcast');
  EXCEPTION
    WHEN OTHERS THEN
      -- Capture and notify the error
      RAISE WARNING 'ErrorSendingBroadcastMessage: %', SQLERRM;
  END;
END;
$$;


ALTER FUNCTION realtime.send(payload jsonb, event text, topic text, private boolean) OWNER TO supabase_admin;

--
-- Name: subscription_check_filters(); Type: FUNCTION; Schema: realtime; Owner: supabase_admin
--

CREATE FUNCTION realtime.subscription_check_filters() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
    /*
    Validates that the user defined filters for a subscription:
    - refer to valid columns that the claimed role may access
    - values are coercable to the correct column type
    */
    declare
        col_names text[] = coalesce(
                array_agg(c.column_name order by c.ordinal_position),
                '{}'::text[]
            )
            from
                information_schema.columns c
            where
                format('%I.%I', c.table_schema, c.table_name)::regclass = new.entity
                and pg_catalog.has_column_privilege(
                    (new.claims ->> 'role'),
                    format('%I.%I', c.table_schema, c.table_name)::regclass,
                    c.column_name,
                    'SELECT'
                );
        filter realtime.user_defined_filter;
        col_type regtype;

        in_val jsonb;
    begin
        for filter in select * from unnest(new.filters) loop
            -- Filtered column is valid
            if not filter.column_name = any(col_names) then
                raise exception 'invalid column for filter %', filter.column_name;
            end if;

            -- Type is sanitized and safe for string interpolation
            col_type = (
                select atttypid::regtype
                from pg_catalog.pg_attribute
                where attrelid = new.entity
                      and attname = filter.column_name
            );
            if col_type is null then
                raise exception 'failed to lookup type for column %', filter.column_name;
            end if;

            -- Set maximum number of entries for in filter
            if filter.op = 'in'::realtime.equality_op then
                in_val = realtime.cast(filter.value, (col_type::text || '[]')::regtype);
                if coalesce(jsonb_array_length(in_val), 0) > 100 then
                    raise exception 'too many values for `in` filter. Maximum 100';
                end if;
            else
                -- raises an exception if value is not coercable to type
                perform realtime.cast(filter.value, col_type);
            end if;

        end loop;

        -- Apply consistent order to filters so the unique constraint on
        -- (subscription_id, entity, filters) can't be tricked by a different filter order
        new.filters = coalesce(
            array_agg(f order by f.column_name, f.op, f.value),
            '{}'
        ) from unnest(new.filters) f;

        return new;
    end;
    $$;


ALTER FUNCTION realtime.subscription_check_filters() OWNER TO supabase_admin;

--
-- Name: to_regrole(text); Type: FUNCTION; Schema: realtime; Owner: supabase_admin
--

CREATE FUNCTION realtime.to_regrole(role_name text) RETURNS regrole
    LANGUAGE sql IMMUTABLE
    AS $$ select role_name::regrole $$;


ALTER FUNCTION realtime.to_regrole(role_name text) OWNER TO supabase_admin;

--
-- Name: topic(); Type: FUNCTION; Schema: realtime; Owner: supabase_realtime_admin
--

CREATE FUNCTION realtime.topic() RETURNS text
    LANGUAGE sql STABLE
    AS $$
select nullif(current_setting('realtime.topic', true), '')::text;
$$;


ALTER FUNCTION realtime.topic() OWNER TO supabase_realtime_admin;

--
-- Name: can_insert_object(text, text, uuid, jsonb); Type: FUNCTION; Schema: storage; Owner: supabase_storage_admin
--

CREATE FUNCTION storage.can_insert_object(bucketid text, name text, owner uuid, metadata jsonb) RETURNS void
    LANGUAGE plpgsql
    AS $$
BEGIN
  INSERT INTO "storage"."objects" ("bucket_id", "name", "owner", "metadata") VALUES (bucketid, name, owner, metadata);
  -- hack to rollback the successful insert
  RAISE sqlstate 'PT200' using
  message = 'ROLLBACK',
  detail = 'rollback successful insert';
END
$$;


ALTER FUNCTION storage.can_insert_object(bucketid text, name text, owner uuid, metadata jsonb) OWNER TO supabase_storage_admin;

--
-- Name: extension(text); Type: FUNCTION; Schema: storage; Owner: supabase_storage_admin
--

CREATE FUNCTION storage.extension(name text) RETURNS text
    LANGUAGE plpgsql
    AS $$
DECLARE
_parts text[];
_filename text;
BEGIN
	select string_to_array(name, '/') into _parts;
	select _parts[array_length(_parts,1)] into _filename;
	-- @todo return the last part instead of 2
	return reverse(split_part(reverse(_filename), '.', 1));
END
$$;


ALTER FUNCTION storage.extension(name text) OWNER TO supabase_storage_admin;

--
-- Name: filename(text); Type: FUNCTION; Schema: storage; Owner: supabase_storage_admin
--

CREATE FUNCTION storage.filename(name text) RETURNS text
    LANGUAGE plpgsql
    AS $$
DECLARE
_parts text[];
BEGIN
	select string_to_array(name, '/') into _parts;
	return _parts[array_length(_parts,1)];
END
$$;


ALTER FUNCTION storage.filename(name text) OWNER TO supabase_storage_admin;

--
-- Name: foldername(text); Type: FUNCTION; Schema: storage; Owner: supabase_storage_admin
--

CREATE FUNCTION storage.foldername(name text) RETURNS text[]
    LANGUAGE plpgsql
    AS $$
DECLARE
_parts text[];
BEGIN
	select string_to_array(name, '/') into _parts;
	return _parts[1:array_length(_parts,1)-1];
END
$$;


ALTER FUNCTION storage.foldername(name text) OWNER TO supabase_storage_admin;

--
-- Name: get_size_by_bucket(); Type: FUNCTION; Schema: storage; Owner: supabase_storage_admin
--

CREATE FUNCTION storage.get_size_by_bucket() RETURNS TABLE(size bigint, bucket_id text)
    LANGUAGE plpgsql
    AS $$
BEGIN
    return query
        select sum((metadata->>'size')::int) as size, obj.bucket_id
        from "storage".objects as obj
        group by obj.bucket_id;
END
$$;


ALTER FUNCTION storage.get_size_by_bucket() OWNER TO supabase_storage_admin;

--
-- Name: list_multipart_uploads_with_delimiter(text, text, text, integer, text, text); Type: FUNCTION; Schema: storage; Owner: supabase_storage_admin
--

CREATE FUNCTION storage.list_multipart_uploads_with_delimiter(bucket_id text, prefix_param text, delimiter_param text, max_keys integer DEFAULT 100, next_key_token text DEFAULT ''::text, next_upload_token text DEFAULT ''::text) RETURNS TABLE(key text, id text, created_at timestamp with time zone)
    LANGUAGE plpgsql
    AS $_$
BEGIN
    RETURN QUERY EXECUTE
        'SELECT DISTINCT ON(key COLLATE "C") * from (
            SELECT
                CASE
                    WHEN position($2 IN substring(key from length($1) + 1)) > 0 THEN
                        substring(key from 1 for length($1) + position($2 IN substring(key from length($1) + 1)))
                    ELSE
                        key
                END AS key, id, created_at
            FROM
                storage.s3_multipart_uploads
            WHERE
                bucket_id = $5 AND
                key ILIKE $1 || ''%'' AND
                CASE
                    WHEN $4 != '''' AND $6 = '''' THEN
                        CASE
                            WHEN position($2 IN substring(key from length($1) + 1)) > 0 THEN
                                substring(key from 1 for length($1) + position($2 IN substring(key from length($1) + 1))) COLLATE "C" > $4
                            ELSE
                                key COLLATE "C" > $4
                            END
                    ELSE
                        true
                END AND
                CASE
                    WHEN $6 != '''' THEN
                        id COLLATE "C" > $6
                    ELSE
                        true
                    END
            ORDER BY
                key COLLATE "C" ASC, created_at ASC) as e order by key COLLATE "C" LIMIT $3'
        USING prefix_param, delimiter_param, max_keys, next_key_token, bucket_id, next_upload_token;
END;
$_$;


ALTER FUNCTION storage.list_multipart_uploads_with_delimiter(bucket_id text, prefix_param text, delimiter_param text, max_keys integer, next_key_token text, next_upload_token text) OWNER TO supabase_storage_admin;

--
-- Name: list_objects_with_delimiter(text, text, text, integer, text, text); Type: FUNCTION; Schema: storage; Owner: supabase_storage_admin
--

CREATE FUNCTION storage.list_objects_with_delimiter(bucket_id text, prefix_param text, delimiter_param text, max_keys integer DEFAULT 100, start_after text DEFAULT ''::text, next_token text DEFAULT ''::text) RETURNS TABLE(name text, id uuid, metadata jsonb, updated_at timestamp with time zone)
    LANGUAGE plpgsql
    AS $_$
BEGIN
    RETURN QUERY EXECUTE
        'SELECT DISTINCT ON(name COLLATE "C") * from (
            SELECT
                CASE
                    WHEN position($2 IN substring(name from length($1) + 1)) > 0 THEN
                        substring(name from 1 for length($1) + position($2 IN substring(name from length($1) + 1)))
                    ELSE
                        name
                END AS name, id, metadata, updated_at
            FROM
                storage.objects
            WHERE
                bucket_id = $5 AND
                name ILIKE $1 || ''%'' AND
                CASE
                    WHEN $6 != '''' THEN
                    name COLLATE "C" > $6
                ELSE true END
                AND CASE
                    WHEN $4 != '''' THEN
                        CASE
                            WHEN position($2 IN substring(name from length($1) + 1)) > 0 THEN
                                substring(name from 1 for length($1) + position($2 IN substring(name from length($1) + 1))) COLLATE "C" > $4
                            ELSE
                                name COLLATE "C" > $4
                            END
                    ELSE
                        true
                END
            ORDER BY
                name COLLATE "C" ASC) as e order by name COLLATE "C" LIMIT $3'
        USING prefix_param, delimiter_param, max_keys, next_token, bucket_id, start_after;
END;
$_$;


ALTER FUNCTION storage.list_objects_with_delimiter(bucket_id text, prefix_param text, delimiter_param text, max_keys integer, start_after text, next_token text) OWNER TO supabase_storage_admin;

--
-- Name: operation(); Type: FUNCTION; Schema: storage; Owner: supabase_storage_admin
--

CREATE FUNCTION storage.operation() RETURNS text
    LANGUAGE plpgsql STABLE
    AS $$
BEGIN
    RETURN current_setting('storage.operation', true);
END;
$$;


ALTER FUNCTION storage.operation() OWNER TO supabase_storage_admin;

--
-- Name: search(text, text, integer, integer, integer, text, text, text); Type: FUNCTION; Schema: storage; Owner: supabase_storage_admin
--

CREATE FUNCTION storage.search(prefix text, bucketname text, limits integer DEFAULT 100, levels integer DEFAULT 1, offsets integer DEFAULT 0, search text DEFAULT ''::text, sortcolumn text DEFAULT 'name'::text, sortorder text DEFAULT 'asc'::text) RETURNS TABLE(name text, id uuid, updated_at timestamp with time zone, created_at timestamp with time zone, last_accessed_at timestamp with time zone, metadata jsonb)
    LANGUAGE plpgsql STABLE
    AS $_$
declare
  v_order_by text;
  v_sort_order text;
begin
  case
    when sortcolumn = 'name' then
      v_order_by = 'name';
    when sortcolumn = 'updated_at' then
      v_order_by = 'updated_at';
    when sortcolumn = 'created_at' then
      v_order_by = 'created_at';
    when sortcolumn = 'last_accessed_at' then
      v_order_by = 'last_accessed_at';
    else
      v_order_by = 'name';
  end case;

  case
    when sortorder = 'asc' then
      v_sort_order = 'asc';
    when sortorder = 'desc' then
      v_sort_order = 'desc';
    else
      v_sort_order = 'asc';
  end case;

  v_order_by = v_order_by || ' ' || v_sort_order;

  return query execute
    'with folders as (
       select path_tokens[$1] as folder
       from storage.objects
         where objects.name ilike $2 || $3 || ''%''
           and bucket_id = $4
           and array_length(objects.path_tokens, 1) <> $1
       group by folder
       order by folder ' || v_sort_order || '
     )
     (select folder as "name",
            null as id,
            null as updated_at,
            null as created_at,
            null as last_accessed_at,
            null as metadata from folders)
     union all
     (select path_tokens[$1] as "name",
            id,
            updated_at,
            created_at,
            last_accessed_at,
            metadata
     from storage.objects
     where objects.name ilike $2 || $3 || ''%''
       and bucket_id = $4
       and array_length(objects.path_tokens, 1) = $1
     order by ' || v_order_by || ')
     limit $5
     offset $6' using levels, prefix, search, bucketname, limits, offsets;
end;
$_$;


ALTER FUNCTION storage.search(prefix text, bucketname text, limits integer, levels integer, offsets integer, search text, sortcolumn text, sortorder text) OWNER TO supabase_storage_admin;

--
-- Name: update_updated_at_column(); Type: FUNCTION; Schema: storage; Owner: supabase_storage_admin
--

CREATE FUNCTION storage.update_updated_at_column() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW; 
END;
$$;


ALTER FUNCTION storage.update_updated_at_column() OWNER TO supabase_storage_admin;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: audit_log_entries; Type: TABLE; Schema: auth; Owner: supabase_auth_admin
--

CREATE TABLE auth.audit_log_entries (
    instance_id uuid,
    id uuid NOT NULL,
    payload json,
    created_at timestamp with time zone,
    ip_address character varying(64) DEFAULT ''::character varying NOT NULL
);


ALTER TABLE auth.audit_log_entries OWNER TO supabase_auth_admin;

--
-- Name: TABLE audit_log_entries; Type: COMMENT; Schema: auth; Owner: supabase_auth_admin
--

COMMENT ON TABLE auth.audit_log_entries IS 'Auth: Audit trail for user actions.';


--
-- Name: flow_state; Type: TABLE; Schema: auth; Owner: supabase_auth_admin
--

CREATE TABLE auth.flow_state (
    id uuid NOT NULL,
    user_id uuid,
    auth_code text NOT NULL,
    code_challenge_method auth.code_challenge_method NOT NULL,
    code_challenge text NOT NULL,
    provider_type text NOT NULL,
    provider_access_token text,
    provider_refresh_token text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    authentication_method text NOT NULL,
    auth_code_issued_at timestamp with time zone
);


ALTER TABLE auth.flow_state OWNER TO supabase_auth_admin;

--
-- Name: TABLE flow_state; Type: COMMENT; Schema: auth; Owner: supabase_auth_admin
--

COMMENT ON TABLE auth.flow_state IS 'stores metadata for pkce logins';


--
-- Name: identities; Type: TABLE; Schema: auth; Owner: supabase_auth_admin
--

CREATE TABLE auth.identities (
    provider_id text NOT NULL,
    user_id uuid NOT NULL,
    identity_data jsonb NOT NULL,
    provider text NOT NULL,
    last_sign_in_at timestamp with time zone,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    email text GENERATED ALWAYS AS (lower((identity_data ->> 'email'::text))) STORED,
    id uuid DEFAULT gen_random_uuid() NOT NULL
);


ALTER TABLE auth.identities OWNER TO supabase_auth_admin;

--
-- Name: TABLE identities; Type: COMMENT; Schema: auth; Owner: supabase_auth_admin
--

COMMENT ON TABLE auth.identities IS 'Auth: Stores identities associated to a user.';


--
-- Name: COLUMN identities.email; Type: COMMENT; Schema: auth; Owner: supabase_auth_admin
--

COMMENT ON COLUMN auth.identities.email IS 'Auth: Email is a generated column that references the optional email property in the identity_data';


--
-- Name: instances; Type: TABLE; Schema: auth; Owner: supabase_auth_admin
--

CREATE TABLE auth.instances (
    id uuid NOT NULL,
    uuid uuid,
    raw_base_config text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE auth.instances OWNER TO supabase_auth_admin;

--
-- Name: TABLE instances; Type: COMMENT; Schema: auth; Owner: supabase_auth_admin
--

COMMENT ON TABLE auth.instances IS 'Auth: Manages users across multiple sites.';


--
-- Name: mfa_amr_claims; Type: TABLE; Schema: auth; Owner: supabase_auth_admin
--

CREATE TABLE auth.mfa_amr_claims (
    session_id uuid NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    authentication_method text NOT NULL,
    id uuid NOT NULL
);


ALTER TABLE auth.mfa_amr_claims OWNER TO supabase_auth_admin;

--
-- Name: TABLE mfa_amr_claims; Type: COMMENT; Schema: auth; Owner: supabase_auth_admin
--

COMMENT ON TABLE auth.mfa_amr_claims IS 'auth: stores authenticator method reference claims for multi factor authentication';


--
-- Name: mfa_challenges; Type: TABLE; Schema: auth; Owner: supabase_auth_admin
--

CREATE TABLE auth.mfa_challenges (
    id uuid NOT NULL,
    factor_id uuid NOT NULL,
    created_at timestamp with time zone NOT NULL,
    verified_at timestamp with time zone,
    ip_address inet NOT NULL,
    otp_code text,
    web_authn_session_data jsonb
);


ALTER TABLE auth.mfa_challenges OWNER TO supabase_auth_admin;

--
-- Name: TABLE mfa_challenges; Type: COMMENT; Schema: auth; Owner: supabase_auth_admin
--

COMMENT ON TABLE auth.mfa_challenges IS 'auth: stores metadata about challenge requests made';


--
-- Name: mfa_factors; Type: TABLE; Schema: auth; Owner: supabase_auth_admin
--

CREATE TABLE auth.mfa_factors (
    id uuid NOT NULL,
    user_id uuid NOT NULL,
    friendly_name text,
    factor_type auth.factor_type NOT NULL,
    status auth.factor_status NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    secret text,
    phone text,
    last_challenged_at timestamp with time zone,
    web_authn_credential jsonb,
    web_authn_aaguid uuid
);


ALTER TABLE auth.mfa_factors OWNER TO supabase_auth_admin;

--
-- Name: TABLE mfa_factors; Type: COMMENT; Schema: auth; Owner: supabase_auth_admin
--

COMMENT ON TABLE auth.mfa_factors IS 'auth: stores metadata about factors';


--
-- Name: one_time_tokens; Type: TABLE; Schema: auth; Owner: supabase_auth_admin
--

CREATE TABLE auth.one_time_tokens (
    id uuid NOT NULL,
    user_id uuid NOT NULL,
    token_type auth.one_time_token_type NOT NULL,
    token_hash text NOT NULL,
    relates_to text NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    CONSTRAINT one_time_tokens_token_hash_check CHECK ((char_length(token_hash) > 0))
);


ALTER TABLE auth.one_time_tokens OWNER TO supabase_auth_admin;

--
-- Name: refresh_tokens; Type: TABLE; Schema: auth; Owner: supabase_auth_admin
--

CREATE TABLE auth.refresh_tokens (
    instance_id uuid,
    id bigint NOT NULL,
    token character varying(255),
    user_id character varying(255),
    revoked boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    parent character varying(255),
    session_id uuid
);


ALTER TABLE auth.refresh_tokens OWNER TO supabase_auth_admin;

--
-- Name: TABLE refresh_tokens; Type: COMMENT; Schema: auth; Owner: supabase_auth_admin
--

COMMENT ON TABLE auth.refresh_tokens IS 'Auth: Store of tokens used to refresh JWT tokens once they expire.';


--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE; Schema: auth; Owner: supabase_auth_admin
--

CREATE SEQUENCE auth.refresh_tokens_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE auth.refresh_tokens_id_seq OWNER TO supabase_auth_admin;

--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE OWNED BY; Schema: auth; Owner: supabase_auth_admin
--

ALTER SEQUENCE auth.refresh_tokens_id_seq OWNED BY auth.refresh_tokens.id;


--
-- Name: saml_providers; Type: TABLE; Schema: auth; Owner: supabase_auth_admin
--

CREATE TABLE auth.saml_providers (
    id uuid NOT NULL,
    sso_provider_id uuid NOT NULL,
    entity_id text NOT NULL,
    metadata_xml text NOT NULL,
    metadata_url text,
    attribute_mapping jsonb,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    name_id_format text,
    CONSTRAINT "entity_id not empty" CHECK ((char_length(entity_id) > 0)),
    CONSTRAINT "metadata_url not empty" CHECK (((metadata_url = NULL::text) OR (char_length(metadata_url) > 0))),
    CONSTRAINT "metadata_xml not empty" CHECK ((char_length(metadata_xml) > 0))
);


ALTER TABLE auth.saml_providers OWNER TO supabase_auth_admin;

--
-- Name: TABLE saml_providers; Type: COMMENT; Schema: auth; Owner: supabase_auth_admin
--

COMMENT ON TABLE auth.saml_providers IS 'Auth: Manages SAML Identity Provider connections.';


--
-- Name: saml_relay_states; Type: TABLE; Schema: auth; Owner: supabase_auth_admin
--

CREATE TABLE auth.saml_relay_states (
    id uuid NOT NULL,
    sso_provider_id uuid NOT NULL,
    request_id text NOT NULL,
    for_email text,
    redirect_to text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    flow_state_id uuid,
    CONSTRAINT "request_id not empty" CHECK ((char_length(request_id) > 0))
);


ALTER TABLE auth.saml_relay_states OWNER TO supabase_auth_admin;

--
-- Name: TABLE saml_relay_states; Type: COMMENT; Schema: auth; Owner: supabase_auth_admin
--

COMMENT ON TABLE auth.saml_relay_states IS 'Auth: Contains SAML Relay State information for each Service Provider initiated login.';


--
-- Name: schema_migrations; Type: TABLE; Schema: auth; Owner: supabase_auth_admin
--

CREATE TABLE auth.schema_migrations (
    version character varying(255) NOT NULL
);


ALTER TABLE auth.schema_migrations OWNER TO supabase_auth_admin;

--
-- Name: TABLE schema_migrations; Type: COMMENT; Schema: auth; Owner: supabase_auth_admin
--

COMMENT ON TABLE auth.schema_migrations IS 'Auth: Manages updates to the auth system.';


--
-- Name: sessions; Type: TABLE; Schema: auth; Owner: supabase_auth_admin
--

CREATE TABLE auth.sessions (
    id uuid NOT NULL,
    user_id uuid NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    factor_id uuid,
    aal auth.aal_level,
    not_after timestamp with time zone,
    refreshed_at timestamp without time zone,
    user_agent text,
    ip inet,
    tag text
);


ALTER TABLE auth.sessions OWNER TO supabase_auth_admin;

--
-- Name: TABLE sessions; Type: COMMENT; Schema: auth; Owner: supabase_auth_admin
--

COMMENT ON TABLE auth.sessions IS 'Auth: Stores session data associated to a user.';


--
-- Name: COLUMN sessions.not_after; Type: COMMENT; Schema: auth; Owner: supabase_auth_admin
--

COMMENT ON COLUMN auth.sessions.not_after IS 'Auth: Not after is a nullable column that contains a timestamp after which the session should be regarded as expired.';


--
-- Name: sso_domains; Type: TABLE; Schema: auth; Owner: supabase_auth_admin
--

CREATE TABLE auth.sso_domains (
    id uuid NOT NULL,
    sso_provider_id uuid NOT NULL,
    domain text NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    CONSTRAINT "domain not empty" CHECK ((char_length(domain) > 0))
);


ALTER TABLE auth.sso_domains OWNER TO supabase_auth_admin;

--
-- Name: TABLE sso_domains; Type: COMMENT; Schema: auth; Owner: supabase_auth_admin
--

COMMENT ON TABLE auth.sso_domains IS 'Auth: Manages SSO email address domain mapping to an SSO Identity Provider.';


--
-- Name: sso_providers; Type: TABLE; Schema: auth; Owner: supabase_auth_admin
--

CREATE TABLE auth.sso_providers (
    id uuid NOT NULL,
    resource_id text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    CONSTRAINT "resource_id not empty" CHECK (((resource_id = NULL::text) OR (char_length(resource_id) > 0)))
);


ALTER TABLE auth.sso_providers OWNER TO supabase_auth_admin;

--
-- Name: TABLE sso_providers; Type: COMMENT; Schema: auth; Owner: supabase_auth_admin
--

COMMENT ON TABLE auth.sso_providers IS 'Auth: Manages SSO identity provider information; see saml_providers for SAML.';


--
-- Name: COLUMN sso_providers.resource_id; Type: COMMENT; Schema: auth; Owner: supabase_auth_admin
--

COMMENT ON COLUMN auth.sso_providers.resource_id IS 'Auth: Uniquely identifies a SSO provider according to a user-chosen resource ID (case insensitive), useful in infrastructure as code.';


--
-- Name: users; Type: TABLE; Schema: auth; Owner: supabase_auth_admin
--

CREATE TABLE auth.users (
    instance_id uuid,
    id uuid NOT NULL,
    aud character varying(255),
    role character varying(255),
    email character varying(255),
    encrypted_password character varying(255),
    email_confirmed_at timestamp with time zone,
    invited_at timestamp with time zone,
    confirmation_token character varying(255),
    confirmation_sent_at timestamp with time zone,
    recovery_token character varying(255),
    recovery_sent_at timestamp with time zone,
    email_change_token_new character varying(255),
    email_change character varying(255),
    email_change_sent_at timestamp with time zone,
    last_sign_in_at timestamp with time zone,
    raw_app_meta_data jsonb,
    raw_user_meta_data jsonb,
    is_super_admin boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    phone text DEFAULT NULL::character varying,
    phone_confirmed_at timestamp with time zone,
    phone_change text DEFAULT ''::character varying,
    phone_change_token character varying(255) DEFAULT ''::character varying,
    phone_change_sent_at timestamp with time zone,
    confirmed_at timestamp with time zone GENERATED ALWAYS AS (LEAST(email_confirmed_at, phone_confirmed_at)) STORED,
    email_change_token_current character varying(255) DEFAULT ''::character varying,
    email_change_confirm_status smallint DEFAULT 0,
    banned_until timestamp with time zone,
    reauthentication_token character varying(255) DEFAULT ''::character varying,
    reauthentication_sent_at timestamp with time zone,
    is_sso_user boolean DEFAULT false NOT NULL,
    deleted_at timestamp with time zone,
    is_anonymous boolean DEFAULT false NOT NULL,
    CONSTRAINT users_email_change_confirm_status_check CHECK (((email_change_confirm_status >= 0) AND (email_change_confirm_status <= 2)))
);


ALTER TABLE auth.users OWNER TO supabase_auth_admin;

--
-- Name: TABLE users; Type: COMMENT; Schema: auth; Owner: supabase_auth_admin
--

COMMENT ON TABLE auth.users IS 'Auth: Stores user login data within a secure schema.';


--
-- Name: COLUMN users.is_sso_user; Type: COMMENT; Schema: auth; Owner: supabase_auth_admin
--

COMMENT ON COLUMN auth.users.is_sso_user IS 'Auth: Set this column to true when the account comes from SSO. These accounts can have duplicate emails.';


--
-- Name: attendance; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.attendance (
    attendance_id integer NOT NULL,
    student_id integer NOT NULL,
    subject_id integer NOT NULL,
    date date NOT NULL,
    status text NOT NULL,
    CONSTRAINT attendance_status_check CHECK ((status = ANY (ARRAY['present'::text, 'absent'::text])))
);


ALTER TABLE public.attendance OWNER TO postgres;

--
-- Name: attendance_attendance_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.attendance_attendance_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.attendance_attendance_id_seq OWNER TO postgres;

--
-- Name: attendance_attendance_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.attendance_attendance_id_seq OWNED BY public.attendance.attendance_id;


--
-- Name: classes_schedule; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.classes_schedule (
    schedule_id integer NOT NULL,
    subject_id integer NOT NULL,
    date date NOT NULL,
    "time" time without time zone NOT NULL,
    room_no text NOT NULL,
    block text NOT NULL
);


ALTER TABLE public.classes_schedule OWNER TO postgres;

--
-- Name: classes_schedule_schedule_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.classes_schedule_schedule_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.classes_schedule_schedule_id_seq OWNER TO postgres;

--
-- Name: classes_schedule_schedule_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.classes_schedule_schedule_id_seq OWNED BY public.classes_schedule.schedule_id;


--
-- Name: notice; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.notice (
    notice_id integer NOT NULL,
    topic text NOT NULL,
    description text,
    staff_id integer NOT NULL,
    date date NOT NULL,
    "time" time without time zone NOT NULL
);


ALTER TABLE public.notice OWNER TO postgres;

--
-- Name: notice_notice_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.notice_notice_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.notice_notice_id_seq OWNER TO postgres;

--
-- Name: notice_notice_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.notice_notice_id_seq OWNED BY public.notice.notice_id;


--
-- Name: results; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.results (
    result_id integer NOT NULL,
    subject_id integer NOT NULL,
    user_id integer NOT NULL,
    mid_term_score numeric,
    end_term_score numeric
);


ALTER TABLE public.results OWNER TO postgres;

--
-- Name: results_result_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.results_result_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.results_result_id_seq OWNER TO postgres;

--
-- Name: results_result_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.results_result_id_seq OWNED BY public.results.result_id;


--
-- Name: staff_subjects; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.staff_subjects (
    id integer NOT NULL,
    staff_id integer NOT NULL,
    subject_id integer NOT NULL
);


ALTER TABLE public.staff_subjects OWNER TO postgres;

--
-- Name: staff_subjects_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.staff_subjects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.staff_subjects_id_seq OWNER TO postgres;

--
-- Name: staff_subjects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.staff_subjects_id_seq OWNED BY public.staff_subjects.id;


--
-- Name: subjects; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.subjects (
    subject_id integer NOT NULL,
    subject_name text NOT NULL,
    subject_code text NOT NULL
);


ALTER TABLE public.subjects OWNER TO postgres;

--
-- Name: subjects_subject_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.subjects_subject_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.subjects_subject_id_seq OWNER TO postgres;

--
-- Name: subjects_subject_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.subjects_subject_id_seq OWNED BY public.subjects.subject_id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    username text,
    password text,
    role text,
    name text,
    email text,
    phone text,
    branch text,
    section text,
    year integer,
    course_year integer,
    semester integer,
    department text,
    designation text,
    experience_years integer
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_user_id_seq OWNER TO postgres;

--
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;


--
-- Name: messages; Type: TABLE; Schema: realtime; Owner: supabase_realtime_admin
--

CREATE TABLE realtime.messages (
    topic text NOT NULL,
    extension text NOT NULL,
    payload jsonb,
    event text,
    private boolean DEFAULT false,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    inserted_at timestamp without time zone DEFAULT now() NOT NULL,
    id uuid DEFAULT gen_random_uuid() NOT NULL
)
PARTITION BY RANGE (inserted_at);


ALTER TABLE realtime.messages OWNER TO supabase_realtime_admin;

--
-- Name: schema_migrations; Type: TABLE; Schema: realtime; Owner: supabase_admin
--

CREATE TABLE realtime.schema_migrations (
    version bigint NOT NULL,
    inserted_at timestamp(0) without time zone
);


ALTER TABLE realtime.schema_migrations OWNER TO supabase_admin;

--
-- Name: subscription; Type: TABLE; Schema: realtime; Owner: supabase_admin
--

CREATE TABLE realtime.subscription (
    id bigint NOT NULL,
    subscription_id uuid NOT NULL,
    entity regclass NOT NULL,
    filters realtime.user_defined_filter[] DEFAULT '{}'::realtime.user_defined_filter[] NOT NULL,
    claims jsonb NOT NULL,
    claims_role regrole GENERATED ALWAYS AS (realtime.to_regrole((claims ->> 'role'::text))) STORED NOT NULL,
    created_at timestamp without time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);


ALTER TABLE realtime.subscription OWNER TO supabase_admin;

--
-- Name: subscription_id_seq; Type: SEQUENCE; Schema: realtime; Owner: supabase_admin
--

ALTER TABLE realtime.subscription ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME realtime.subscription_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: buckets; Type: TABLE; Schema: storage; Owner: supabase_storage_admin
--

CREATE TABLE storage.buckets (
    id text NOT NULL,
    name text NOT NULL,
    owner uuid,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    public boolean DEFAULT false,
    avif_autodetection boolean DEFAULT false,
    file_size_limit bigint,
    allowed_mime_types text[],
    owner_id text
);


ALTER TABLE storage.buckets OWNER TO supabase_storage_admin;

--
-- Name: COLUMN buckets.owner; Type: COMMENT; Schema: storage; Owner: supabase_storage_admin
--

COMMENT ON COLUMN storage.buckets.owner IS 'Field is deprecated, use owner_id instead';


--
-- Name: migrations; Type: TABLE; Schema: storage; Owner: supabase_storage_admin
--

CREATE TABLE storage.migrations (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    hash character varying(40) NOT NULL,
    executed_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE storage.migrations OWNER TO supabase_storage_admin;

--
-- Name: objects; Type: TABLE; Schema: storage; Owner: supabase_storage_admin
--

CREATE TABLE storage.objects (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    bucket_id text,
    name text,
    owner uuid,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    last_accessed_at timestamp with time zone DEFAULT now(),
    metadata jsonb,
    path_tokens text[] GENERATED ALWAYS AS (string_to_array(name, '/'::text)) STORED,
    version text,
    owner_id text,
    user_metadata jsonb
);


ALTER TABLE storage.objects OWNER TO supabase_storage_admin;

--
-- Name: COLUMN objects.owner; Type: COMMENT; Schema: storage; Owner: supabase_storage_admin
--

COMMENT ON COLUMN storage.objects.owner IS 'Field is deprecated, use owner_id instead';


--
-- Name: s3_multipart_uploads; Type: TABLE; Schema: storage; Owner: supabase_storage_admin
--

CREATE TABLE storage.s3_multipart_uploads (
    id text NOT NULL,
    in_progress_size bigint DEFAULT 0 NOT NULL,
    upload_signature text NOT NULL,
    bucket_id text NOT NULL,
    key text NOT NULL COLLATE pg_catalog."C",
    version text NOT NULL,
    owner_id text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    user_metadata jsonb
);


ALTER TABLE storage.s3_multipart_uploads OWNER TO supabase_storage_admin;

--
-- Name: s3_multipart_uploads_parts; Type: TABLE; Schema: storage; Owner: supabase_storage_admin
--

CREATE TABLE storage.s3_multipart_uploads_parts (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    upload_id text NOT NULL,
    size bigint DEFAULT 0 NOT NULL,
    part_number integer NOT NULL,
    bucket_id text NOT NULL,
    key text NOT NULL COLLATE pg_catalog."C",
    etag text NOT NULL,
    owner_id text,
    version text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE storage.s3_multipart_uploads_parts OWNER TO supabase_storage_admin;

--
-- Name: refresh_tokens id; Type: DEFAULT; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE ONLY auth.refresh_tokens ALTER COLUMN id SET DEFAULT nextval('auth.refresh_tokens_id_seq'::regclass);


--
-- Name: attendance attendance_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.attendance ALTER COLUMN attendance_id SET DEFAULT nextval('public.attendance_attendance_id_seq'::regclass);


--
-- Name: classes_schedule schedule_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.classes_schedule ALTER COLUMN schedule_id SET DEFAULT nextval('public.classes_schedule_schedule_id_seq'::regclass);


--
-- Name: notice notice_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.notice ALTER COLUMN notice_id SET DEFAULT nextval('public.notice_notice_id_seq'::regclass);


--
-- Name: results result_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.results ALTER COLUMN result_id SET DEFAULT nextval('public.results_result_id_seq'::regclass);


--
-- Name: staff_subjects id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.staff_subjects ALTER COLUMN id SET DEFAULT nextval('public.staff_subjects_id_seq'::regclass);


--
-- Name: subjects subject_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subjects ALTER COLUMN subject_id SET DEFAULT nextval('public.subjects_subject_id_seq'::regclass);


--
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.audit_log_entries (instance_id, id, payload, created_at, ip_address) FROM stdin;
00000000-0000-0000-0000-000000000000	7902e30d-7e9e-452c-aa67-1068b8ba1ee6	{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"abc@gmail.com","user_id":"00699b0c-3d9f-43f3-8585-db639cc75dab","user_phone":""}}	2025-07-06 22:44:59.768727+00	
00000000-0000-0000-0000-000000000000	236789da-745f-4c01-a221-824dcf91b74f	{"action":"user_signedup","actor_id":"40e670c9-3227-4adb-bac9-14930a87a782","actor_username":"angermaster@gamil.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:03:29.259474+00	
00000000-0000-0000-0000-000000000000	0d4640b6-147c-4724-b661-aeb3caf26925	{"action":"login","actor_id":"40e670c9-3227-4adb-bac9-14930a87a782","actor_username":"angermaster@gamil.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:03:29.263878+00	
00000000-0000-0000-0000-000000000000	341ee3b2-dafc-46a3-ad4b-29087e2323ee	{"action":"user_repeated_signup","actor_id":"40e670c9-3227-4adb-bac9-14930a87a782","actor_username":"angermaster@gamil.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:03:58.081953+00	
00000000-0000-0000-0000-000000000000	dee18fc4-2df7-4a84-938d-562ee8eb0073	{"action":"login","actor_id":"40e670c9-3227-4adb-bac9-14930a87a782","actor_username":"angermaster@gamil.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:06:26.660504+00	
00000000-0000-0000-0000-000000000000	f860485d-295f-4b45-8215-afdd513cacdf	{"action":"login","actor_id":"40e670c9-3227-4adb-bac9-14930a87a782","actor_username":"angermaster@gamil.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:07:00.709531+00	
00000000-0000-0000-0000-000000000000	663f496a-db57-4a6c-b36d-ebc6854d2397	{"action":"user_signedup","actor_id":"f043067b-9ef4-4009-93e3-a8c2dec006e1","actor_username":"student001@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:19:29.590268+00	
00000000-0000-0000-0000-000000000000	00a4527f-ac08-44bc-9b79-4952024bc8cf	{"action":"login","actor_id":"f043067b-9ef4-4009-93e3-a8c2dec006e1","actor_username":"student001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:19:29.595072+00	
00000000-0000-0000-0000-000000000000	dc9e207e-8ca2-495c-83e0-701af65c10c0	{"action":"user_signedup","actor_id":"00654f1b-b3e3-43af-a7b4-56f97921040b","actor_username":"student002@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:19:30.034752+00	
00000000-0000-0000-0000-000000000000	8a18e127-f1b2-440a-bed2-6609a3158759	{"action":"login","actor_id":"00654f1b-b3e3-43af-a7b4-56f97921040b","actor_username":"student002@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:19:30.039282+00	
00000000-0000-0000-0000-000000000000	10e43a3c-3357-45e4-b592-b8cd2d991e07	{"action":"user_signedup","actor_id":"359c592a-dd23-4db2-9135-bcdd5c066705","actor_username":"student003@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:19:30.416233+00	
00000000-0000-0000-0000-000000000000	a89886a2-5b5a-40e1-a575-df6a30e0ad51	{"action":"login","actor_id":"359c592a-dd23-4db2-9135-bcdd5c066705","actor_username":"student003@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:19:30.419651+00	
00000000-0000-0000-0000-000000000000	3ff904bc-27b0-44d5-8990-f3f2cf71c6b3	{"action":"user_signedup","actor_id":"c1f5941b-17b0-4191-bfb9-7dc67c526310","actor_username":"student004@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:19:30.674822+00	
00000000-0000-0000-0000-000000000000	710c7f64-7d81-4ca3-b6ca-efc35286fd42	{"action":"login","actor_id":"c1f5941b-17b0-4191-bfb9-7dc67c526310","actor_username":"student004@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:19:30.678424+00	
00000000-0000-0000-0000-000000000000	0f089c5a-8336-493a-8048-4bd1cca999c4	{"action":"user_signedup","actor_id":"1ce57413-49e4-4706-ace4-b2a3117a33c3","actor_username":"student005@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:19:30.940118+00	
00000000-0000-0000-0000-000000000000	57923b0b-7d69-46af-8f8f-f3c800c0dca5	{"action":"login","actor_id":"1ce57413-49e4-4706-ace4-b2a3117a33c3","actor_username":"student005@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:19:30.944097+00	
00000000-0000-0000-0000-000000000000	d77c7b42-23ab-4d37-87f0-96297ab4bed2	{"action":"user_signedup","actor_id":"4fcafc36-f358-4930-8e98-e10347b330d8","actor_username":"student006@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:19:31.319024+00	
00000000-0000-0000-0000-000000000000	26f37faf-2cf9-4365-bd68-57b9ab84a802	{"action":"login","actor_id":"4fcafc36-f358-4930-8e98-e10347b330d8","actor_username":"student006@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:19:31.324659+00	
00000000-0000-0000-0000-000000000000	36f96e32-d996-49c0-921f-89a291779f2c	{"action":"user_signedup","actor_id":"6485a6cd-3531-4d64-8d9d-c7e497f1c618","actor_username":"student007@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:19:31.640465+00	
00000000-0000-0000-0000-000000000000	7e83070d-f0d6-4592-9eed-b54586a1e1c5	{"action":"login","actor_id":"6485a6cd-3531-4d64-8d9d-c7e497f1c618","actor_username":"student007@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:19:31.64383+00	
00000000-0000-0000-0000-000000000000	ce25ea0d-709a-48b3-b0e3-0cabb58f4698	{"action":"user_signedup","actor_id":"36078707-91df-4b7b-8b4a-8e342bbc3e36","actor_username":"student008@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:19:32.015408+00	
00000000-0000-0000-0000-000000000000	a18a5b91-bd01-4305-ac3a-6fd99c3fd44b	{"action":"login","actor_id":"36078707-91df-4b7b-8b4a-8e342bbc3e36","actor_username":"student008@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:19:32.01974+00	
00000000-0000-0000-0000-000000000000	68769732-c92e-4498-990a-f93fc1e36fcb	{"action":"user_signedup","actor_id":"d362753f-74bf-427c-8666-6cad45b48cd0","actor_username":"student009@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:19:32.391822+00	
00000000-0000-0000-0000-000000000000	5bafc108-6d7c-429e-84d2-176143c4d2e2	{"action":"login","actor_id":"d362753f-74bf-427c-8666-6cad45b48cd0","actor_username":"student009@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:19:32.394833+00	
00000000-0000-0000-0000-000000000000	b6663a02-0189-4af6-9cdb-73cad502cd53	{"action":"user_signedup","actor_id":"b2105c0e-41f7-4adc-a6d4-a3bab47ef2ee","actor_username":"student010@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:19:32.647839+00	
00000000-0000-0000-0000-000000000000	560d5ee0-44b6-44ff-a95f-7bf7d4efee5f	{"action":"login","actor_id":"b2105c0e-41f7-4adc-a6d4-a3bab47ef2ee","actor_username":"student010@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:19:32.65177+00	
00000000-0000-0000-0000-000000000000	6ddc33fe-fff4-4f1d-a9ca-b018f34d75b0	{"action":"user_signedup","actor_id":"759276a4-cc74-4d53-bd9f-d7611a54e140","actor_username":"student011@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:19:32.928926+00	
00000000-0000-0000-0000-000000000000	c26f8b21-a8a5-4cc5-8496-82ff00d0bb9a	{"action":"login","actor_id":"759276a4-cc74-4d53-bd9f-d7611a54e140","actor_username":"student011@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:19:32.932984+00	
00000000-0000-0000-0000-000000000000	4871d1a1-d317-4091-8d5e-fe161f49fb44	{"action":"user_signedup","actor_id":"695edbf7-687d-434f-8e37-706f38502b57","actor_username":"student012@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:19:33.222807+00	
00000000-0000-0000-0000-000000000000	01f4815c-c29b-4971-8cd7-b38e45c1a126	{"action":"login","actor_id":"695edbf7-687d-434f-8e37-706f38502b57","actor_username":"student012@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:19:33.225711+00	
00000000-0000-0000-0000-000000000000	4693e1a0-b939-4808-a1f9-209fd5fc9566	{"action":"user_signedup","actor_id":"e9f9d1f4-66be-4978-b4ab-a31c37fbc42f","actor_username":"student013@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:19:33.587675+00	
00000000-0000-0000-0000-000000000000	b4be1551-d6ee-4c95-96a4-7df917c28428	{"action":"login","actor_id":"e9f9d1f4-66be-4978-b4ab-a31c37fbc42f","actor_username":"student013@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:19:33.590783+00	
00000000-0000-0000-0000-000000000000	4842bc9f-f60c-43c8-a4f6-18ed6afa3a47	{"action":"user_signedup","actor_id":"e0ce2d2b-bd66-4d34-a109-7e719aad41e2","actor_username":"student014@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:19:33.866576+00	
00000000-0000-0000-0000-000000000000	339ee62c-6e3e-4cf5-b1dc-ad5249729c29	{"action":"login","actor_id":"e0ce2d2b-bd66-4d34-a109-7e719aad41e2","actor_username":"student014@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:19:33.869515+00	
00000000-0000-0000-0000-000000000000	61a8b4cb-6016-4405-a079-119c6c6d7774	{"action":"user_signedup","actor_id":"13f0aceb-43a4-4120-ad57-8ce74766a078","actor_username":"student015@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:19:34.231474+00	
00000000-0000-0000-0000-000000000000	16e40c36-32e5-430d-954d-5b14b6623bf5	{"action":"login","actor_id":"13f0aceb-43a4-4120-ad57-8ce74766a078","actor_username":"student015@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:19:34.235175+00	
00000000-0000-0000-0000-000000000000	8bcdfe43-1233-4b3e-9ff4-289ce643e125	{"action":"user_signedup","actor_id":"7919fd8d-0f89-40a5-baf0-12c87c32e39c","actor_username":"student016@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:19:34.639181+00	
00000000-0000-0000-0000-000000000000	fa1fa729-6d92-483e-9d0f-84183ab186d1	{"action":"login","actor_id":"7919fd8d-0f89-40a5-baf0-12c87c32e39c","actor_username":"student016@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:19:34.64221+00	
00000000-0000-0000-0000-000000000000	fb18f474-e448-46d8-b29d-11fa320a49a2	{"action":"user_signedup","actor_id":"d57366cd-d4e2-4731-8559-445f513c2d91","actor_username":"student017@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:19:34.978993+00	
00000000-0000-0000-0000-000000000000	496e3d78-e826-410b-bc6c-1deb5a4773c0	{"action":"login","actor_id":"d57366cd-d4e2-4731-8559-445f513c2d91","actor_username":"student017@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:19:34.982889+00	
00000000-0000-0000-0000-000000000000	55ac869e-4eed-4b66-a91f-ae3377fd32ee	{"action":"user_signedup","actor_id":"c11b8b42-5040-4e36-a6cd-8d191d001793","actor_username":"student018@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:19:35.226499+00	
00000000-0000-0000-0000-000000000000	3f861135-d0f1-4d79-938b-2f204ac09ed4	{"action":"login","actor_id":"c11b8b42-5040-4e36-a6cd-8d191d001793","actor_username":"student018@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:19:35.229542+00	
00000000-0000-0000-0000-000000000000	b66fe186-e2a9-4b22-869b-47f56eac7f70	{"action":"user_signedup","actor_id":"8fbb89b6-ec73-44b9-a055-f705841efad5","actor_username":"student019@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:19:35.506863+00	
00000000-0000-0000-0000-000000000000	dc7e31a7-80a0-446f-bd1a-e921ec1454d9	{"action":"login","actor_id":"8fbb89b6-ec73-44b9-a055-f705841efad5","actor_username":"student019@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:19:35.509641+00	
00000000-0000-0000-0000-000000000000	de6eec7e-4a6a-4797-a6e4-15190f9d97e9	{"action":"user_signedup","actor_id":"3382735c-65d6-4f3a-ac19-1da3efff8dc9","actor_username":"student020@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:19:35.763945+00	
00000000-0000-0000-0000-000000000000	60825e8d-da6f-4447-b089-b9381706d466	{"action":"login","actor_id":"3382735c-65d6-4f3a-ac19-1da3efff8dc9","actor_username":"student020@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:19:35.766903+00	
00000000-0000-0000-0000-000000000000	281cbe5c-47e2-4fa6-835a-f694c46a00c8	{"action":"user_signedup","actor_id":"294edd58-3f43-4693-98c7-0912ee512a17","actor_username":"student021@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:19:36.031602+00	
00000000-0000-0000-0000-000000000000	eff26f95-13d4-439e-a1d6-d28f95e38a2c	{"action":"login","actor_id":"294edd58-3f43-4693-98c7-0912ee512a17","actor_username":"student021@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:19:36.034738+00	
00000000-0000-0000-0000-000000000000	78397b01-e307-47bc-a7a6-61c8a2585189	{"action":"user_signedup","actor_id":"de264ef1-6740-422b-bf8d-a104532e0c90","actor_username":"student022@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:19:36.299206+00	
00000000-0000-0000-0000-000000000000	1f1fa056-62e0-4da4-b22c-6851a76a6b65	{"action":"login","actor_id":"de264ef1-6740-422b-bf8d-a104532e0c90","actor_username":"student022@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:19:36.30291+00	
00000000-0000-0000-0000-000000000000	b41d30c2-f7b4-4ee3-b789-e13a74977bdd	{"action":"user_signedup","actor_id":"e2535c7d-c6d4-4e72-9a09-f28bc8ed9a7e","actor_username":"student023@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:19:36.70595+00	
00000000-0000-0000-0000-000000000000	6d57e401-cc64-42ab-b94d-050025ee92b5	{"action":"login","actor_id":"e2535c7d-c6d4-4e72-9a09-f28bc8ed9a7e","actor_username":"student023@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:19:36.709159+00	
00000000-0000-0000-0000-000000000000	42f02484-b112-4e58-99ae-1040882178d5	{"action":"user_signedup","actor_id":"90cd8044-d51a-4dfb-8dba-ba12538edd0b","actor_username":"student024@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:19:36.958368+00	
00000000-0000-0000-0000-000000000000	654539ef-ca42-4932-94a2-e1f86a04a3f6	{"action":"login","actor_id":"90cd8044-d51a-4dfb-8dba-ba12538edd0b","actor_username":"student024@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:19:36.961541+00	
00000000-0000-0000-0000-000000000000	8106bab8-53ab-4ddb-9e19-2ae084eca8bd	{"action":"user_signedup","actor_id":"38a9c3a7-4faf-4053-b3ce-39b3807d1bf8","actor_username":"student025@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:19:37.236525+00	
00000000-0000-0000-0000-000000000000	976a6264-4a84-4b98-9c37-9e2e6401bb08	{"action":"login","actor_id":"38a9c3a7-4faf-4053-b3ce-39b3807d1bf8","actor_username":"student025@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:19:37.239464+00	
00000000-0000-0000-0000-000000000000	719e7755-2e73-424a-bfa4-2e2bb43b3eeb	{"action":"user_signedup","actor_id":"8058af23-f469-4ca8-a7c4-5182a0eef655","actor_username":"student026@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:19:37.48477+00	
00000000-0000-0000-0000-000000000000	56e8edef-94a0-441b-b40a-2de17bced2ef	{"action":"login","actor_id":"8058af23-f469-4ca8-a7c4-5182a0eef655","actor_username":"student026@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:19:37.488051+00	
00000000-0000-0000-0000-000000000000	2e417949-da00-4301-813f-ee109c972410	{"action":"user_signedup","actor_id":"cc3c89cc-118b-4779-9901-580245998f7b","actor_username":"student027@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:19:37.746864+00	
00000000-0000-0000-0000-000000000000	e7ed96e8-e7c7-41b6-be37-6c925f5a0eee	{"action":"login","actor_id":"cc3c89cc-118b-4779-9901-580245998f7b","actor_username":"student027@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:19:37.750133+00	
00000000-0000-0000-0000-000000000000	3df32890-8ed3-43df-8a54-b3a6e0076352	{"action":"user_signedup","actor_id":"5ee23e8e-b8db-4554-9d10-41a19321f817","actor_username":"student028@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:19:38.045906+00	
00000000-0000-0000-0000-000000000000	2ec29f5f-fafd-4c83-8623-d85af3158d06	{"action":"login","actor_id":"5ee23e8e-b8db-4554-9d10-41a19321f817","actor_username":"student028@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:19:38.049711+00	
00000000-0000-0000-0000-000000000000	21634547-b188-4195-9878-b4828692e68a	{"action":"user_signedup","actor_id":"01ad9937-bd54-4b32-9458-9b50c81a84d1","actor_username":"student029@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:19:38.30446+00	
00000000-0000-0000-0000-000000000000	b1dc035d-36f3-4041-9660-533bbf111aec	{"action":"login","actor_id":"01ad9937-bd54-4b32-9458-9b50c81a84d1","actor_username":"student029@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:19:38.307677+00	
00000000-0000-0000-0000-000000000000	4d715a31-81d1-478d-ad18-8870a1cf758e	{"action":"user_signedup","actor_id":"7baeab7d-13d6-47f5-ad82-65d9ca35c85e","actor_username":"student030@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:19:38.595068+00	
00000000-0000-0000-0000-000000000000	e97b5750-04c9-48ab-9342-df192b6de868	{"action":"login","actor_id":"7baeab7d-13d6-47f5-ad82-65d9ca35c85e","actor_username":"student030@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:19:38.598148+00	
00000000-0000-0000-0000-000000000000	8ca8f53b-6d77-48bb-a273-bcd2d15ca498	{"action":"user_signedup","actor_id":"dba96981-5e2e-4b6b-af70-b1b6b4586390","actor_username":"student036@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:19:39.660153+00	
00000000-0000-0000-0000-000000000000	0550f724-36b2-4f73-bf05-f7e004cfde3b	{"action":"login","actor_id":"dba96981-5e2e-4b6b-af70-b1b6b4586390","actor_username":"student036@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:19:39.662983+00	
00000000-0000-0000-0000-000000000000	08538c47-9735-4604-abb9-e972b7f51c3a	{"action":"user_signedup","actor_id":"945033ac-abb6-426c-88c6-926ffa615561","actor_username":"student097@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:19:49.597186+00	
00000000-0000-0000-0000-000000000000	e933049a-a1bb-4cdf-9b9c-c993b8dc5090	{"action":"login","actor_id":"945033ac-abb6-426c-88c6-926ffa615561","actor_username":"student097@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:19:49.602182+00	
00000000-0000-0000-0000-000000000000	cff82995-bc72-4167-9c72-5941fbb83c3e	{"action":"user_repeated_signup","actor_id":"f043067b-9ef4-4009-93e3-a8c2dec006e1","actor_username":"student001@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:20:52.779895+00	
00000000-0000-0000-0000-000000000000	0d649ffc-4db9-4fe3-823c-c83adaa22cdf	{"action":"user_repeated_signup","actor_id":"00654f1b-b3e3-43af-a7b4-56f97921040b","actor_username":"student002@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:20:56.143671+00	
00000000-0000-0000-0000-000000000000	4fce8eef-10dd-44d5-9a65-ed4264662115	{"action":"user_repeated_signup","actor_id":"359c592a-dd23-4db2-9135-bcdd5c066705","actor_username":"student003@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:20:58.444375+00	
00000000-0000-0000-0000-000000000000	e99d8ee6-b014-4bb8-bb25-bc3ab8048770	{"action":"user_repeated_signup","actor_id":"c1f5941b-17b0-4191-bfb9-7dc67c526310","actor_username":"student004@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:21:00.766233+00	
00000000-0000-0000-0000-000000000000	769a25d4-72f6-4952-9dfb-7f21c94c9fa4	{"action":"user_repeated_signup","actor_id":"1ce57413-49e4-4706-ace4-b2a3117a33c3","actor_username":"student005@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:21:03.102359+00	
00000000-0000-0000-0000-000000000000	2c1dfefd-a10e-4fa1-97b2-48d4758c0906	{"action":"user_repeated_signup","actor_id":"4fcafc36-f358-4930-8e98-e10347b330d8","actor_username":"student006@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:21:05.394779+00	
00000000-0000-0000-0000-000000000000	9d154797-0e95-4133-bfd5-e16aaa60c11d	{"action":"user_repeated_signup","actor_id":"6485a6cd-3531-4d64-8d9d-c7e497f1c618","actor_username":"student007@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:21:07.664253+00	
00000000-0000-0000-0000-000000000000	f0b19a7e-3d3c-4fc8-aad2-d41e5412002f	{"action":"user_repeated_signup","actor_id":"36078707-91df-4b7b-8b4a-8e342bbc3e36","actor_username":"student008@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:21:09.836421+00	
00000000-0000-0000-0000-000000000000	b16c3c54-5a9d-4d8e-b0f2-c71a6b240205	{"action":"user_repeated_signup","actor_id":"e9f9d1f4-66be-4978-b4ab-a31c37fbc42f","actor_username":"student013@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:21:20.936938+00	
00000000-0000-0000-0000-000000000000	9da3b6e1-0e26-42c9-8051-6700741a0d32	{"action":"user_repeated_signup","actor_id":"d57366cd-d4e2-4731-8559-445f513c2d91","actor_username":"student017@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:21:30.871916+00	
00000000-0000-0000-0000-000000000000	a62eeda4-d0fb-4f95-86fa-72fb590e2020	{"action":"user_repeated_signup","actor_id":"294edd58-3f43-4693-98c7-0912ee512a17","actor_username":"student021@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:21:39.56099+00	
00000000-0000-0000-0000-000000000000	10547af1-836f-427d-925c-e45a401694b8	{"action":"user_repeated_signup","actor_id":"f043067b-9ef4-4009-93e3-a8c2dec006e1","actor_username":"student001@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:24:45.632443+00	
00000000-0000-0000-0000-000000000000	dd909066-f0cf-4fc6-b234-792ed437aabf	{"action":"user_repeated_signup","actor_id":"00654f1b-b3e3-43af-a7b4-56f97921040b","actor_username":"student002@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:24:46.885104+00	
00000000-0000-0000-0000-000000000000	27411f80-6352-414d-b87c-cd1dc4a7702f	{"action":"user_repeated_signup","actor_id":"359c592a-dd23-4db2-9135-bcdd5c066705","actor_username":"student003@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:24:48.069152+00	
00000000-0000-0000-0000-000000000000	e6d1b643-5206-4f1a-946e-7e7a965f8bb9	{"action":"user_repeated_signup","actor_id":"c1f5941b-17b0-4191-bfb9-7dc67c526310","actor_username":"student004@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:24:49.297726+00	
00000000-0000-0000-0000-000000000000	e8f880be-382d-4541-97a6-0dcdc6431581	{"action":"user_repeated_signup","actor_id":"1ce57413-49e4-4706-ace4-b2a3117a33c3","actor_username":"student005@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:24:50.527662+00	
00000000-0000-0000-0000-000000000000	75db3267-61ab-48d1-9271-a131cd815750	{"action":"user_repeated_signup","actor_id":"4fcafc36-f358-4930-8e98-e10347b330d8","actor_username":"student006@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:24:51.696385+00	
00000000-0000-0000-0000-000000000000	13088e2a-5784-4b08-a11f-647856abd002	{"action":"user_repeated_signup","actor_id":"6485a6cd-3531-4d64-8d9d-c7e497f1c618","actor_username":"student007@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:24:52.884346+00	
00000000-0000-0000-0000-000000000000	2c8bbd3b-0d2f-43b8-9d38-2317cbeb7025	{"action":"user_repeated_signup","actor_id":"36078707-91df-4b7b-8b4a-8e342bbc3e36","actor_username":"student008@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:24:54.110295+00	
00000000-0000-0000-0000-000000000000	87e7ef4b-4d89-49aa-aa15-62845f5d4998	{"action":"user_repeated_signup","actor_id":"d362753f-74bf-427c-8666-6cad45b48cd0","actor_username":"student009@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:24:55.315067+00	
00000000-0000-0000-0000-000000000000	c5f3584c-3116-46e2-a95f-9fbf27d804e5	{"action":"user_repeated_signup","actor_id":"b2105c0e-41f7-4adc-a6d4-a3bab47ef2ee","actor_username":"student010@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:24:56.517003+00	
00000000-0000-0000-0000-000000000000	7275a343-a3ed-459d-9fd2-94b45f6f0772	{"action":"user_repeated_signup","actor_id":"759276a4-cc74-4d53-bd9f-d7611a54e140","actor_username":"student011@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:24:57.691025+00	
00000000-0000-0000-0000-000000000000	2601a702-4993-4a02-a161-b6381147ac48	{"action":"user_repeated_signup","actor_id":"695edbf7-687d-434f-8e37-706f38502b57","actor_username":"student012@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:24:58.908021+00	
00000000-0000-0000-0000-000000000000	efff4229-820d-44b3-9d3c-084d28310417	{"action":"user_repeated_signup","actor_id":"e9f9d1f4-66be-4978-b4ab-a31c37fbc42f","actor_username":"student013@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:25:00.128045+00	
00000000-0000-0000-0000-000000000000	4be2ae10-5d9b-4476-9e75-5617bf5f1ef4	{"action":"user_repeated_signup","actor_id":"e0ce2d2b-bd66-4d34-a109-7e719aad41e2","actor_username":"student014@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:25:01.324695+00	
00000000-0000-0000-0000-000000000000	35c5056f-9c66-4ed9-a146-5a034f3caf0b	{"action":"user_repeated_signup","actor_id":"13f0aceb-43a4-4120-ad57-8ce74766a078","actor_username":"student015@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:25:02.507123+00	
00000000-0000-0000-0000-000000000000	df0b06e5-cbc7-41f7-bc7e-ebb1f75e4153	{"action":"user_repeated_signup","actor_id":"7919fd8d-0f89-40a5-baf0-12c87c32e39c","actor_username":"student016@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:25:03.727285+00	
00000000-0000-0000-0000-000000000000	7b7537ad-f4c8-4a5b-832c-733b6d374597	{"action":"user_repeated_signup","actor_id":"d57366cd-d4e2-4731-8559-445f513c2d91","actor_username":"student017@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:25:04.902715+00	
00000000-0000-0000-0000-000000000000	fccad11c-14f5-4d51-83e8-3383ab5f9bb3	{"action":"user_repeated_signup","actor_id":"c11b8b42-5040-4e36-a6cd-8d191d001793","actor_username":"student018@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:25:06.075195+00	
00000000-0000-0000-0000-000000000000	7848639c-f154-4b53-9f1d-6605e39cd5d7	{"action":"user_repeated_signup","actor_id":"8fbb89b6-ec73-44b9-a055-f705841efad5","actor_username":"student019@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:25:07.248054+00	
00000000-0000-0000-0000-000000000000	908f0df2-1ab8-4663-8302-57edc44d61dd	{"action":"user_repeated_signup","actor_id":"3382735c-65d6-4f3a-ac19-1da3efff8dc9","actor_username":"student020@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:25:08.414151+00	
00000000-0000-0000-0000-000000000000	a31e9b53-15bf-4983-b50d-fa1b2f178518	{"action":"user_repeated_signup","actor_id":"294edd58-3f43-4693-98c7-0912ee512a17","actor_username":"student021@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:25:09.56625+00	
00000000-0000-0000-0000-000000000000	6c5d5cf1-12b8-4f94-bdc2-b7db8b7a8d13	{"action":"user_repeated_signup","actor_id":"de264ef1-6740-422b-bf8d-a104532e0c90","actor_username":"student022@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:25:21.978061+00	
00000000-0000-0000-0000-000000000000	a7de0c8d-c680-4971-b1d8-94880498e567	{"action":"user_repeated_signup","actor_id":"e2535c7d-c6d4-4e72-9a09-f28bc8ed9a7e","actor_username":"student023@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:25:33.824762+00	
00000000-0000-0000-0000-000000000000	1845f049-259d-42e8-9050-cb1dd22a977f	{"action":"user_repeated_signup","actor_id":"90cd8044-d51a-4dfb-8dba-ba12538edd0b","actor_username":"student024@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:25:40.54346+00	
00000000-0000-0000-0000-000000000000	981de1ff-7daf-45d6-93a8-e35615f0b821	{"action":"user_repeated_signup","actor_id":"f043067b-9ef4-4009-93e3-a8c2dec006e1","actor_username":"student001@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:27:52.525573+00	
00000000-0000-0000-0000-000000000000	829734d7-4d47-4818-9b96-0bc5f9962cf5	{"action":"user_repeated_signup","actor_id":"00654f1b-b3e3-43af-a7b4-56f97921040b","actor_username":"student002@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:27:54.651428+00	
00000000-0000-0000-0000-000000000000	e43b17a1-4cc3-43ca-8729-d220e58624a3	{"action":"user_repeated_signup","actor_id":"359c592a-dd23-4db2-9135-bcdd5c066705","actor_username":"student003@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:27:56.001015+00	
00000000-0000-0000-0000-000000000000	257450ef-5e43-4c03-b660-8894bd48f553	{"action":"user_repeated_signup","actor_id":"c1f5941b-17b0-4191-bfb9-7dc67c526310","actor_username":"student004@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:27:57.329288+00	
00000000-0000-0000-0000-000000000000	ff057b88-d440-4b77-a711-2f9e6acf9888	{"action":"user_repeated_signup","actor_id":"1ce57413-49e4-4706-ace4-b2a3117a33c3","actor_username":"student005@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:27:58.61015+00	
00000000-0000-0000-0000-000000000000	7d4832e1-bfff-4281-a988-89843bbb2f68	{"action":"user_repeated_signup","actor_id":"4fcafc36-f358-4930-8e98-e10347b330d8","actor_username":"student006@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:27:59.795382+00	
00000000-0000-0000-0000-000000000000	266b26c9-49f1-4755-8584-cc26aaae5d5c	{"action":"user_repeated_signup","actor_id":"6485a6cd-3531-4d64-8d9d-c7e497f1c618","actor_username":"student007@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:28:01.082747+00	
00000000-0000-0000-0000-000000000000	5129b18b-aaf0-414f-9f62-0dfb89c67def	{"action":"user_repeated_signup","actor_id":"36078707-91df-4b7b-8b4a-8e342bbc3e36","actor_username":"student008@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:28:02.299498+00	
00000000-0000-0000-0000-000000000000	746a2785-5579-4618-8cea-7ef8d06af237	{"action":"user_repeated_signup","actor_id":"d362753f-74bf-427c-8666-6cad45b48cd0","actor_username":"student009@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:28:03.514205+00	
00000000-0000-0000-0000-000000000000	a4e7025b-1216-4145-80d3-23c247ab099b	{"action":"user_repeated_signup","actor_id":"b2105c0e-41f7-4adc-a6d4-a3bab47ef2ee","actor_username":"student010@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:28:04.744508+00	
00000000-0000-0000-0000-000000000000	7ad9eb17-6933-4f12-b7a5-5508919219c6	{"action":"user_repeated_signup","actor_id":"759276a4-cc74-4d53-bd9f-d7611a54e140","actor_username":"student011@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:28:05.924764+00	
00000000-0000-0000-0000-000000000000	17e4479f-509d-4434-ab08-3296d9a06bdf	{"action":"user_repeated_signup","actor_id":"695edbf7-687d-434f-8e37-706f38502b57","actor_username":"student012@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:28:07.193554+00	
00000000-0000-0000-0000-000000000000	e460268c-543d-4ad8-a7b4-699d68ad5e61	{"action":"user_repeated_signup","actor_id":"e9f9d1f4-66be-4978-b4ab-a31c37fbc42f","actor_username":"student013@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:28:08.490749+00	
00000000-0000-0000-0000-000000000000	85ef4aad-2d48-4311-b874-e98212ba0e33	{"action":"user_repeated_signup","actor_id":"e0ce2d2b-bd66-4d34-a109-7e719aad41e2","actor_username":"student014@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:28:09.732359+00	
00000000-0000-0000-0000-000000000000	806ce740-af54-404f-862a-829116d082fd	{"action":"user_repeated_signup","actor_id":"13f0aceb-43a4-4120-ad57-8ce74766a078","actor_username":"student015@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:28:10.937249+00	
00000000-0000-0000-0000-000000000000	4947fd2a-8315-49b5-8705-acd0a0a474d3	{"action":"user_repeated_signup","actor_id":"7919fd8d-0f89-40a5-baf0-12c87c32e39c","actor_username":"student016@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:28:12.11066+00	
00000000-0000-0000-0000-000000000000	9c792325-bafd-4268-a375-824704f45e67	{"action":"user_repeated_signup","actor_id":"d57366cd-d4e2-4731-8559-445f513c2d91","actor_username":"student017@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:28:13.287795+00	
00000000-0000-0000-0000-000000000000	b7b7193d-a6fb-44e7-939e-68ddc403db8e	{"action":"user_repeated_signup","actor_id":"c11b8b42-5040-4e36-a6cd-8d191d001793","actor_username":"student018@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:28:14.548325+00	
00000000-0000-0000-0000-000000000000	32f88ab5-af3e-44ae-b767-9f3193dcdd83	{"action":"user_repeated_signup","actor_id":"8fbb89b6-ec73-44b9-a055-f705841efad5","actor_username":"student019@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:28:15.705363+00	
00000000-0000-0000-0000-000000000000	87b49266-9311-4edd-b0bd-dda40ebe34fc	{"action":"user_repeated_signup","actor_id":"3382735c-65d6-4f3a-ac19-1da3efff8dc9","actor_username":"student020@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:28:16.902462+00	
00000000-0000-0000-0000-000000000000	ca691f1b-95cb-45ef-90c3-8b0e6f24197f	{"action":"user_repeated_signup","actor_id":"294edd58-3f43-4693-98c7-0912ee512a17","actor_username":"student021@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:28:18.074438+00	
00000000-0000-0000-0000-000000000000	fd35d81f-ee12-4e44-aeed-7c579d5d5f53	{"action":"user_repeated_signup","actor_id":"de264ef1-6740-422b-bf8d-a104532e0c90","actor_username":"student022@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:28:19.406336+00	
00000000-0000-0000-0000-000000000000	7d10bd99-c168-42ba-8904-e886ee5501bc	{"action":"user_repeated_signup","actor_id":"e2535c7d-c6d4-4e72-9a09-f28bc8ed9a7e","actor_username":"student023@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:28:21.136218+00	
00000000-0000-0000-0000-000000000000	9f338267-89e8-4caa-b03d-84c9106bd543	{"action":"user_repeated_signup","actor_id":"90cd8044-d51a-4dfb-8dba-ba12538edd0b","actor_username":"student024@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:28:22.321839+00	
00000000-0000-0000-0000-000000000000	cff9f146-99b0-4f33-854a-fe727e6df17f	{"action":"user_repeated_signup","actor_id":"38a9c3a7-4faf-4053-b3ce-39b3807d1bf8","actor_username":"student025@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:28:23.52808+00	
00000000-0000-0000-0000-000000000000	20b3b2a2-1f11-4a50-9b47-0d31e44d4666	{"action":"user_repeated_signup","actor_id":"8058af23-f469-4ca8-a7c4-5182a0eef655","actor_username":"student026@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:28:24.722426+00	
00000000-0000-0000-0000-000000000000	b8b9a438-5ca0-425f-901c-065f12e484aa	{"action":"user_repeated_signup","actor_id":"cc3c89cc-118b-4779-9901-580245998f7b","actor_username":"student027@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:28:25.907285+00	
00000000-0000-0000-0000-000000000000	1b73c734-8059-4186-8200-d0e7a3620859	{"action":"user_repeated_signup","actor_id":"5ee23e8e-b8db-4554-9d10-41a19321f817","actor_username":"student028@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:28:27.099593+00	
00000000-0000-0000-0000-000000000000	0b23a97f-7ac8-4771-8762-fdecb094cea2	{"action":"user_repeated_signup","actor_id":"01ad9937-bd54-4b32-9458-9b50c81a84d1","actor_username":"student029@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:28:28.28014+00	
00000000-0000-0000-0000-000000000000	e497f3af-3068-4539-be92-1570002a6d46	{"action":"user_repeated_signup","actor_id":"7baeab7d-13d6-47f5-ad82-65d9ca35c85e","actor_username":"student030@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:28:29.477056+00	
00000000-0000-0000-0000-000000000000	0f6da234-a4fb-429b-a903-ea252a6b60c4	{"action":"user_signedup","actor_id":"7279bbef-accb-49e3-af8a-1eaa1950828c","actor_username":"student031@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:28:30.719157+00	
00000000-0000-0000-0000-000000000000	2de57c92-994f-467a-b47a-12406f0abdfa	{"action":"login","actor_id":"7279bbef-accb-49e3-af8a-1eaa1950828c","actor_username":"student031@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:28:30.723965+00	
00000000-0000-0000-0000-000000000000	ac2f0635-03e3-4fe5-aca6-c040a7902fea	{"action":"user_signedup","actor_id":"f5c1abe0-cbf4-449f-8f4c-5029070083ff","actor_username":"student032@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:28:32.031152+00	
00000000-0000-0000-0000-000000000000	568f41b7-3692-4e82-b537-7e277f00fd69	{"action":"login","actor_id":"f5c1abe0-cbf4-449f-8f4c-5029070083ff","actor_username":"student032@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:28:32.034404+00	
00000000-0000-0000-0000-000000000000	75b3d8b8-c949-403a-aa5c-2533c44369bd	{"action":"user_signedup","actor_id":"f26a23b8-080f-42ec-8856-0c6629d426aa","actor_username":"student033@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:28:33.321424+00	
00000000-0000-0000-0000-000000000000	80929f37-6f68-4cbf-9664-3c16c6c3652b	{"action":"login","actor_id":"f26a23b8-080f-42ec-8856-0c6629d426aa","actor_username":"student033@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:28:33.325444+00	
00000000-0000-0000-0000-000000000000	9b7b5bdf-2598-4959-b785-4b40c02e1b28	{"action":"user_signedup","actor_id":"957b0e6b-9843-4531-8273-1878f186bdbe","actor_username":"student034@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:28:34.576756+00	
00000000-0000-0000-0000-000000000000	b4cca38e-a481-4ad6-a16d-48e3947685dd	{"action":"login","actor_id":"957b0e6b-9843-4531-8273-1878f186bdbe","actor_username":"student034@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:28:34.580393+00	
00000000-0000-0000-0000-000000000000	b89c17f2-6efc-4143-b348-577c68fdabce	{"action":"user_signedup","actor_id":"0552910e-f473-48bd-a631-8fd6c90b9a09","actor_username":"student035@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:28:35.872655+00	
00000000-0000-0000-0000-000000000000	2c005a66-90c0-45cd-81e6-6dbeb6048e7f	{"action":"login","actor_id":"0552910e-f473-48bd-a631-8fd6c90b9a09","actor_username":"student035@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:28:35.876511+00	
00000000-0000-0000-0000-000000000000	f8e4d201-5574-401e-9e19-ea6420e7161e	{"action":"user_repeated_signup","actor_id":"dba96981-5e2e-4b6b-af70-b1b6b4586390","actor_username":"student036@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:28:37.079481+00	
00000000-0000-0000-0000-000000000000	31cfc5b6-41e4-49e6-87a6-82c2d2bbf295	{"action":"user_signedup","actor_id":"92bb1183-589a-401f-a86b-5ae11a04e9bc","actor_username":"student037@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:28:38.491074+00	
00000000-0000-0000-0000-000000000000	2b86e562-fcb5-4f39-80a6-9ffecae3001c	{"action":"login","actor_id":"92bb1183-589a-401f-a86b-5ae11a04e9bc","actor_username":"student037@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:28:38.495055+00	
00000000-0000-0000-0000-000000000000	8945c548-0a0a-4a97-a82f-c86446023c83	{"action":"user_signedup","actor_id":"c5e5750f-bac1-4531-8acb-7b0e0027363a","actor_username":"student038@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:28:39.748462+00	
00000000-0000-0000-0000-000000000000	b7114d0e-acb5-4282-9609-8677034b0add	{"action":"login","actor_id":"c5e5750f-bac1-4531-8acb-7b0e0027363a","actor_username":"student038@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:28:39.751429+00	
00000000-0000-0000-0000-000000000000	f9c8b8f6-48f2-44e3-8309-b60058147ada	{"action":"user_signedup","actor_id":"09a05d58-176a-4ead-b435-167ef5b12f8b","actor_username":"student039@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:28:41.001322+00	
00000000-0000-0000-0000-000000000000	debb932b-8af8-4712-b4f8-134c0d98c654	{"action":"login","actor_id":"09a05d58-176a-4ead-b435-167ef5b12f8b","actor_username":"student039@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:28:41.004176+00	
00000000-0000-0000-0000-000000000000	3679439b-4292-46ea-a90d-e3c6b341bf72	{"action":"user_signedup","actor_id":"e097a9f6-36fd-4a46-87ea-2cb4f19719c8","actor_username":"student040@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:28:42.283115+00	
00000000-0000-0000-0000-000000000000	c0552c7c-2a65-4bfb-8d5a-1b95ecc7d4c0	{"action":"login","actor_id":"e097a9f6-36fd-4a46-87ea-2cb4f19719c8","actor_username":"student040@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:28:42.288952+00	
00000000-0000-0000-0000-000000000000	ee8393de-6dcc-4174-a96d-90b021fee42a	{"action":"user_signedup","actor_id":"55a7bdfb-ed63-4e31-beca-88314bc8cc5f","actor_username":"student041@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:28:43.56728+00	
00000000-0000-0000-0000-000000000000	2cfcff54-d2e3-456e-9c60-eb3d443ee3de	{"action":"login","actor_id":"55a7bdfb-ed63-4e31-beca-88314bc8cc5f","actor_username":"student041@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:28:43.570573+00	
00000000-0000-0000-0000-000000000000	289e244c-47a7-434d-ad1e-4a6467560b22	{"action":"user_signedup","actor_id":"5ec60e6d-5b8c-4fe1-8181-1fec9ec2ab86","actor_username":"student042@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:28:44.893296+00	
00000000-0000-0000-0000-000000000000	7e78a811-2eff-4762-9c54-dafa0279c583	{"action":"login","actor_id":"5ec60e6d-5b8c-4fe1-8181-1fec9ec2ab86","actor_username":"student042@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:28:44.897536+00	
00000000-0000-0000-0000-000000000000	468d4879-e63b-4f5d-8a14-21554b9d0624	{"action":"user_signedup","actor_id":"2ebbab6a-e0e8-4a29-9e15-9b321ded899a","actor_username":"student043@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:28:46.156819+00	
00000000-0000-0000-0000-000000000000	02988e65-1214-43fe-b5e3-4bb348b898f7	{"action":"login","actor_id":"2ebbab6a-e0e8-4a29-9e15-9b321ded899a","actor_username":"student043@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:28:46.15982+00	
00000000-0000-0000-0000-000000000000	e7bfe800-91e8-4360-b84b-8e5ea68fe772	{"action":"user_signedup","actor_id":"3ae6e2bf-60f1-4bec-936b-048b25d8f68e","actor_username":"student044@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:28:47.451173+00	
00000000-0000-0000-0000-000000000000	4b81bce6-da41-4d45-ad72-a36d17a23651	{"action":"login","actor_id":"3ae6e2bf-60f1-4bec-936b-048b25d8f68e","actor_username":"student044@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:28:47.453967+00	
00000000-0000-0000-0000-000000000000	0030af45-c592-44e7-9831-d9cc66c0b48c	{"action":"user_signedup","actor_id":"e00a142c-8a75-49a8-bed1-3d95a0f4c459","actor_username":"student045@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:28:48.752302+00	
00000000-0000-0000-0000-000000000000	daad9153-dcf7-42b0-aa0c-6a92b6dc053f	{"action":"login","actor_id":"e00a142c-8a75-49a8-bed1-3d95a0f4c459","actor_username":"student045@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:28:48.755297+00	
00000000-0000-0000-0000-000000000000	0a306ab9-3fa8-4a1d-a00e-0dd6c8b6e67a	{"action":"user_signedup","actor_id":"a6beb2c1-97e9-4b89-87f8-c6ce608ee596","actor_username":"student046@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:28:50.088262+00	
00000000-0000-0000-0000-000000000000	bded6626-5e77-4679-a5f9-5dbaddc2e112	{"action":"login","actor_id":"a6beb2c1-97e9-4b89-87f8-c6ce608ee596","actor_username":"student046@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:28:50.092371+00	
00000000-0000-0000-0000-000000000000	4a063ed9-732d-4dfe-bcbb-1e0b614709be	{"action":"user_signedup","actor_id":"915bdb50-deb0-49b7-8c7a-e17268258e68","actor_username":"student047@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:28:51.325936+00	
00000000-0000-0000-0000-000000000000	381139ef-c0dd-469a-9739-ddb0ed6f1f08	{"action":"login","actor_id":"915bdb50-deb0-49b7-8c7a-e17268258e68","actor_username":"student047@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:28:51.329468+00	
00000000-0000-0000-0000-000000000000	731b780f-d29a-4d37-91d0-bd9a701ae0b9	{"action":"user_signedup","actor_id":"f2a4c1ed-57db-44a8-b062-4ce8ae9e1b98","actor_username":"student048@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:28:52.617467+00	
00000000-0000-0000-0000-000000000000	32ed3bbd-a864-464a-83d7-accfd234d7b1	{"action":"login","actor_id":"f2a4c1ed-57db-44a8-b062-4ce8ae9e1b98","actor_username":"student048@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:28:52.620539+00	
00000000-0000-0000-0000-000000000000	72500c0e-1dd4-4a00-a27c-1ea4486cf319	{"action":"user_signedup","actor_id":"e337a4dc-1832-4a9d-85f4-1d30683eb964","actor_username":"student049@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:28:53.913917+00	
00000000-0000-0000-0000-000000000000	ef8e7f7c-ade8-4eec-a06c-24073060f5be	{"action":"login","actor_id":"e337a4dc-1832-4a9d-85f4-1d30683eb964","actor_username":"student049@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:28:53.916995+00	
00000000-0000-0000-0000-000000000000	c8f4578a-bb10-48a9-b337-ad3e5648a086	{"action":"user_signedup","actor_id":"56371e1b-e464-4d3d-90d3-3f025c40f398","actor_username":"student050@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:28:55.214879+00	
00000000-0000-0000-0000-000000000000	a55ac8de-cb9d-4ac5-b021-c58900d98987	{"action":"login","actor_id":"56371e1b-e464-4d3d-90d3-3f025c40f398","actor_username":"student050@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:28:55.218114+00	
00000000-0000-0000-0000-000000000000	00e7cf50-c1d3-4d31-9603-47fd6364c6d6	{"action":"user_signedup","actor_id":"cc7c1dc4-ff0b-499f-a39f-ca58a1e2cfd1","actor_username":"student051@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:28:56.502205+00	
00000000-0000-0000-0000-000000000000	ce45dc6c-1e60-4f4b-928c-4d07de81b9b3	{"action":"login","actor_id":"cc7c1dc4-ff0b-499f-a39f-ca58a1e2cfd1","actor_username":"student051@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:28:56.506655+00	
00000000-0000-0000-0000-000000000000	cee10680-7e5b-4b38-832d-415d2a1ae548	{"action":"user_signedup","actor_id":"4d01ad91-ce75-49ce-8f20-e99e68343a4d","actor_username":"student052@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:28:57.790633+00	
00000000-0000-0000-0000-000000000000	d551ca89-d344-4a0c-9605-04863799b2e3	{"action":"login","actor_id":"4d01ad91-ce75-49ce-8f20-e99e68343a4d","actor_username":"student052@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:28:57.793789+00	
00000000-0000-0000-0000-000000000000	ea2e7848-7162-4ae8-8723-a523f040714a	{"action":"user_signedup","actor_id":"759b543d-2173-4901-803d-dd210dbf41db","actor_username":"student053@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:28:59.138288+00	
00000000-0000-0000-0000-000000000000	07bceffb-c117-4a30-bf65-42e2257c388b	{"action":"login","actor_id":"759b543d-2173-4901-803d-dd210dbf41db","actor_username":"student053@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:28:59.141343+00	
00000000-0000-0000-0000-000000000000	b100a895-ffc4-4a63-b35c-9bbdc6b64822	{"action":"user_signedup","actor_id":"fe1078bc-e494-4dbe-b8b9-5b289e505666","actor_username":"student054@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:00.454883+00	
00000000-0000-0000-0000-000000000000	ee5d1a49-f288-4e54-9933-e51df6cb5136	{"action":"login","actor_id":"fe1078bc-e494-4dbe-b8b9-5b289e505666","actor_username":"student054@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:00.459154+00	
00000000-0000-0000-0000-000000000000	ede89668-0119-443a-b86e-85503795e347	{"action":"user_signedup","actor_id":"c98b5d43-3b01-458d-a702-54d0924f8c98","actor_username":"student055@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:01.705505+00	
00000000-0000-0000-0000-000000000000	de471d31-b405-4753-b844-d59a47cda121	{"action":"login","actor_id":"c98b5d43-3b01-458d-a702-54d0924f8c98","actor_username":"student055@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:01.709376+00	
00000000-0000-0000-0000-000000000000	9fcbd8a7-db34-49a2-90fa-71d75bf1e538	{"action":"user_signedup","actor_id":"03b6eecb-379b-4083-b4a5-32583ab0fda1","actor_username":"student056@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:02.967363+00	
00000000-0000-0000-0000-000000000000	9185d549-832f-4c60-966d-f3e555a53028	{"action":"login","actor_id":"03b6eecb-379b-4083-b4a5-32583ab0fda1","actor_username":"student056@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:02.970562+00	
00000000-0000-0000-0000-000000000000	06289ce0-d105-4b53-98fa-81e515cb827e	{"action":"user_signedup","actor_id":"bf1356fc-2359-499d-a8fa-3cf08a07254e","actor_username":"student057@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:04.255177+00	
00000000-0000-0000-0000-000000000000	064f9f21-5872-42be-9ed0-ff5f694f8c8d	{"action":"login","actor_id":"bf1356fc-2359-499d-a8fa-3cf08a07254e","actor_username":"student057@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:04.258238+00	
00000000-0000-0000-0000-000000000000	5ecb0c5a-0eac-420c-92ee-2702b28b8d80	{"action":"user_signedup","actor_id":"cd234ac4-69fa-4a9f-8c5a-7544555a229f","actor_username":"student058@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:05.560366+00	
00000000-0000-0000-0000-000000000000	8d2d12c2-5669-42c2-80a5-2aa74deb75e7	{"action":"login","actor_id":"cd234ac4-69fa-4a9f-8c5a-7544555a229f","actor_username":"student058@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:05.563331+00	
00000000-0000-0000-0000-000000000000	8ebc3fbf-a922-4380-b4df-6cf485f945ed	{"action":"user_signedup","actor_id":"55bbe185-cda0-49e6-8f8a-cace1ba1129a","actor_username":"student059@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:06.834993+00	
00000000-0000-0000-0000-000000000000	2acee9b4-a1ce-46e8-80c4-f688f81212d7	{"action":"login","actor_id":"55bbe185-cda0-49e6-8f8a-cace1ba1129a","actor_username":"student059@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:06.838131+00	
00000000-0000-0000-0000-000000000000	300ade2f-9ca1-4143-b105-f78ecbc94cd3	{"action":"user_signedup","actor_id":"5f8ff2f1-18d7-4627-b4f2-d42fbe9f132a","actor_username":"student060@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:08.142044+00	
00000000-0000-0000-0000-000000000000	d0346ceb-b476-48b3-81c9-b94b2e014298	{"action":"login","actor_id":"5f8ff2f1-18d7-4627-b4f2-d42fbe9f132a","actor_username":"student060@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:08.145745+00	
00000000-0000-0000-0000-000000000000	a93f645e-a112-43f5-87e5-1284d05b8d8d	{"action":"user_signedup","actor_id":"34de1333-884a-4bb8-bfe8-9f618568973c","actor_username":"student061@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:09.396646+00	
00000000-0000-0000-0000-000000000000	f78de367-41ef-421c-bedb-0f71a6093bdb	{"action":"login","actor_id":"34de1333-884a-4bb8-bfe8-9f618568973c","actor_username":"student061@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:09.399509+00	
00000000-0000-0000-0000-000000000000	2ebcd894-b9f2-430a-b4a1-ad6f3d40fe93	{"action":"user_signedup","actor_id":"496f4ad0-249e-41e1-857f-2cd6ae7fa1ef","actor_username":"student062@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:10.703769+00	
00000000-0000-0000-0000-000000000000	f53bd16f-5124-43d3-aa2d-1d90b7dd02c2	{"action":"login","actor_id":"496f4ad0-249e-41e1-857f-2cd6ae7fa1ef","actor_username":"student062@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:10.706728+00	
00000000-0000-0000-0000-000000000000	5f1e14d1-4446-4543-a6d5-3062353b560b	{"action":"user_signedup","actor_id":"4c2a2cec-2745-4073-85f9-04ad472b017d","actor_username":"student063@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:12.019103+00	
00000000-0000-0000-0000-000000000000	b2385dc3-370f-44f4-984e-2fc094e85efd	{"action":"login","actor_id":"4c2a2cec-2745-4073-85f9-04ad472b017d","actor_username":"student063@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:12.022084+00	
00000000-0000-0000-0000-000000000000	bd173d9a-e709-4831-abf0-b5b43719605b	{"action":"user_signedup","actor_id":"ad781a50-10b1-40ce-87a0-e22f98502cf7","actor_username":"student064@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:13.330763+00	
00000000-0000-0000-0000-000000000000	64230182-9919-4867-a9f7-629358a12d27	{"action":"login","actor_id":"ad781a50-10b1-40ce-87a0-e22f98502cf7","actor_username":"student064@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:13.335343+00	
00000000-0000-0000-0000-000000000000	041edd74-226c-44cd-ba55-d78fa8b60e50	{"action":"user_signedup","actor_id":"f234be03-5a87-4dc5-bb74-280676f90bbb","actor_username":"student065@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:14.627372+00	
00000000-0000-0000-0000-000000000000	f4dcb1a2-4b37-4e6d-aea3-5049127c5414	{"action":"login","actor_id":"f234be03-5a87-4dc5-bb74-280676f90bbb","actor_username":"student065@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:14.630496+00	
00000000-0000-0000-0000-000000000000	12eb7f39-29ad-4a61-815f-8a5fb7caece1	{"action":"user_signedup","actor_id":"920244f9-7510-4aba-a7f8-42819a4f56e1","actor_username":"student066@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:17.103555+00	
00000000-0000-0000-0000-000000000000	d31dc22e-afe7-4876-84f7-6bfacea63c8f	{"action":"login","actor_id":"920244f9-7510-4aba-a7f8-42819a4f56e1","actor_username":"student066@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:17.107405+00	
00000000-0000-0000-0000-000000000000	98324c9e-aaab-4872-8c75-fa677b4f9253	{"action":"user_signedup","actor_id":"490830f3-23c6-4e39-9850-0257a84ec7ad","actor_username":"student067@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:18.378045+00	
00000000-0000-0000-0000-000000000000	3915e687-8b01-4afa-997e-eb855a8e22a3	{"action":"login","actor_id":"490830f3-23c6-4e39-9850-0257a84ec7ad","actor_username":"student067@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:18.381179+00	
00000000-0000-0000-0000-000000000000	35632979-4b6d-46dd-a081-e3b236097c62	{"action":"user_signedup","actor_id":"3615deed-9a1e-490a-b344-b664262f5cc4","actor_username":"student068@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:19.688367+00	
00000000-0000-0000-0000-000000000000	9ed66710-bb63-4de2-b91d-5c99a46a3671	{"action":"login","actor_id":"3615deed-9a1e-490a-b344-b664262f5cc4","actor_username":"student068@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:19.691695+00	
00000000-0000-0000-0000-000000000000	f8b1ac07-b851-4045-8cbf-4f9dd9e8c24e	{"action":"user_signedup","actor_id":"19a34652-2e3a-4551-bf66-10c32fefdcb9","actor_username":"student069@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:21.612131+00	
00000000-0000-0000-0000-000000000000	8eadf0a3-a49c-4d80-b47f-79a566f22292	{"action":"login","actor_id":"19a34652-2e3a-4551-bf66-10c32fefdcb9","actor_username":"student069@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:21.615057+00	
00000000-0000-0000-0000-000000000000	fcadd0dd-e679-4cac-8047-df0c0546b8c8	{"action":"user_signedup","actor_id":"e9a10fb2-e0b7-4115-ab40-d9002738486a","actor_username":"student070@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:23.187538+00	
00000000-0000-0000-0000-000000000000	6c302d06-a5e8-47c7-9136-bb7d6a11591d	{"action":"login","actor_id":"e9a10fb2-e0b7-4115-ab40-d9002738486a","actor_username":"student070@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:23.190704+00	
00000000-0000-0000-0000-000000000000	f3e14f80-a47b-411f-9028-555c31af039e	{"action":"user_signedup","actor_id":"23c1aeb2-602e-4076-9d13-4615c742f916","actor_username":"student071@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:24.909766+00	
00000000-0000-0000-0000-000000000000	0271bedc-76eb-4805-a84b-2c489698cee5	{"action":"login","actor_id":"23c1aeb2-602e-4076-9d13-4615c742f916","actor_username":"student071@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:24.912788+00	
00000000-0000-0000-0000-000000000000	2c0f1d02-10d2-4e8c-8d26-5d59b10e8873	{"action":"user_signedup","actor_id":"42055b75-3473-48f0-9f12-a4abba8714ea","actor_username":"student072@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:26.176659+00	
00000000-0000-0000-0000-000000000000	84cfa2d0-711b-4c6b-b771-f8cacd07d0c1	{"action":"login","actor_id":"42055b75-3473-48f0-9f12-a4abba8714ea","actor_username":"student072@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:26.179782+00	
00000000-0000-0000-0000-000000000000	778e1c64-82e6-401e-ae0e-edd329163e21	{"action":"user_signedup","actor_id":"07fd0355-c715-45f2-98ae-90b292d77d41","actor_username":"student073@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:27.488716+00	
00000000-0000-0000-0000-000000000000	c0853e4f-ffab-47ab-8bfd-f080df8427da	{"action":"login","actor_id":"07fd0355-c715-45f2-98ae-90b292d77d41","actor_username":"student073@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:27.491827+00	
00000000-0000-0000-0000-000000000000	9f957fae-4903-46bb-a051-ceecd071141e	{"action":"user_signedup","actor_id":"91db900d-0bef-4f07-90e5-bac9f72e08aa","actor_username":"student074@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:28.811601+00	
00000000-0000-0000-0000-000000000000	d802039c-f8d5-4911-a27d-cb2c869422db	{"action":"login","actor_id":"91db900d-0bef-4f07-90e5-bac9f72e08aa","actor_username":"student074@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:28.814613+00	
00000000-0000-0000-0000-000000000000	f4df5068-eff7-4803-9a0d-60cb88f2b992	{"action":"user_signedup","actor_id":"55dac851-ecfc-4b93-9da7-1efe6be19fa0","actor_username":"student075@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:30.107205+00	
00000000-0000-0000-0000-000000000000	09dfd5f5-95ee-45f3-8c1b-4590c96c3dcc	{"action":"login","actor_id":"55dac851-ecfc-4b93-9da7-1efe6be19fa0","actor_username":"student075@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:30.110383+00	
00000000-0000-0000-0000-000000000000	a623b735-55b0-4d83-b75d-7d8ca8b8c69f	{"action":"user_signedup","actor_id":"07a74c11-bbf3-41e3-8753-c282132a0942","actor_username":"student076@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:31.371657+00	
00000000-0000-0000-0000-000000000000	6fcdcdac-4ae6-47a9-b7d9-eb24b3a029f7	{"action":"login","actor_id":"07a74c11-bbf3-41e3-8753-c282132a0942","actor_username":"student076@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:31.374843+00	
00000000-0000-0000-0000-000000000000	292c701b-901b-45eb-bac8-47c8fe21e80f	{"action":"user_signedup","actor_id":"986cfe33-942a-4052-9d5f-585ba1c58e2a","actor_username":"student077@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:32.671347+00	
00000000-0000-0000-0000-000000000000	3bdb89bb-4d16-4570-80ea-ee8cdfe9d4c3	{"action":"login","actor_id":"986cfe33-942a-4052-9d5f-585ba1c58e2a","actor_username":"student077@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:32.675807+00	
00000000-0000-0000-0000-000000000000	76f01c3e-d7c1-4d52-a4b2-853b71d61c79	{"action":"user_signedup","actor_id":"1e85df90-4c60-426a-8599-20866cd4179f","actor_username":"student078@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:34.530109+00	
00000000-0000-0000-0000-000000000000	ed2293a4-ecca-4e34-a826-44796661de08	{"action":"login","actor_id":"1e85df90-4c60-426a-8599-20866cd4179f","actor_username":"student078@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:34.533094+00	
00000000-0000-0000-0000-000000000000	a5262595-6930-4034-8282-09db2cc27abb	{"action":"user_signedup","actor_id":"124afc78-d787-490e-ac3b-e4c99628cb40","actor_username":"student079@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:36.474054+00	
00000000-0000-0000-0000-000000000000	91649b03-79ae-4dd3-ba06-a8cf8e040e6d	{"action":"login","actor_id":"124afc78-d787-490e-ac3b-e4c99628cb40","actor_username":"student079@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:36.47691+00	
00000000-0000-0000-0000-000000000000	5853ef2f-ad23-41d0-bf2b-045c40e86e3f	{"action":"user_signedup","actor_id":"40329907-7532-4f20-a086-331ca748a856","actor_username":"student080@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:38.603669+00	
00000000-0000-0000-0000-000000000000	a052e411-ab0f-48b6-9249-5c7dcadf65e0	{"action":"login","actor_id":"40329907-7532-4f20-a086-331ca748a856","actor_username":"student080@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:38.606986+00	
00000000-0000-0000-0000-000000000000	c75aec7c-0006-4132-ac17-381caadfcec2	{"action":"user_signedup","actor_id":"cc83167d-aa1f-4879-a15c-41dcb608a579","actor_username":"student081@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:39.949921+00	
00000000-0000-0000-0000-000000000000	1ac67757-0531-4606-9883-3ff9fc4fba4b	{"action":"login","actor_id":"cc83167d-aa1f-4879-a15c-41dcb608a579","actor_username":"student081@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:39.953008+00	
00000000-0000-0000-0000-000000000000	e6ab0d73-25d1-4ff6-a063-4914e349157b	{"action":"user_signedup","actor_id":"5d1addd3-2819-46ba-a2e2-a556e7ab56d5","actor_username":"student082@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:41.236383+00	
00000000-0000-0000-0000-000000000000	6fee7acb-a9a6-485d-9961-79ef159a199c	{"action":"login","actor_id":"5d1addd3-2819-46ba-a2e2-a556e7ab56d5","actor_username":"student082@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:41.239496+00	
00000000-0000-0000-0000-000000000000	0cecc779-c2ed-41fc-b345-ffb093d1ed35	{"action":"user_signedup","actor_id":"f0832eb1-0639-4593-a7f4-83c80588ea59","actor_username":"student083@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:42.521699+00	
00000000-0000-0000-0000-000000000000	f82a36c4-6892-45bd-8393-b3994c6ccc7c	{"action":"login","actor_id":"f0832eb1-0639-4593-a7f4-83c80588ea59","actor_username":"student083@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:42.524704+00	
00000000-0000-0000-0000-000000000000	a6a3443b-7183-4f6d-9a3c-693e167f127c	{"action":"user_signedup","actor_id":"84306c4b-ca98-4eca-824b-98ef34f9235c","actor_username":"student084@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:43.841248+00	
00000000-0000-0000-0000-000000000000	36f123cb-590d-4670-bbcb-f3da06f0b06b	{"action":"login","actor_id":"84306c4b-ca98-4eca-824b-98ef34f9235c","actor_username":"student084@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:43.845632+00	
00000000-0000-0000-0000-000000000000	ed6e004c-824d-485f-93fd-a103209ddb99	{"action":"user_signedup","actor_id":"32a145f7-f290-48da-a885-cac6acb8f18a","actor_username":"student085@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:45.294841+00	
00000000-0000-0000-0000-000000000000	96621a26-d9de-4e49-9fbd-2ce60da5e326	{"action":"login","actor_id":"32a145f7-f290-48da-a885-cac6acb8f18a","actor_username":"student085@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:45.298892+00	
00000000-0000-0000-0000-000000000000	c98ad557-ea97-498d-9f1f-3f08ae0fe04d	{"action":"user_signedup","actor_id":"8d6f5bc2-d90a-41f6-bb35-0a3eb5119495","actor_username":"student086@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:47.093931+00	
00000000-0000-0000-0000-000000000000	5d6b94b9-9cce-45d6-9e4c-29ae9a5cb8b5	{"action":"login","actor_id":"8d6f5bc2-d90a-41f6-bb35-0a3eb5119495","actor_username":"student086@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:47.096583+00	
00000000-0000-0000-0000-000000000000	ec08e863-ed5d-4d4a-9b24-665a6e9b6c5f	{"action":"user_signedup","actor_id":"fa01eacd-c7bf-4039-b3b7-b61d9b2311d8","actor_username":"student087@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:48.396819+00	
00000000-0000-0000-0000-000000000000	4527f7d2-b4ec-4987-98cf-32381fc23421	{"action":"login","actor_id":"fa01eacd-c7bf-4039-b3b7-b61d9b2311d8","actor_username":"student087@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:48.399874+00	
00000000-0000-0000-0000-000000000000	408b7d96-89c4-4b24-8038-ac616b406ada	{"action":"user_signedup","actor_id":"9ca18835-0971-4842-be97-08186fc34251","actor_username":"student088@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:49.663543+00	
00000000-0000-0000-0000-000000000000	9a8ef637-6b63-47be-8806-42b5ca9d266e	{"action":"login","actor_id":"9ca18835-0971-4842-be97-08186fc34251","actor_username":"student088@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:49.666699+00	
00000000-0000-0000-0000-000000000000	47a0195f-75b4-4397-90a6-add72988d068	{"action":"user_signedup","actor_id":"4f53ba4b-2d7f-4da3-a6a8-8eede3f7c060","actor_username":"student089@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:50.986916+00	
00000000-0000-0000-0000-000000000000	82dded60-00c4-4100-9ae9-ca690ff91981	{"action":"login","actor_id":"4f53ba4b-2d7f-4da3-a6a8-8eede3f7c060","actor_username":"student089@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:50.990017+00	
00000000-0000-0000-0000-000000000000	4e4a413c-1c55-4fb9-a40c-2cb71f77997c	{"action":"user_signedup","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:52.286623+00	
00000000-0000-0000-0000-000000000000	1a655fa0-9479-4e36-9cc9-dd7ef16482f9	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:52.290669+00	
00000000-0000-0000-0000-000000000000	8399763c-e80a-4fce-821f-ff5dcc1e19e7	{"action":"user_signedup","actor_id":"0efe3c02-f278-4ec1-9038-fad1588f1493","actor_username":"student091@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:53.5545+00	
00000000-0000-0000-0000-000000000000	1056d390-7f01-42fa-9859-d579381ae574	{"action":"login","actor_id":"0efe3c02-f278-4ec1-9038-fad1588f1493","actor_username":"student091@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:53.557554+00	
00000000-0000-0000-0000-000000000000	0e60bb75-37f8-413e-97af-36fa5806c177	{"action":"user_signedup","actor_id":"5459b24c-84b0-45ad-8c2c-2af37595df06","actor_username":"student092@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:54.821436+00	
00000000-0000-0000-0000-000000000000	5c1272bf-4932-40f7-b4d3-69bb47add53c	{"action":"login","actor_id":"5459b24c-84b0-45ad-8c2c-2af37595df06","actor_username":"student092@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:54.824735+00	
00000000-0000-0000-0000-000000000000	ac62b321-2c76-4963-9cf6-dd34fc06d003	{"action":"user_signedup","actor_id":"2a043cb7-c39f-4d3b-86e6-fd939f593ff6","actor_username":"student093@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:56.138378+00	
00000000-0000-0000-0000-000000000000	318711d6-2723-4eeb-a955-e10449bbce24	{"action":"login","actor_id":"2a043cb7-c39f-4d3b-86e6-fd939f593ff6","actor_username":"student093@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:56.14165+00	
00000000-0000-0000-0000-000000000000	6634d412-48ec-4e10-a53c-2dcfe8dcdda6	{"action":"user_signedup","actor_id":"079446fa-9e6c-4fd1-90ff-4432ff8bfc15","actor_username":"student094@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:57.419964+00	
00000000-0000-0000-0000-000000000000	3ff2a8e3-e1a4-4c1f-a17a-9ee42f8d1a34	{"action":"login","actor_id":"079446fa-9e6c-4fd1-90ff-4432ff8bfc15","actor_username":"student094@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:57.422935+00	
00000000-0000-0000-0000-000000000000	50be8317-2d8a-4a0d-8790-f2dd5581a6ec	{"action":"user_signedup","actor_id":"78ebb959-0002-4e3a-8a73-62477951e421","actor_username":"student095@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:29:58.685385+00	
00000000-0000-0000-0000-000000000000	f64b9d91-5fd5-437a-b5ba-8f122bf2527d	{"action":"login","actor_id":"78ebb959-0002-4e3a-8a73-62477951e421","actor_username":"student095@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:29:58.688403+00	
00000000-0000-0000-0000-000000000000	84e75f3a-f3f3-45fe-b013-60d30b37ceea	{"action":"user_signedup","actor_id":"ffcbebef-bd6a-490a-a024-6ea73c71ac44","actor_username":"student096@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:30:00.004563+00	
00000000-0000-0000-0000-000000000000	6ecf2c1e-c2c4-44ff-8cda-eb153d301774	{"action":"login","actor_id":"ffcbebef-bd6a-490a-a024-6ea73c71ac44","actor_username":"student096@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:30:00.007642+00	
00000000-0000-0000-0000-000000000000	378f5346-859f-4154-9760-74ec819d55c4	{"action":"user_repeated_signup","actor_id":"945033ac-abb6-426c-88c6-926ffa615561","actor_username":"student097@example.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}	2025-07-06 23:30:01.1971+00	
00000000-0000-0000-0000-000000000000	2ec2cdf4-a8e1-47f1-8213-a3480f60be92	{"action":"user_signedup","actor_id":"2ad27174-9dc2-4dd0-9b01-73d0a0c334e1","actor_username":"student098@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:30:02.542314+00	
00000000-0000-0000-0000-000000000000	3c2ccd52-90a7-464c-9313-b64052acd52b	{"action":"login","actor_id":"2ad27174-9dc2-4dd0-9b01-73d0a0c334e1","actor_username":"student098@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:30:02.546429+00	
00000000-0000-0000-0000-000000000000	f2650c59-e979-439f-aa33-85733665352f	{"action":"user_signedup","actor_id":"cfa11a9a-0de0-4e32-99a0-5df45d2f56dd","actor_username":"student099@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:30:03.832422+00	
00000000-0000-0000-0000-000000000000	433b126a-ba36-45b8-bf79-c498822efa28	{"action":"login","actor_id":"cfa11a9a-0de0-4e32-99a0-5df45d2f56dd","actor_username":"student099@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:30:03.835295+00	
00000000-0000-0000-0000-000000000000	ef04d22e-8342-4257-bb69-8e42fb3c37cc	{"action":"user_signedup","actor_id":"fe033a35-e2e5-405c-8d74-f5c247307f0b","actor_username":"student100@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:30:05.169515+00	
00000000-0000-0000-0000-000000000000	3a424423-175a-48f9-b18f-9c28cd9fc5bc	{"action":"login","actor_id":"fe033a35-e2e5-405c-8d74-f5c247307f0b","actor_username":"student100@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:30:05.172648+00	
00000000-0000-0000-0000-000000000000	d02d8356-ff7c-4ff9-bba9-5b15a6e58aba	{"action":"user_signedup","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:30:06.472605+00	
00000000-0000-0000-0000-000000000000	9b48e1df-8d2a-409e-b605-f6b39f9f3878	{"action":"login","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:30:06.475677+00	
00000000-0000-0000-0000-000000000000	22c3b3f2-5bce-4c50-b905-605be15463ca	{"action":"user_signedup","actor_id":"079ca79f-f4a5-494c-ab69-6eb5d9309140","actor_username":"staff002@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:30:07.759663+00	
00000000-0000-0000-0000-000000000000	c02aeb9e-3edc-410a-9cd1-dda1ca2cc552	{"action":"login","actor_id":"079ca79f-f4a5-494c-ab69-6eb5d9309140","actor_username":"staff002@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:30:07.762647+00	
00000000-0000-0000-0000-000000000000	fd26e661-9896-4cf4-899e-f67ac196fe0b	{"action":"user_signedup","actor_id":"406386d9-94e4-4c78-83fd-604ffbb2dd5a","actor_username":"staff003@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:30:09.335484+00	
00000000-0000-0000-0000-000000000000	cf098812-a677-40d0-b8d6-11cf007bf40d	{"action":"login","actor_id":"406386d9-94e4-4c78-83fd-604ffbb2dd5a","actor_username":"staff003@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:30:09.338574+00	
00000000-0000-0000-0000-000000000000	0aaf8032-e854-4800-ad24-1a044efce10a	{"action":"user_signedup","actor_id":"4ef422bd-aba3-4280-a28f-d0ac7cc6c208","actor_username":"staff004@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:30:10.784511+00	
00000000-0000-0000-0000-000000000000	d7924c90-d7ae-40a0-95a6-de4b261936b7	{"action":"login","actor_id":"4ef422bd-aba3-4280-a28f-d0ac7cc6c208","actor_username":"staff004@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:30:10.787424+00	
00000000-0000-0000-0000-000000000000	9b8ec9f9-2b19-4805-8d7b-327af50a3c39	{"action":"user_signedup","actor_id":"96e1680c-63d7-4902-afd1-98b74cf34645","actor_username":"staff005@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:30:12.086491+00	
00000000-0000-0000-0000-000000000000	b18f6ad2-e1d2-4f26-a0ed-4785adebb1b3	{"action":"login","actor_id":"96e1680c-63d7-4902-afd1-98b74cf34645","actor_username":"staff005@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:30:12.089825+00	
00000000-0000-0000-0000-000000000000	a019b648-83df-4106-ba9e-b823790bc6a7	{"action":"user_signedup","actor_id":"8ed041f9-82b9-4c46-b620-2d74d82273d6","actor_username":"staff006@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:30:15.365446+00	
00000000-0000-0000-0000-000000000000	852a5f73-ff0c-472e-bfb2-137c1d01c777	{"action":"login","actor_id":"8ed041f9-82b9-4c46-b620-2d74d82273d6","actor_username":"staff006@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:30:15.36855+00	
00000000-0000-0000-0000-000000000000	bb25a52e-3405-4c56-a68b-115731797de2	{"action":"user_signedup","actor_id":"6d505cca-71c5-4b89-8c62-40daee2fe79c","actor_username":"staff007@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:30:16.912023+00	
00000000-0000-0000-0000-000000000000	e53a52b4-45f6-4644-ae6c-ba175a18bf20	{"action":"login","actor_id":"6d505cca-71c5-4b89-8c62-40daee2fe79c","actor_username":"staff007@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:30:16.914814+00	
00000000-0000-0000-0000-000000000000	6f359a85-52fb-4ba0-a795-ded3e45cdb05	{"action":"user_signedup","actor_id":"49817fdc-6d6c-4a5d-9e45-5498a27e8555","actor_username":"staff008@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:30:18.174955+00	
00000000-0000-0000-0000-000000000000	12667449-69c7-4e04-83c3-66c5863ebfad	{"action":"login","actor_id":"49817fdc-6d6c-4a5d-9e45-5498a27e8555","actor_username":"staff008@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:30:18.177863+00	
00000000-0000-0000-0000-000000000000	e0aa0c9a-77fd-47d7-a495-417ee67e7e16	{"action":"user_signedup","actor_id":"91f0d641-d8b2-47ef-b164-198f0972d313","actor_username":"staff009@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:30:19.473903+00	
00000000-0000-0000-0000-000000000000	ed8c5d9b-9a85-4ede-86fd-68f0cf0d0df4	{"action":"login","actor_id":"91f0d641-d8b2-47ef-b164-198f0972d313","actor_username":"staff009@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:30:19.477042+00	
00000000-0000-0000-0000-000000000000	4f4a8847-8793-4210-bedb-8b5a6463149e	{"action":"user_signedup","actor_id":"e6b8ae92-b4f3-4717-9efc-d743df2bf28c","actor_username":"staff010@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:30:20.745227+00	
00000000-0000-0000-0000-000000000000	4ede5e4b-8b9e-4935-bf04-8ed5399a987b	{"action":"login","actor_id":"e6b8ae92-b4f3-4717-9efc-d743df2bf28c","actor_username":"staff010@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:30:20.748167+00	
00000000-0000-0000-0000-000000000000	ccd7bba4-8e41-4a05-ae19-940d98838acc	{"action":"user_signedup","actor_id":"a38f3ea2-7acd-48f4-a79f-a25eeaec2d94","actor_username":"staff011@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:30:22.887145+00	
00000000-0000-0000-0000-000000000000	6de766f4-0b26-49ad-a777-57a0ef931cda	{"action":"login","actor_id":"a38f3ea2-7acd-48f4-a79f-a25eeaec2d94","actor_username":"staff011@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:30:22.890339+00	
00000000-0000-0000-0000-000000000000	8e10cfe7-656a-43c6-ade0-d07ee81b87ef	{"action":"user_signedup","actor_id":"bc6a8258-631b-4b34-8e01-61e7e4ab7f2a","actor_username":"staff012@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:30:24.2224+00	
00000000-0000-0000-0000-000000000000	9b73c9df-ef65-46f1-93c6-87c3d5287fcc	{"action":"login","actor_id":"bc6a8258-631b-4b34-8e01-61e7e4ab7f2a","actor_username":"staff012@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:30:24.225457+00	
00000000-0000-0000-0000-000000000000	29ac0022-2f6d-4c99-bbeb-3b7bba308db1	{"action":"user_signedup","actor_id":"17566d57-1e67-435d-a236-20b0d74c6b0d","actor_username":"staff013@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:30:25.585763+00	
00000000-0000-0000-0000-000000000000	0e177e89-49a5-4107-b4a0-177be5b91b47	{"action":"login","actor_id":"17566d57-1e67-435d-a236-20b0d74c6b0d","actor_username":"staff013@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:30:25.588897+00	
00000000-0000-0000-0000-000000000000	10289e07-b193-4ce0-86a6-753f2342d2c2	{"action":"user_signedup","actor_id":"f05a5bde-deea-4c06-9398-07c9960aef2c","actor_username":"staff014@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:30:26.898666+00	
00000000-0000-0000-0000-000000000000	7b798c20-b358-4a62-9b6f-2c38a4634cde	{"action":"login","actor_id":"f05a5bde-deea-4c06-9398-07c9960aef2c","actor_username":"staff014@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:30:26.901775+00	
00000000-0000-0000-0000-000000000000	fe5846b6-d1f5-42f2-97f2-63ae91e5e06c	{"action":"user_signedup","actor_id":"07eb809c-ab0b-4235-b0d7-9d0726ae9340","actor_username":"staff015@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:30:28.172603+00	
00000000-0000-0000-0000-000000000000	f7b22542-8258-4c6f-ae4d-614646726141	{"action":"login","actor_id":"07eb809c-ab0b-4235-b0d7-9d0726ae9340","actor_username":"staff015@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:30:28.175536+00	
00000000-0000-0000-0000-000000000000	da11b5d7-a694-4801-a9af-d81420712317	{"action":"user_signedup","actor_id":"0e6980f9-2985-431c-b311-4e0538ee213a","actor_username":"staff016@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:30:29.477034+00	
00000000-0000-0000-0000-000000000000	965c138f-1c4d-4bb5-a2ac-a9b7a46b09cb	{"action":"login","actor_id":"0e6980f9-2985-431c-b311-4e0538ee213a","actor_username":"staff016@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:30:29.480026+00	
00000000-0000-0000-0000-000000000000	d425ef64-7360-4cdd-8c41-3f786a4920c0	{"action":"user_signedup","actor_id":"a17350fc-6190-4acf-ad2f-9b3539c545f4","actor_username":"staff017@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:30:30.748742+00	
00000000-0000-0000-0000-000000000000	cab9b40c-b273-426d-b5f8-bcd731a53354	{"action":"login","actor_id":"a17350fc-6190-4acf-ad2f-9b3539c545f4","actor_username":"staff017@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:30:30.751958+00	
00000000-0000-0000-0000-000000000000	b3bee553-bd6f-46ac-9cbf-a56930f3069d	{"action":"user_signedup","actor_id":"07dc5cce-f102-4237-810f-3f20640bc6d6","actor_username":"staff018@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:30:32.184075+00	
00000000-0000-0000-0000-000000000000	721b14ee-7b19-4902-9d9a-43a3e12fc112	{"action":"login","actor_id":"07dc5cce-f102-4237-810f-3f20640bc6d6","actor_username":"staff018@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:30:32.186987+00	
00000000-0000-0000-0000-000000000000	af9e2f7a-69b8-47e0-9182-4365a3203435	{"action":"user_signedup","actor_id":"141223a6-6603-49a9-8f61-7caa6f12cf59","actor_username":"staff019@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:30:33.507393+00	
00000000-0000-0000-0000-000000000000	f483454c-806a-4e7f-90d4-4b91163b3920	{"action":"login","actor_id":"141223a6-6603-49a9-8f61-7caa6f12cf59","actor_username":"staff019@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:30:33.510484+00	
00000000-0000-0000-0000-000000000000	fa75d2a2-0da0-4016-9300-ff244458f4be	{"action":"user_signedup","actor_id":"396ee654-66e0-4407-b4a5-f8757363c7ac","actor_username":"staff020@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:30:34.797281+00	
00000000-0000-0000-0000-000000000000	524ddb9b-2002-4e0d-8f1d-c5880b8f3db4	{"action":"login","actor_id":"396ee654-66e0-4407-b4a5-f8757363c7ac","actor_username":"staff020@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:30:34.800191+00	
00000000-0000-0000-0000-000000000000	917113d8-4897-46e0-83d4-16fab15f8767	{"action":"user_signedup","actor_id":"63b72a63-e5d9-45be-aa99-a7c26ef5d00e","actor_username":"staff021@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:30:36.110612+00	
00000000-0000-0000-0000-000000000000	dd499011-32ee-46e0-9511-01e140ba5cb2	{"action":"login","actor_id":"63b72a63-e5d9-45be-aa99-a7c26ef5d00e","actor_username":"staff021@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:30:36.113371+00	
00000000-0000-0000-0000-000000000000	b91f9557-7aac-4628-aeae-d6e2b566a01d	{"action":"user_signedup","actor_id":"7c99c941-ab16-4b77-b0cd-e240575ee019","actor_username":"staff022@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:30:37.389322+00	
00000000-0000-0000-0000-000000000000	7d91e1db-a6e9-4caf-8dc0-eeba815d183b	{"action":"login","actor_id":"7c99c941-ab16-4b77-b0cd-e240575ee019","actor_username":"staff022@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:30:37.392425+00	
00000000-0000-0000-0000-000000000000	4db997d0-136c-4fd0-9a5b-ecd5c52b6423	{"action":"user_signedup","actor_id":"5898d819-8063-4e9e-aabf-d510dea65708","actor_username":"staff023@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:30:38.664339+00	
00000000-0000-0000-0000-000000000000	a891c86e-8f69-4a33-9a94-9698fc33dee2	{"action":"login","actor_id":"5898d819-8063-4e9e-aabf-d510dea65708","actor_username":"staff023@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:30:38.667531+00	
00000000-0000-0000-0000-000000000000	9b455f09-2806-4fea-9469-bcb39e0aafec	{"action":"user_signedup","actor_id":"e7c03374-717f-4458-8f16-1d0931f87240","actor_username":"staff024@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:30:39.929232+00	
00000000-0000-0000-0000-000000000000	8a0b4905-5fe2-4467-97da-710756f62162	{"action":"login","actor_id":"e7c03374-717f-4458-8f16-1d0931f87240","actor_username":"staff024@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:30:39.932154+00	
00000000-0000-0000-0000-000000000000	c23bc231-aba2-41c2-abfc-8206fd7d3777	{"action":"user_signedup","actor_id":"0b08f0c8-3c0f-498a-b0f9-796a2e4d3a2a","actor_username":"staff025@example.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}	2025-07-06 23:30:41.250851+00	
00000000-0000-0000-0000-000000000000	a4511014-7a68-4f5d-bbe6-2c8e2386868d	{"action":"login","actor_id":"0b08f0c8-3c0f-498a-b0f9-796a2e4d3a2a","actor_username":"staff025@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:30:41.254336+00	
00000000-0000-0000-0000-000000000000	7836521e-955a-4d91-b2f3-999a1a115487	{"action":"login","actor_id":"1e85df90-4c60-426a-8599-20866cd4179f","actor_username":"student078@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:32:18.59416+00	
00000000-0000-0000-0000-000000000000	651389b6-4fdf-43f7-8b14-ca37c7452813	{"action":"login","actor_id":"0b08f0c8-3c0f-498a-b0f9-796a2e4d3a2a","actor_username":"staff025@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:33:50.524418+00	
00000000-0000-0000-0000-000000000000	9abfb8be-1170-44d9-884a-f890b28a1edc	{"action":"login","actor_id":"0b08f0c8-3c0f-498a-b0f9-796a2e4d3a2a","actor_username":"staff025@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-06 23:35:05.591908+00	
00000000-0000-0000-0000-000000000000	a34d7d60-368f-42a2-9a37-0a337a0f3662	{"action":"token_refreshed","actor_id":"1e85df90-4c60-426a-8599-20866cd4179f","actor_username":"student078@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-07 15:19:11.924927+00	
00000000-0000-0000-0000-000000000000	8c551d7d-715b-4994-8a63-9660bdd41210	{"action":"token_revoked","actor_id":"1e85df90-4c60-426a-8599-20866cd4179f","actor_username":"student078@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-07 15:19:11.93458+00	
00000000-0000-0000-0000-000000000000	b54176c7-aae2-42a1-9d03-955bf8c6518f	{"action":"token_refreshed","actor_id":"1e85df90-4c60-426a-8599-20866cd4179f","actor_username":"student078@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-08 11:53:50.260811+00	
00000000-0000-0000-0000-000000000000	77b95c05-83b6-486f-ba10-01d64d893e9e	{"action":"token_revoked","actor_id":"1e85df90-4c60-426a-8599-20866cd4179f","actor_username":"student078@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-08 11:53:50.269125+00	
00000000-0000-0000-0000-000000000000	82e6a115-3d55-491c-832d-d2feab49f02d	{"action":"login","actor_id":"359c592a-dd23-4db2-9135-bcdd5c066705","actor_username":"student003@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-08 19:45:02.737312+00	
00000000-0000-0000-0000-000000000000	8ff057d9-64d7-4d73-ad1f-7138ca7b9050	{"action":"login","actor_id":"359c592a-dd23-4db2-9135-bcdd5c066705","actor_username":"student003@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-08 19:49:06.332453+00	
00000000-0000-0000-0000-000000000000	d27ea146-e76a-44fa-a8d7-99ebaf68eaee	{"action":"login","actor_id":"359c592a-dd23-4db2-9135-bcdd5c066705","actor_username":"student003@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-08 19:49:08.551911+00	
00000000-0000-0000-0000-000000000000	abd9e04e-56e7-4182-a7c6-cc08b58c469c	{"action":"login","actor_id":"359c592a-dd23-4db2-9135-bcdd5c066705","actor_username":"student003@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-08 19:49:34.298756+00	
00000000-0000-0000-0000-000000000000	9dca13bb-2d07-4385-889f-1611293dd8b7	{"action":"login","actor_id":"359c592a-dd23-4db2-9135-bcdd5c066705","actor_username":"student003@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-08 19:49:43.226371+00	
00000000-0000-0000-0000-000000000000	c638bb57-af0c-4123-8cab-7d971597d3d6	{"action":"login","actor_id":"359c592a-dd23-4db2-9135-bcdd5c066705","actor_username":"student003@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-08 19:50:06.813394+00	
00000000-0000-0000-0000-000000000000	8a8875fe-7aa4-41a7-99ed-37efa357e567	{"action":"login","actor_id":"359c592a-dd23-4db2-9135-bcdd5c066705","actor_username":"student003@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-08 19:51:06.91571+00	
00000000-0000-0000-0000-000000000000	e117fa7e-278c-4a1a-b0ad-a2252196e9bb	{"action":"login","actor_id":"359c592a-dd23-4db2-9135-bcdd5c066705","actor_username":"student003@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-08 19:52:44.268258+00	
00000000-0000-0000-0000-000000000000	c77e874c-9fb4-4445-929c-2f1369b744e8	{"action":"login","actor_id":"359c592a-dd23-4db2-9135-bcdd5c066705","actor_username":"student003@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-08 19:53:05.780807+00	
00000000-0000-0000-0000-000000000000	65cc2374-5d25-4b9f-b462-6448bee0119b	{"action":"login","actor_id":"359c592a-dd23-4db2-9135-bcdd5c066705","actor_username":"student003@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-08 19:53:22.897697+00	
00000000-0000-0000-0000-000000000000	dcc88d38-2236-4887-83f9-127eaab29e4d	{"action":"login","actor_id":"359c592a-dd23-4db2-9135-bcdd5c066705","actor_username":"student003@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-08 19:55:03.136656+00	
00000000-0000-0000-0000-000000000000	41957ede-53b6-4e38-b5dd-a4205d17d42f	{"action":"login","actor_id":"359c592a-dd23-4db2-9135-bcdd5c066705","actor_username":"student003@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-08 19:56:07.517931+00	
00000000-0000-0000-0000-000000000000	709fa586-e5d0-4680-9c6a-74a53d7127e4	{"action":"login","actor_id":"359c592a-dd23-4db2-9135-bcdd5c066705","actor_username":"student003@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-08 20:53:18.063022+00	
00000000-0000-0000-0000-000000000000	bfbc4486-4bbf-40b4-92c6-de3a5374fcf6	{"action":"login","actor_id":"4ef422bd-aba3-4280-a28f-d0ac7cc6c208","actor_username":"staff004@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-08 21:44:26.285243+00	
00000000-0000-0000-0000-000000000000	8e66f1a3-759c-4766-8192-fddcba5d7ce5	{"action":"login","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-09 07:59:45.386053+00	
00000000-0000-0000-0000-000000000000	003b6f37-01af-47db-b247-75c9fbed4517	{"action":"login","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-09 07:59:45.385986+00	
00000000-0000-0000-0000-000000000000	ddbda689-b053-410c-9d6a-25bde083e6dd	{"action":"login","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-09 08:00:46.50578+00	
00000000-0000-0000-0000-000000000000	7bf5860b-c766-42c1-a639-ecd4eb48cb6a	{"action":"login","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-09 08:00:47.924099+00	
00000000-0000-0000-0000-000000000000	7ae1312c-fae6-4e2c-b832-12d3f0d86a20	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-09 08:03:02.719108+00	
00000000-0000-0000-0000-000000000000	afda9a68-fc5c-4d0d-9a11-5289646bb54f	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-09 08:10:05.689858+00	
00000000-0000-0000-0000-000000000000	4c5dd1e7-d1a6-45d4-8c87-b7ff78bce134	{"action":"login","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-09 08:11:04.334644+00	
00000000-0000-0000-0000-000000000000	93629409-9c73-4572-bb0e-183cd89068cd	{"action":"login","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-09 08:26:23.629929+00	
00000000-0000-0000-0000-000000000000	19c5ce81-6547-49c7-86e3-29472331e40b	{"action":"login","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-09 08:26:23.772505+00	
00000000-0000-0000-0000-000000000000	ee9d7f43-f06c-4579-b86e-5a2ada49077f	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-09 08:26:52.462125+00	
00000000-0000-0000-0000-000000000000	a173d610-db6c-4f19-ade2-d58e14034276	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-09 10:03:46.933118+00	
00000000-0000-0000-0000-000000000000	8c0572ff-8599-4d61-b17c-68677c88955f	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-09 10:03:47.758863+00	
00000000-0000-0000-0000-000000000000	2741271c-aaf5-4b7c-a421-293a33a5a5b2	{"action":"login","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-09 10:14:25.553442+00	
00000000-0000-0000-0000-000000000000	0da11a6a-dd06-4b43-9f83-7e8758f2a954	{"action":"token_refreshed","actor_id":"1e85df90-4c60-426a-8599-20866cd4179f","actor_username":"student078@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-09 12:10:40.093168+00	
00000000-0000-0000-0000-000000000000	70376128-e827-40d6-babb-98eb876bbb1f	{"action":"token_revoked","actor_id":"1e85df90-4c60-426a-8599-20866cd4179f","actor_username":"student078@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-09 12:10:40.095022+00	
00000000-0000-0000-0000-000000000000	e4df4fe7-a6af-4160-b4ed-e73e993e1922	{"action":"token_refreshed","actor_id":"1e85df90-4c60-426a-8599-20866cd4179f","actor_username":"student078@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-09 13:09:16.521234+00	
00000000-0000-0000-0000-000000000000	824352a4-8ebf-45a6-858e-0b1184db9cd0	{"action":"token_revoked","actor_id":"1e85df90-4c60-426a-8599-20866cd4179f","actor_username":"student078@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-09 13:09:16.531343+00	
00000000-0000-0000-0000-000000000000	b7d10cca-f69b-40b5-b5cc-2052783d9274	{"action":"login","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-09 13:47:09.536609+00	
00000000-0000-0000-0000-000000000000	f2b16c0c-0a5e-4e64-bb5e-fe3746ca699d	{"action":"login","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-09 13:47:11.222684+00	
00000000-0000-0000-0000-000000000000	b25ff12c-f1c1-4082-8146-9bc8f4fd4b03	{"action":"login","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-09 13:47:27.687112+00	
00000000-0000-0000-0000-000000000000	2903c012-f1dc-45b6-b699-bc2294a5228f	{"action":"login","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-09 13:47:27.728718+00	
00000000-0000-0000-0000-000000000000	119f2de5-e9ec-4c6e-a1d0-55d78075e1c1	{"action":"login","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-09 13:47:29.000276+00	
00000000-0000-0000-0000-000000000000	eacc3d62-3010-4628-b6af-9f12055c84af	{"action":"login","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-09 13:47:31.285917+00	
00000000-0000-0000-0000-000000000000	7be730fb-eec9-438e-aca3-00f2e38b3dc5	{"action":"login","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-09 15:12:30.419524+00	
00000000-0000-0000-0000-000000000000	0c6d0569-a59d-4c30-b278-a91b8988bfe5	{"action":"login","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-09 15:14:39.172648+00	
00000000-0000-0000-0000-000000000000	dcfd76e1-ecc6-40fa-9419-db1b91f8bc7c	{"action":"login","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-09 15:14:39.412456+00	
00000000-0000-0000-0000-000000000000	1335757c-fc6d-40db-8cc4-a66bbb92c401	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-09 15:14:46.835659+00	
00000000-0000-0000-0000-000000000000	0947d15b-e80c-4d7b-8325-49cdaa1d4e1c	{"action":"token_refreshed","actor_id":"1e85df90-4c60-426a-8599-20866cd4179f","actor_username":"student078@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-09 15:45:28.883213+00	
00000000-0000-0000-0000-000000000000	e96561af-4d1d-49bf-92f8-2df2fc9c3ade	{"action":"token_revoked","actor_id":"1e85df90-4c60-426a-8599-20866cd4179f","actor_username":"student078@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-09 15:45:28.886149+00	
00000000-0000-0000-0000-000000000000	2d8d585a-9db0-425c-bc3f-97f2404e612e	{"action":"token_refreshed","actor_id":"1e85df90-4c60-426a-8599-20866cd4179f","actor_username":"student078@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-09 17:24:29.195653+00	
00000000-0000-0000-0000-000000000000	d94bc248-fc5b-4723-ba58-fd86f1867d44	{"action":"token_revoked","actor_id":"1e85df90-4c60-426a-8599-20866cd4179f","actor_username":"student078@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-09 17:24:29.198077+00	
00000000-0000-0000-0000-000000000000	420063ba-4e4f-4a43-9d58-cf2c72bc0afa	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-09 17:27:54.50593+00	
00000000-0000-0000-0000-000000000000	47d3d311-28f0-42fe-af4f-78948882331f	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-09 17:27:55.798102+00	
00000000-0000-0000-0000-000000000000	2cf9d4ab-d5f2-400f-8b3c-e67a69f410fa	{"action":"login","actor_id":"1ce57413-49e4-4706-ace4-b2a3117a33c3","actor_username":"student005@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-09 17:28:44.557382+00	
00000000-0000-0000-0000-000000000000	e47fc826-1e2a-4c67-9d40-47f529285bc6	{"action":"login","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-09 17:29:58.683789+00	
00000000-0000-0000-0000-000000000000	fed90908-c29b-4e32-88aa-2fbdd054ac5e	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-10 09:06:53.215654+00	
00000000-0000-0000-0000-000000000000	ea008690-019e-41c4-a850-36a9f8772d34	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-10 09:06:54.041764+00	
00000000-0000-0000-0000-000000000000	fb5d3e88-2edc-44ed-9e47-9e1e460d341a	{"action":"login","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-10 09:26:40.546+00	
00000000-0000-0000-0000-000000000000	8eae8c51-bbbc-4069-a7bc-3acea495568f	{"action":"login","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-10 09:26:41.779785+00	
00000000-0000-0000-0000-000000000000	5d5df385-7aef-49fd-b361-3a82bf09a45e	{"action":"token_refreshed","actor_id":"1e85df90-4c60-426a-8599-20866cd4179f","actor_username":"student078@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-10 13:50:00.455321+00	
00000000-0000-0000-0000-000000000000	efca1bb0-8177-4760-892f-514515950178	{"action":"token_revoked","actor_id":"1e85df90-4c60-426a-8599-20866cd4179f","actor_username":"student078@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-10 13:50:00.460573+00	
00000000-0000-0000-0000-000000000000	6d546607-8f97-40b6-adc0-f65154b032a1	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-10 13:55:58.345506+00	
00000000-0000-0000-0000-000000000000	2c0f40b4-8476-45d4-ae02-eaf9c7dcf2f0	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-10 13:57:02.436132+00	
00000000-0000-0000-0000-000000000000	e801e994-a53d-4228-813f-f46befe172d8	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-10 13:57:03.527101+00	
00000000-0000-0000-0000-000000000000	52c9f448-4c56-4fab-881d-c6bfea087910	{"action":"token_refreshed","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-10 14:56:54.44642+00	
00000000-0000-0000-0000-000000000000	a102ea89-fb7d-4a51-bb14-d68c17856ad1	{"action":"token_revoked","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-10 14:56:54.448961+00	
00000000-0000-0000-0000-000000000000	3fbaa585-7bec-495c-befb-b894bddbf1cb	{"action":"token_refreshed","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-10 14:56:54.693433+00	
00000000-0000-0000-0000-000000000000	d95ffb7e-924f-4b0a-9c9e-d04f0e1758a8	{"action":"token_revoked","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-10 14:56:54.694082+00	
00000000-0000-0000-0000-000000000000	c1b915cd-20dc-45c0-a098-45a7e6d8ad8c	{"action":"token_refreshed","actor_id":"1e85df90-4c60-426a-8599-20866cd4179f","actor_username":"student078@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-10 15:52:49.492833+00	
00000000-0000-0000-0000-000000000000	83d80c92-14fc-4344-bdfe-8ee54e4c69df	{"action":"token_revoked","actor_id":"1e85df90-4c60-426a-8599-20866cd4179f","actor_username":"student078@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-10 15:52:49.495068+00	
00000000-0000-0000-0000-000000000000	57848dc8-81ba-463e-958a-5ed9da47c548	{"action":"token_refreshed","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-10 15:56:45.744507+00	
00000000-0000-0000-0000-000000000000	2ed86205-22fd-4bb0-a27f-90d640e313cf	{"action":"token_revoked","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-10 15:56:45.746693+00	
00000000-0000-0000-0000-000000000000	881bf57f-4dc5-4f42-8d24-2098d4e802e8	{"action":"token_refreshed","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-10 15:56:46.077397+00	
00000000-0000-0000-0000-000000000000	22f4ed27-b31f-4f3e-b814-c54c49329536	{"action":"token_revoked","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-10 15:56:46.07856+00	
00000000-0000-0000-0000-000000000000	91d89b67-b86d-4cc1-9556-b7966fcf6e89	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-10 16:10:43.607381+00	
00000000-0000-0000-0000-000000000000	d6f18463-cde2-414d-ab00-3ea66febb07f	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-10 16:10:45.501448+00	
00000000-0000-0000-0000-000000000000	938d27e7-f84d-4093-bb81-2aae35b7ebbb	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-10 16:16:21.147021+00	
00000000-0000-0000-0000-000000000000	2e693a61-55ab-47d9-8c21-229c70bea3be	{"action":"login","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-10 16:17:12.113715+00	
00000000-0000-0000-0000-000000000000	ccae843d-2d4d-48f9-8782-79367f0eb1f5	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-10 16:23:57.657365+00	
00000000-0000-0000-0000-000000000000	3fc99b5d-02db-489c-abef-b21602267109	{"action":"login","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-10 16:25:02.898842+00	
00000000-0000-0000-0000-000000000000	f3a59674-a728-4634-abbb-67058ff77758	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-10 16:39:38.180275+00	
00000000-0000-0000-0000-000000000000	2d1837bc-3395-4eec-b9a9-ef40d4c81a43	{"action":"login","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-10 16:40:41.845295+00	
00000000-0000-0000-0000-000000000000	9b0f6864-c568-41b7-8304-c24ac3a4e14c	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-10 16:42:46.57123+00	
00000000-0000-0000-0000-000000000000	62e1cdaf-c36a-40cd-9b02-1db756814552	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-10 16:44:48.260934+00	
00000000-0000-0000-0000-000000000000	4841b493-0e2a-4ba3-9199-28288a47be30	{"action":"token_refreshed","actor_id":"1e85df90-4c60-426a-8599-20866cd4179f","actor_username":"student078@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-10 17:19:41.258544+00	
00000000-0000-0000-0000-000000000000	3cbe27c6-1c3f-48ee-9a96-dabce4987b85	{"action":"token_revoked","actor_id":"1e85df90-4c60-426a-8599-20866cd4179f","actor_username":"student078@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-10 17:19:41.260739+00	
00000000-0000-0000-0000-000000000000	97bb86f3-a63b-41bb-a19f-d1eccdca88d0	{"action":"token_refreshed","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-10 17:44:39.122373+00	
00000000-0000-0000-0000-000000000000	963b2edc-80c3-4619-a67e-2f02e1bac6e7	{"action":"token_revoked","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-10 17:44:39.12566+00	
00000000-0000-0000-0000-000000000000	912fc447-39e2-4851-9462-b2602a9c497f	{"action":"token_refreshed","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-10 17:44:39.751358+00	
00000000-0000-0000-0000-000000000000	1bf9f040-0d6e-421b-8e0c-2c668b76727e	{"action":"token_revoked","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-10 17:44:39.751987+00	
00000000-0000-0000-0000-000000000000	c311a78e-5f6b-4caa-896e-bcf471157e35	{"action":"token_refreshed","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-10 18:44:29.865603+00	
00000000-0000-0000-0000-000000000000	eaeb83a1-d4ee-4ca4-8a30-453058d33eaf	{"action":"token_revoked","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-10 18:44:29.868478+00	
00000000-0000-0000-0000-000000000000	c2967392-ab73-420d-b574-710f6ab95a81	{"action":"token_refreshed","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-10 18:44:30.177945+00	
00000000-0000-0000-0000-000000000000	6ca478ec-c8e6-4ffd-a0bd-d2230f43bb87	{"action":"token_revoked","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-10 18:44:30.178551+00	
00000000-0000-0000-0000-000000000000	57d63435-59e4-4b81-9bdf-e59b984a9536	{"action":"login","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-17 16:46:55.870156+00	
00000000-0000-0000-0000-000000000000	9a35037c-9883-43e2-95a8-6885a1213d2d	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-17 16:47:44.277993+00	
00000000-0000-0000-0000-000000000000	6c4f9e0e-322c-4c4a-8629-3d3b1185a080	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-17 17:35:08.65588+00	
00000000-0000-0000-0000-000000000000	18ab5b21-97c3-4a12-9154-e5fcb9306659	{"action":"token_refreshed","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-17 20:19:42.513024+00	
00000000-0000-0000-0000-000000000000	5bdafbdf-7122-4e68-b787-f7827acb12d7	{"action":"token_revoked","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-17 20:19:42.513855+00	
00000000-0000-0000-0000-000000000000	8424bc74-2773-42c3-b87c-2f9b6cc7efe8	{"action":"token_refreshed","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-17 20:19:42.821775+00	
00000000-0000-0000-0000-000000000000	dee822e1-6ea9-4e78-b663-c5a1250a056d	{"action":"token_revoked","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-17 20:19:42.822322+00	
00000000-0000-0000-0000-000000000000	bf5a2d42-98eb-479d-aa58-eedfa05aa390	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-18 09:49:45.076901+00	
00000000-0000-0000-0000-000000000000	e7ec9f71-5814-4a9c-9e2e-003bd227d24a	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-18 10:47:32.513239+00	
00000000-0000-0000-0000-000000000000	01e3feb9-42c8-4d84-a005-55675a669e3d	{"action":"login","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-18 10:55:06.721813+00	
00000000-0000-0000-0000-000000000000	d5504fb8-08ff-4b4d-899a-1f1ebfa5d14b	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-19 04:42:42.485862+00	
00000000-0000-0000-0000-000000000000	f0bba2ac-7847-41a4-9b76-cfa51b03f6d3	{"action":"login","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-19 04:43:41.96761+00	
00000000-0000-0000-0000-000000000000	e6cf6427-89ee-4f3a-875f-3d2a3eaef953	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-19 04:44:39.732709+00	
00000000-0000-0000-0000-000000000000	4e310a3d-4132-4c7b-96e5-82539539e8e9	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-19 04:49:38.837867+00	
00000000-0000-0000-0000-000000000000	f5b0992f-4d6a-4d13-99cb-a12c51bad15f	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-19 05:05:53.761968+00	
00000000-0000-0000-0000-000000000000	8b1d85dc-69fb-457b-b762-67166d5939e8	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-19 05:09:17.922218+00	
00000000-0000-0000-0000-000000000000	54fc1318-1807-431e-a3a9-70eac4e53f58	{"action":"login","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-19 05:09:43.792063+00	
00000000-0000-0000-0000-000000000000	5fb4874e-880d-40d8-9504-9765c8c128e3	{"action":"login","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-19 06:00:12.823823+00	
00000000-0000-0000-0000-000000000000	8abc19b8-87c8-4ddf-9702-45aa7320440c	{"action":"login","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-19 06:07:46.823893+00	
00000000-0000-0000-0000-000000000000	949e2ab7-68fa-4d70-b3de-203afe96380e	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-19 06:14:34.037944+00	
00000000-0000-0000-0000-000000000000	54737f1a-54cf-4583-bcb3-40cd9e9d8884	{"action":"login","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-19 06:56:44.2465+00	
00000000-0000-0000-0000-000000000000	00e7048a-af53-40df-b4bf-f92deb3ec61d	{"action":"login","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-26 06:34:17.327396+00	
00000000-0000-0000-0000-000000000000	1b091fc7-2f4e-49c4-b022-451bc146d803	{"action":"token_refreshed","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-26 07:35:38.548975+00	
00000000-0000-0000-0000-000000000000	4815debf-8b30-42ca-bb43-00b58a4fc4de	{"action":"token_revoked","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-26 07:35:38.554249+00	
00000000-0000-0000-0000-000000000000	799012cb-27b7-4c78-9247-b72bab8d0283	{"action":"token_refreshed","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-26 07:35:38.80408+00	
00000000-0000-0000-0000-000000000000	b27a7177-5e5c-4343-9b45-870bc21abc87	{"action":"token_revoked","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-26 07:35:38.805333+00	
00000000-0000-0000-0000-000000000000	97a31dd8-d76d-4acd-96bd-c724fd6b9cf0	{"action":"login","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-17 17:33:05.032367+00	
00000000-0000-0000-0000-000000000000	cb7073e3-46fc-420e-be34-df0f92fc3b65	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-17 17:33:47.748532+00	
00000000-0000-0000-0000-000000000000	abf80266-ba35-4012-81ee-dc3711065e59	{"action":"token_refreshed","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-17 19:19:51.99268+00	
00000000-0000-0000-0000-000000000000	7167fb5d-c745-4166-9805-41483faf708c	{"action":"token_revoked","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-17 19:19:51.994267+00	
00000000-0000-0000-0000-000000000000	0af84229-0548-4104-937c-4115e0bae76e	{"action":"token_refreshed","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-17 19:19:52.379405+00	
00000000-0000-0000-0000-000000000000	3c9f875e-b479-49e4-9072-8c821eaae14d	{"action":"token_revoked","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-17 19:19:52.379996+00	
00000000-0000-0000-0000-000000000000	c96946e7-afa2-4790-9b01-0250411cbac6	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-18 09:28:05.674915+00	
00000000-0000-0000-0000-000000000000	be4d46ac-32ce-4d38-9aaf-717ef99014bf	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-18 10:14:09.420216+00	
00000000-0000-0000-0000-000000000000	f6dfedb7-ec92-46d4-9db9-289b5e8b6499	{"action":"login","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-18 10:48:40.021513+00	
00000000-0000-0000-0000-000000000000	3b18e93b-c410-4820-af24-7802abfbc408	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-18 11:46:04.522624+00	
00000000-0000-0000-0000-000000000000	1b6b8553-82c0-455a-9b4e-2938fe3d6091	{"action":"login","actor_id":"cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a","actor_username":"staff001@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-19 04:46:33.346013+00	
00000000-0000-0000-0000-000000000000	acc7a43f-d090-4e8e-936c-67921f147acd	{"action":"token_refreshed","actor_id":"1e85df90-4c60-426a-8599-20866cd4179f","actor_username":"student078@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-19 05:03:20.515946+00	
00000000-0000-0000-0000-000000000000	3ef3b273-6197-4921-875f-ef14ebd202fb	{"action":"token_revoked","actor_id":"1e85df90-4c60-426a-8599-20866cd4179f","actor_username":"student078@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-19 05:03:20.518082+00	
00000000-0000-0000-0000-000000000000	ceb19e28-4b98-4d92-a8f1-f014158ec809	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-19 05:07:01.648879+00	
00000000-0000-0000-0000-000000000000	8ac5b3c1-4ce4-4408-9f10-60f621bfbc0e	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-19 05:51:09.404299+00	
00000000-0000-0000-0000-000000000000	b2aa2418-4b1e-45dc-856c-bf8df50acb0b	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-19 06:03:10.136868+00	
00000000-0000-0000-0000-000000000000	5d573f96-5894-4c21-b0a5-86b1f717eb90	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-19 06:09:43.009497+00	
00000000-0000-0000-0000-000000000000	988a63b6-78eb-47e2-80d1-c5c01deae367	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-19 06:38:02.452776+00	
00000000-0000-0000-0000-000000000000	f8a5ce3d-8675-478f-9803-a19b4ca0afb5	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-26 06:32:32.824203+00	
00000000-0000-0000-0000-000000000000	ac81c4e4-cb96-439e-b703-4a47a476e72e	{"action":"login","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2025-07-26 06:35:49.367457+00	
00000000-0000-0000-0000-000000000000	527defdc-ead1-4478-b13f-7ff49f71fa28	{"action":"token_refreshed","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-26 08:35:27.633587+00	
00000000-0000-0000-0000-000000000000	bc0f1fb8-cd13-47fb-b863-1eb7b99ce16d	{"action":"token_revoked","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-26 08:35:27.635807+00	
00000000-0000-0000-0000-000000000000	3fcb4e51-f3c4-413e-a6ed-88de71345414	{"action":"token_refreshed","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-26 08:35:27.895161+00	
00000000-0000-0000-0000-000000000000	bc98fdce-67d4-4a6f-957a-21ecdb4bf1d9	{"action":"token_revoked","actor_id":"a2d51914-1cde-4a1d-912e-50c388430197","actor_username":"student090@example.com","actor_via_sso":false,"log_type":"token"}	2025-07-26 08:35:27.895793+00	
\.


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.flow_state (id, user_id, auth_code, code_challenge_method, code_challenge, provider_type, provider_access_token, provider_refresh_token, created_at, updated_at, authentication_method, auth_code_issued_at) FROM stdin;
\.


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.identities (provider_id, user_id, identity_data, provider, last_sign_in_at, created_at, updated_at, id) FROM stdin;
00699b0c-3d9f-43f3-8585-db639cc75dab	00699b0c-3d9f-43f3-8585-db639cc75dab	{"sub": "00699b0c-3d9f-43f3-8585-db639cc75dab", "email": "abc@gmail.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 22:44:59.763835+00	2025-07-06 22:44:59.764437+00	2025-07-06 22:44:59.764437+00	3ce2139a-05de-4b41-b169-3f0dc11ab9a1
40e670c9-3227-4adb-bac9-14930a87a782	40e670c9-3227-4adb-bac9-14930a87a782	{"sub": "40e670c9-3227-4adb-bac9-14930a87a782", "email": "angermaster@gamil.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:03:29.25648+00	2025-07-06 23:03:29.256536+00	2025-07-06 23:03:29.256536+00	81d8e5b5-8d89-49dd-b8e2-8ad8d27663d3
f043067b-9ef4-4009-93e3-a8c2dec006e1	f043067b-9ef4-4009-93e3-a8c2dec006e1	{"sub": "f043067b-9ef4-4009-93e3-a8c2dec006e1", "email": "student001@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:19:29.58696+00	2025-07-06 23:19:29.587009+00	2025-07-06 23:19:29.587009+00	740ca2b7-4192-4590-aae9-05afa6847a5b
00654f1b-b3e3-43af-a7b4-56f97921040b	00654f1b-b3e3-43af-a7b4-56f97921040b	{"sub": "00654f1b-b3e3-43af-a7b4-56f97921040b", "email": "student002@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:19:30.031737+00	2025-07-06 23:19:30.031793+00	2025-07-06 23:19:30.031793+00	e90c2587-27c3-432e-b954-f579ac0350c8
359c592a-dd23-4db2-9135-bcdd5c066705	359c592a-dd23-4db2-9135-bcdd5c066705	{"sub": "359c592a-dd23-4db2-9135-bcdd5c066705", "email": "student003@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:19:30.414074+00	2025-07-06 23:19:30.414121+00	2025-07-06 23:19:30.414121+00	a0bac289-aaac-4e9b-92cc-a44d12905dbf
c1f5941b-17b0-4191-bfb9-7dc67c526310	c1f5941b-17b0-4191-bfb9-7dc67c526310	{"sub": "c1f5941b-17b0-4191-bfb9-7dc67c526310", "email": "student004@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:19:30.672857+00	2025-07-06 23:19:30.672907+00	2025-07-06 23:19:30.672907+00	17889fed-cddc-40f1-9939-58f8dbafc31c
1ce57413-49e4-4706-ace4-b2a3117a33c3	1ce57413-49e4-4706-ace4-b2a3117a33c3	{"sub": "1ce57413-49e4-4706-ace4-b2a3117a33c3", "email": "student005@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:19:30.937383+00	2025-07-06 23:19:30.937431+00	2025-07-06 23:19:30.937431+00	fbb790a6-8cf3-4601-96d1-c0166087edb7
4fcafc36-f358-4930-8e98-e10347b330d8	4fcafc36-f358-4930-8e98-e10347b330d8	{"sub": "4fcafc36-f358-4930-8e98-e10347b330d8", "email": "student006@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:19:31.316964+00	2025-07-06 23:19:31.317021+00	2025-07-06 23:19:31.317021+00	b70980db-1c99-499a-9789-dde4dca2f8cf
6485a6cd-3531-4d64-8d9d-c7e497f1c618	6485a6cd-3531-4d64-8d9d-c7e497f1c618	{"sub": "6485a6cd-3531-4d64-8d9d-c7e497f1c618", "email": "student007@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:19:31.63864+00	2025-07-06 23:19:31.638689+00	2025-07-06 23:19:31.638689+00	dce5bc9b-0357-43b3-87b9-9e8872b3e7bd
36078707-91df-4b7b-8b4a-8e342bbc3e36	36078707-91df-4b7b-8b4a-8e342bbc3e36	{"sub": "36078707-91df-4b7b-8b4a-8e342bbc3e36", "email": "student008@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:19:32.013435+00	2025-07-06 23:19:32.013484+00	2025-07-06 23:19:32.013484+00	e6e36451-cf84-40bc-a874-08a0f3dc487b
d362753f-74bf-427c-8666-6cad45b48cd0	d362753f-74bf-427c-8666-6cad45b48cd0	{"sub": "d362753f-74bf-427c-8666-6cad45b48cd0", "email": "student009@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:19:32.389833+00	2025-07-06 23:19:32.389881+00	2025-07-06 23:19:32.389881+00	f47048be-df71-4f94-9686-d7bfe52c4df9
b2105c0e-41f7-4adc-a6d4-a3bab47ef2ee	b2105c0e-41f7-4adc-a6d4-a3bab47ef2ee	{"sub": "b2105c0e-41f7-4adc-a6d4-a3bab47ef2ee", "email": "student010@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:19:32.645412+00	2025-07-06 23:19:32.645462+00	2025-07-06 23:19:32.645462+00	8e619cc3-ef8a-4688-a4a6-d5d03463a5d2
759276a4-cc74-4d53-bd9f-d7611a54e140	759276a4-cc74-4d53-bd9f-d7611a54e140	{"sub": "759276a4-cc74-4d53-bd9f-d7611a54e140", "email": "student011@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:19:32.926994+00	2025-07-06 23:19:32.927042+00	2025-07-06 23:19:32.927042+00	781bc2ed-15f9-4e13-9ee9-1ed2067c19c2
695edbf7-687d-434f-8e37-706f38502b57	695edbf7-687d-434f-8e37-706f38502b57	{"sub": "695edbf7-687d-434f-8e37-706f38502b57", "email": "student012@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:19:33.221031+00	2025-07-06 23:19:33.22108+00	2025-07-06 23:19:33.22108+00	f95aeeae-74b9-4de0-a469-570d9b857f33
e9f9d1f4-66be-4978-b4ab-a31c37fbc42f	e9f9d1f4-66be-4978-b4ab-a31c37fbc42f	{"sub": "e9f9d1f4-66be-4978-b4ab-a31c37fbc42f", "email": "student013@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:19:33.585895+00	2025-07-06 23:19:33.585941+00	2025-07-06 23:19:33.585941+00	d762ba40-9e9c-45d8-9e95-834f4a725e26
e0ce2d2b-bd66-4d34-a109-7e719aad41e2	e0ce2d2b-bd66-4d34-a109-7e719aad41e2	{"sub": "e0ce2d2b-bd66-4d34-a109-7e719aad41e2", "email": "student014@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:19:33.86473+00	2025-07-06 23:19:33.864777+00	2025-07-06 23:19:33.864777+00	010927dc-3fcf-4dd1-8617-7da9a3c18412
13f0aceb-43a4-4120-ad57-8ce74766a078	13f0aceb-43a4-4120-ad57-8ce74766a078	{"sub": "13f0aceb-43a4-4120-ad57-8ce74766a078", "email": "student015@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:19:34.229493+00	2025-07-06 23:19:34.229539+00	2025-07-06 23:19:34.229539+00	86fc16b9-e56c-4f5a-944b-0c53ef3a6307
7919fd8d-0f89-40a5-baf0-12c87c32e39c	7919fd8d-0f89-40a5-baf0-12c87c32e39c	{"sub": "7919fd8d-0f89-40a5-baf0-12c87c32e39c", "email": "student016@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:19:34.636552+00	2025-07-06 23:19:34.636599+00	2025-07-06 23:19:34.636599+00	597bc462-0b10-4ccb-bcae-d5504e6d1f3b
d57366cd-d4e2-4731-8559-445f513c2d91	d57366cd-d4e2-4731-8559-445f513c2d91	{"sub": "d57366cd-d4e2-4731-8559-445f513c2d91", "email": "student017@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:19:34.976948+00	2025-07-06 23:19:34.976995+00	2025-07-06 23:19:34.976995+00	e8824943-4fee-4fd4-b38b-8891e173188d
c11b8b42-5040-4e36-a6cd-8d191d001793	c11b8b42-5040-4e36-a6cd-8d191d001793	{"sub": "c11b8b42-5040-4e36-a6cd-8d191d001793", "email": "student018@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:19:35.224612+00	2025-07-06 23:19:35.224664+00	2025-07-06 23:19:35.224664+00	4f21bd95-036e-4166-be55-807e58cc5b72
8fbb89b6-ec73-44b9-a055-f705841efad5	8fbb89b6-ec73-44b9-a055-f705841efad5	{"sub": "8fbb89b6-ec73-44b9-a055-f705841efad5", "email": "student019@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:19:35.505091+00	2025-07-06 23:19:35.505138+00	2025-07-06 23:19:35.505138+00	046db0c1-2925-4ef7-90b9-8b8ea024fc70
3382735c-65d6-4f3a-ac19-1da3efff8dc9	3382735c-65d6-4f3a-ac19-1da3efff8dc9	{"sub": "3382735c-65d6-4f3a-ac19-1da3efff8dc9", "email": "student020@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:19:35.761332+00	2025-07-06 23:19:35.761379+00	2025-07-06 23:19:35.761379+00	52d53a16-6581-4138-bcbd-9ffed60443f6
294edd58-3f43-4693-98c7-0912ee512a17	294edd58-3f43-4693-98c7-0912ee512a17	{"sub": "294edd58-3f43-4693-98c7-0912ee512a17", "email": "student021@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:19:36.028828+00	2025-07-06 23:19:36.028875+00	2025-07-06 23:19:36.028875+00	fd788a66-90b0-477e-90ca-b27452303f96
de264ef1-6740-422b-bf8d-a104532e0c90	de264ef1-6740-422b-bf8d-a104532e0c90	{"sub": "de264ef1-6740-422b-bf8d-a104532e0c90", "email": "student022@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:19:36.297022+00	2025-07-06 23:19:36.297068+00	2025-07-06 23:19:36.297068+00	ab5ecb14-0e17-4d50-a515-949089f31d54
e2535c7d-c6d4-4e72-9a09-f28bc8ed9a7e	e2535c7d-c6d4-4e72-9a09-f28bc8ed9a7e	{"sub": "e2535c7d-c6d4-4e72-9a09-f28bc8ed9a7e", "email": "student023@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:19:36.704055+00	2025-07-06 23:19:36.704102+00	2025-07-06 23:19:36.704102+00	7b19f587-a28e-40c2-ae9b-e04d98505109
90cd8044-d51a-4dfb-8dba-ba12538edd0b	90cd8044-d51a-4dfb-8dba-ba12538edd0b	{"sub": "90cd8044-d51a-4dfb-8dba-ba12538edd0b", "email": "student024@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:19:36.956378+00	2025-07-06 23:19:36.956425+00	2025-07-06 23:19:36.956425+00	4be9c41d-a90f-4230-8518-dafbafff7809
38a9c3a7-4faf-4053-b3ce-39b3807d1bf8	38a9c3a7-4faf-4053-b3ce-39b3807d1bf8	{"sub": "38a9c3a7-4faf-4053-b3ce-39b3807d1bf8", "email": "student025@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:19:37.234791+00	2025-07-06 23:19:37.234836+00	2025-07-06 23:19:37.234836+00	1392bbc0-bd6e-47ef-bab8-030444b8c0ff
8058af23-f469-4ca8-a7c4-5182a0eef655	8058af23-f469-4ca8-a7c4-5182a0eef655	{"sub": "8058af23-f469-4ca8-a7c4-5182a0eef655", "email": "student026@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:19:37.4825+00	2025-07-06 23:19:37.482554+00	2025-07-06 23:19:37.482554+00	1ed99665-a18e-4734-a6b8-ba71957b434d
cc3c89cc-118b-4779-9901-580245998f7b	cc3c89cc-118b-4779-9901-580245998f7b	{"sub": "cc3c89cc-118b-4779-9901-580245998f7b", "email": "student027@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:19:37.744434+00	2025-07-06 23:19:37.744481+00	2025-07-06 23:19:37.744481+00	a2baa835-6764-4278-9608-3d1dc99683e3
5ee23e8e-b8db-4554-9d10-41a19321f817	5ee23e8e-b8db-4554-9d10-41a19321f817	{"sub": "5ee23e8e-b8db-4554-9d10-41a19321f817", "email": "student028@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:19:38.043985+00	2025-07-06 23:19:38.044033+00	2025-07-06 23:19:38.044033+00	519f173d-093f-4ed4-b1fe-4bf5781c90dc
01ad9937-bd54-4b32-9458-9b50c81a84d1	01ad9937-bd54-4b32-9458-9b50c81a84d1	{"sub": "01ad9937-bd54-4b32-9458-9b50c81a84d1", "email": "student029@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:19:38.302476+00	2025-07-06 23:19:38.302526+00	2025-07-06 23:19:38.302526+00	1541cb15-7a7e-4d7c-bbd1-f114ef04cc72
7baeab7d-13d6-47f5-ad82-65d9ca35c85e	7baeab7d-13d6-47f5-ad82-65d9ca35c85e	{"sub": "7baeab7d-13d6-47f5-ad82-65d9ca35c85e", "email": "student030@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:19:38.593086+00	2025-07-06 23:19:38.593133+00	2025-07-06 23:19:38.593133+00	38fe14e7-7d4b-4c48-a506-a7afe85f4c36
dba96981-5e2e-4b6b-af70-b1b6b4586390	dba96981-5e2e-4b6b-af70-b1b6b4586390	{"sub": "dba96981-5e2e-4b6b-af70-b1b6b4586390", "email": "student036@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:19:39.658182+00	2025-07-06 23:19:39.658254+00	2025-07-06 23:19:39.658254+00	51038ac3-959d-4df9-8cb0-190466496b97
945033ac-abb6-426c-88c6-926ffa615561	945033ac-abb6-426c-88c6-926ffa615561	{"sub": "945033ac-abb6-426c-88c6-926ffa615561", "email": "student097@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:19:49.593908+00	2025-07-06 23:19:49.593957+00	2025-07-06 23:19:49.593957+00	09e06582-c73c-47b7-8b29-5700828bc437
7279bbef-accb-49e3-af8a-1eaa1950828c	7279bbef-accb-49e3-af8a-1eaa1950828c	{"sub": "7279bbef-accb-49e3-af8a-1eaa1950828c", "email": "student031@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:28:30.715914+00	2025-07-06 23:28:30.715967+00	2025-07-06 23:28:30.715967+00	c6cae2ac-7b65-4ceb-8fcc-e77078b975bf
f5c1abe0-cbf4-449f-8f4c-5029070083ff	f5c1abe0-cbf4-449f-8f4c-5029070083ff	{"sub": "f5c1abe0-cbf4-449f-8f4c-5029070083ff", "email": "student032@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:28:32.028991+00	2025-07-06 23:28:32.029038+00	2025-07-06 23:28:32.029038+00	d9adba44-8e1f-4a70-b876-8f2653bc5025
f26a23b8-080f-42ec-8856-0c6629d426aa	f26a23b8-080f-42ec-8856-0c6629d426aa	{"sub": "f26a23b8-080f-42ec-8856-0c6629d426aa", "email": "student033@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:28:33.319158+00	2025-07-06 23:28:33.31921+00	2025-07-06 23:28:33.31921+00	be8117f6-a3bb-4d36-823d-ed4c6864edab
957b0e6b-9843-4531-8273-1878f186bdbe	957b0e6b-9843-4531-8273-1878f186bdbe	{"sub": "957b0e6b-9843-4531-8273-1878f186bdbe", "email": "student034@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:28:34.574679+00	2025-07-06 23:28:34.574725+00	2025-07-06 23:28:34.574725+00	7c13bf95-bd93-4354-9651-f1d600bf657f
0552910e-f473-48bd-a631-8fd6c90b9a09	0552910e-f473-48bd-a631-8fd6c90b9a09	{"sub": "0552910e-f473-48bd-a631-8fd6c90b9a09", "email": "student035@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:28:35.870461+00	2025-07-06 23:28:35.870506+00	2025-07-06 23:28:35.870506+00	e66f4ecf-4c83-49d3-8652-65987af07803
92bb1183-589a-401f-a86b-5ae11a04e9bc	92bb1183-589a-401f-a86b-5ae11a04e9bc	{"sub": "92bb1183-589a-401f-a86b-5ae11a04e9bc", "email": "student037@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:28:38.488941+00	2025-07-06 23:28:38.488988+00	2025-07-06 23:28:38.488988+00	fef9a64c-f288-44b5-a48f-9b3409580829
c5e5750f-bac1-4531-8acb-7b0e0027363a	c5e5750f-bac1-4531-8acb-7b0e0027363a	{"sub": "c5e5750f-bac1-4531-8acb-7b0e0027363a", "email": "student038@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:28:39.746548+00	2025-07-06 23:28:39.746597+00	2025-07-06 23:28:39.746597+00	f1a0b035-0081-47ff-b9ee-274e3495a53e
09a05d58-176a-4ead-b435-167ef5b12f8b	09a05d58-176a-4ead-b435-167ef5b12f8b	{"sub": "09a05d58-176a-4ead-b435-167ef5b12f8b", "email": "student039@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:28:40.999459+00	2025-07-06 23:28:40.999506+00	2025-07-06 23:28:40.999506+00	7c0b971d-a83b-4646-97a7-e41fb35f4705
e097a9f6-36fd-4a46-87ea-2cb4f19719c8	e097a9f6-36fd-4a46-87ea-2cb4f19719c8	{"sub": "e097a9f6-36fd-4a46-87ea-2cb4f19719c8", "email": "student040@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:28:42.281071+00	2025-07-06 23:28:42.281118+00	2025-07-06 23:28:42.281118+00	5cfe2e2e-ad7c-4ed1-bdb7-6be611dc65ba
55a7bdfb-ed63-4e31-beca-88314bc8cc5f	55a7bdfb-ed63-4e31-beca-88314bc8cc5f	{"sub": "55a7bdfb-ed63-4e31-beca-88314bc8cc5f", "email": "student041@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:28:43.565512+00	2025-07-06 23:28:43.56556+00	2025-07-06 23:28:43.56556+00	220749d3-8c2e-4cc9-ab40-e4552c9a75f1
5ec60e6d-5b8c-4fe1-8181-1fec9ec2ab86	5ec60e6d-5b8c-4fe1-8181-1fec9ec2ab86	{"sub": "5ec60e6d-5b8c-4fe1-8181-1fec9ec2ab86", "email": "student042@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:28:44.890845+00	2025-07-06 23:28:44.890895+00	2025-07-06 23:28:44.890895+00	8621a161-a75e-4bcb-a49b-d0f4e3d1a51e
2ebbab6a-e0e8-4a29-9e15-9b321ded899a	2ebbab6a-e0e8-4a29-9e15-9b321ded899a	{"sub": "2ebbab6a-e0e8-4a29-9e15-9b321ded899a", "email": "student043@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:28:46.155014+00	2025-07-06 23:28:46.155062+00	2025-07-06 23:28:46.155062+00	2b585de3-eb6f-4cf5-8e9c-6aa8586afa08
3ae6e2bf-60f1-4bec-936b-048b25d8f68e	3ae6e2bf-60f1-4bec-936b-048b25d8f68e	{"sub": "3ae6e2bf-60f1-4bec-936b-048b25d8f68e", "email": "student044@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:28:47.44937+00	2025-07-06 23:28:47.449418+00	2025-07-06 23:28:47.449418+00	fb769b35-a99d-4b3e-957f-d7b51dc14375
e00a142c-8a75-49a8-bed1-3d95a0f4c459	e00a142c-8a75-49a8-bed1-3d95a0f4c459	{"sub": "e00a142c-8a75-49a8-bed1-3d95a0f4c459", "email": "student045@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:28:48.750346+00	2025-07-06 23:28:48.750394+00	2025-07-06 23:28:48.750394+00	bd155354-ad20-4afe-8fc9-754bea485f14
a6beb2c1-97e9-4b89-87f8-c6ce608ee596	a6beb2c1-97e9-4b89-87f8-c6ce608ee596	{"sub": "a6beb2c1-97e9-4b89-87f8-c6ce608ee596", "email": "student046@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:28:50.086019+00	2025-07-06 23:28:50.08607+00	2025-07-06 23:28:50.08607+00	2c0a0478-15fe-41a7-98a4-ef406a3eccd3
915bdb50-deb0-49b7-8c7a-e17268258e68	915bdb50-deb0-49b7-8c7a-e17268258e68	{"sub": "915bdb50-deb0-49b7-8c7a-e17268258e68", "email": "student047@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:28:51.323661+00	2025-07-06 23:28:51.323711+00	2025-07-06 23:28:51.323711+00	18e94e30-4a51-4b3a-8903-1abd8030b923
f2a4c1ed-57db-44a8-b062-4ce8ae9e1b98	f2a4c1ed-57db-44a8-b062-4ce8ae9e1b98	{"sub": "f2a4c1ed-57db-44a8-b062-4ce8ae9e1b98", "email": "student048@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:28:52.615355+00	2025-07-06 23:28:52.615403+00	2025-07-06 23:28:52.615403+00	40643fbc-1227-4719-a5ba-2725062d6e18
e337a4dc-1832-4a9d-85f4-1d30683eb964	e337a4dc-1832-4a9d-85f4-1d30683eb964	{"sub": "e337a4dc-1832-4a9d-85f4-1d30683eb964", "email": "student049@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:28:53.911902+00	2025-07-06 23:28:53.911949+00	2025-07-06 23:28:53.911949+00	88b28ded-1eb2-4cf5-85f4-cab4727d9baa
56371e1b-e464-4d3d-90d3-3f025c40f398	56371e1b-e464-4d3d-90d3-3f025c40f398	{"sub": "56371e1b-e464-4d3d-90d3-3f025c40f398", "email": "student050@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:28:55.212798+00	2025-07-06 23:28:55.212845+00	2025-07-06 23:28:55.212845+00	b4aa84e6-f42f-46e0-ab02-117ea40a6c1b
cc7c1dc4-ff0b-499f-a39f-ca58a1e2cfd1	cc7c1dc4-ff0b-499f-a39f-ca58a1e2cfd1	{"sub": "cc7c1dc4-ff0b-499f-a39f-ca58a1e2cfd1", "email": "student051@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:28:56.499861+00	2025-07-06 23:28:56.49991+00	2025-07-06 23:28:56.49991+00	ac0b99f8-537b-41bd-81ce-917691a79546
4d01ad91-ce75-49ce-8f20-e99e68343a4d	4d01ad91-ce75-49ce-8f20-e99e68343a4d	{"sub": "4d01ad91-ce75-49ce-8f20-e99e68343a4d", "email": "student052@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:28:57.788747+00	2025-07-06 23:28:57.788795+00	2025-07-06 23:28:57.788795+00	ba3d4576-cda2-49f3-b5b2-60ee49ce0130
759b543d-2173-4901-803d-dd210dbf41db	759b543d-2173-4901-803d-dd210dbf41db	{"sub": "759b543d-2173-4901-803d-dd210dbf41db", "email": "student053@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:28:59.136353+00	2025-07-06 23:28:59.136401+00	2025-07-06 23:28:59.136401+00	0d136493-48a0-4993-b91c-37ce336e5899
fe1078bc-e494-4dbe-b8b9-5b289e505666	fe1078bc-e494-4dbe-b8b9-5b289e505666	{"sub": "fe1078bc-e494-4dbe-b8b9-5b289e505666", "email": "student054@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:00.452354+00	2025-07-06 23:29:00.452409+00	2025-07-06 23:29:00.452409+00	aee2305a-8f31-4cd7-a9f5-d015fd34c645
c98b5d43-3b01-458d-a702-54d0924f8c98	c98b5d43-3b01-458d-a702-54d0924f8c98	{"sub": "c98b5d43-3b01-458d-a702-54d0924f8c98", "email": "student055@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:01.703345+00	2025-07-06 23:29:01.703396+00	2025-07-06 23:29:01.703396+00	772e0dfc-70fb-4e5c-aa5d-2456aa8cb192
03b6eecb-379b-4083-b4a5-32583ab0fda1	03b6eecb-379b-4083-b4a5-32583ab0fda1	{"sub": "03b6eecb-379b-4083-b4a5-32583ab0fda1", "email": "student056@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:02.965422+00	2025-07-06 23:29:02.965471+00	2025-07-06 23:29:02.965471+00	6ce8e728-51c8-4a0f-9721-5af720af2510
bf1356fc-2359-499d-a8fa-3cf08a07254e	bf1356fc-2359-499d-a8fa-3cf08a07254e	{"sub": "bf1356fc-2359-499d-a8fa-3cf08a07254e", "email": "student057@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:04.253346+00	2025-07-06 23:29:04.253393+00	2025-07-06 23:29:04.253393+00	875a5f9c-5cf7-400a-a0dd-375be4457b03
cd234ac4-69fa-4a9f-8c5a-7544555a229f	cd234ac4-69fa-4a9f-8c5a-7544555a229f	{"sub": "cd234ac4-69fa-4a9f-8c5a-7544555a229f", "email": "student058@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:05.558536+00	2025-07-06 23:29:05.558582+00	2025-07-06 23:29:05.558582+00	bedeedb7-874f-4a6d-a745-be7f45ab6ca4
55bbe185-cda0-49e6-8f8a-cace1ba1129a	55bbe185-cda0-49e6-8f8a-cace1ba1129a	{"sub": "55bbe185-cda0-49e6-8f8a-cace1ba1129a", "email": "student059@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:06.833216+00	2025-07-06 23:29:06.833264+00	2025-07-06 23:29:06.833264+00	e3a3d729-2fca-4e7b-b044-d242eeaff93d
5f8ff2f1-18d7-4627-b4f2-d42fbe9f132a	5f8ff2f1-18d7-4627-b4f2-d42fbe9f132a	{"sub": "5f8ff2f1-18d7-4627-b4f2-d42fbe9f132a", "email": "student060@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:08.140167+00	2025-07-06 23:29:08.140218+00	2025-07-06 23:29:08.140218+00	701daee0-63aa-4556-a299-b9e4dd29de2b
34de1333-884a-4bb8-bfe8-9f618568973c	34de1333-884a-4bb8-bfe8-9f618568973c	{"sub": "34de1333-884a-4bb8-bfe8-9f618568973c", "email": "student061@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:09.394712+00	2025-07-06 23:29:09.394763+00	2025-07-06 23:29:09.394763+00	84f60541-4829-443e-aae0-d264454ffef9
496f4ad0-249e-41e1-857f-2cd6ae7fa1ef	496f4ad0-249e-41e1-857f-2cd6ae7fa1ef	{"sub": "496f4ad0-249e-41e1-857f-2cd6ae7fa1ef", "email": "student062@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:10.701778+00	2025-07-06 23:29:10.701828+00	2025-07-06 23:29:10.701828+00	1c1d8ece-c1cb-467a-b639-fa728168b35b
4c2a2cec-2745-4073-85f9-04ad472b017d	4c2a2cec-2745-4073-85f9-04ad472b017d	{"sub": "4c2a2cec-2745-4073-85f9-04ad472b017d", "email": "student063@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:12.017253+00	2025-07-06 23:29:12.017301+00	2025-07-06 23:29:12.017301+00	cb1df48c-0c35-47e6-bc89-e7a98121c12e
ad781a50-10b1-40ce-87a0-e22f98502cf7	ad781a50-10b1-40ce-87a0-e22f98502cf7	{"sub": "ad781a50-10b1-40ce-87a0-e22f98502cf7", "email": "student064@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:13.328683+00	2025-07-06 23:29:13.328738+00	2025-07-06 23:29:13.328738+00	3b3f7532-67fd-4e4f-9f2f-789a599222f7
f234be03-5a87-4dc5-bb74-280676f90bbb	f234be03-5a87-4dc5-bb74-280676f90bbb	{"sub": "f234be03-5a87-4dc5-bb74-280676f90bbb", "email": "student065@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:14.624754+00	2025-07-06 23:29:14.624805+00	2025-07-06 23:29:14.624805+00	d87af5a3-4085-461e-99f4-791ab6de2a4e
920244f9-7510-4aba-a7f8-42819a4f56e1	920244f9-7510-4aba-a7f8-42819a4f56e1	{"sub": "920244f9-7510-4aba-a7f8-42819a4f56e1", "email": "student066@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:17.101514+00	2025-07-06 23:29:17.10157+00	2025-07-06 23:29:17.10157+00	fcdcb91d-f0fa-42a7-9881-2370ea037faa
490830f3-23c6-4e39-9850-0257a84ec7ad	490830f3-23c6-4e39-9850-0257a84ec7ad	{"sub": "490830f3-23c6-4e39-9850-0257a84ec7ad", "email": "student067@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:18.376051+00	2025-07-06 23:29:18.3761+00	2025-07-06 23:29:18.3761+00	66f9d78d-b49f-4464-b102-ece0e2c50414
3615deed-9a1e-490a-b344-b664262f5cc4	3615deed-9a1e-490a-b344-b664262f5cc4	{"sub": "3615deed-9a1e-490a-b344-b664262f5cc4", "email": "student068@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:19.686291+00	2025-07-06 23:29:19.686338+00	2025-07-06 23:29:19.686338+00	7eba4d39-83a8-4507-9cd1-f815e0201c97
19a34652-2e3a-4551-bf66-10c32fefdcb9	19a34652-2e3a-4551-bf66-10c32fefdcb9	{"sub": "19a34652-2e3a-4551-bf66-10c32fefdcb9", "email": "student069@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:21.610262+00	2025-07-06 23:29:21.610308+00	2025-07-06 23:29:21.610308+00	3c0b4eb8-59cd-4608-af46-52d10e311f53
e9a10fb2-e0b7-4115-ab40-d9002738486a	e9a10fb2-e0b7-4115-ab40-d9002738486a	{"sub": "e9a10fb2-e0b7-4115-ab40-d9002738486a", "email": "student070@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:23.185584+00	2025-07-06 23:29:23.185631+00	2025-07-06 23:29:23.185631+00	c99e9db0-f3cd-4426-8cde-8ad714a8773f
23c1aeb2-602e-4076-9d13-4615c742f916	23c1aeb2-602e-4076-9d13-4615c742f916	{"sub": "23c1aeb2-602e-4076-9d13-4615c742f916", "email": "student071@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:24.908033+00	2025-07-06 23:29:24.908083+00	2025-07-06 23:29:24.908083+00	e19d59a8-a735-4143-ba1c-4498a00dc36b
42055b75-3473-48f0-9f12-a4abba8714ea	42055b75-3473-48f0-9f12-a4abba8714ea	{"sub": "42055b75-3473-48f0-9f12-a4abba8714ea", "email": "student072@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:26.174658+00	2025-07-06 23:29:26.174704+00	2025-07-06 23:29:26.174704+00	34fea287-027d-46ba-9d31-9dc9c787e49a
07fd0355-c715-45f2-98ae-90b292d77d41	07fd0355-c715-45f2-98ae-90b292d77d41	{"sub": "07fd0355-c715-45f2-98ae-90b292d77d41", "email": "student073@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:27.486726+00	2025-07-06 23:29:27.486779+00	2025-07-06 23:29:27.486779+00	b6fef13a-1aab-468b-88c5-241397df790b
91db900d-0bef-4f07-90e5-bac9f72e08aa	91db900d-0bef-4f07-90e5-bac9f72e08aa	{"sub": "91db900d-0bef-4f07-90e5-bac9f72e08aa", "email": "student074@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:28.809704+00	2025-07-06 23:29:28.809753+00	2025-07-06 23:29:28.809753+00	3e1cd6e6-7df7-481d-a98e-8ec32e438271
55dac851-ecfc-4b93-9da7-1efe6be19fa0	55dac851-ecfc-4b93-9da7-1efe6be19fa0	{"sub": "55dac851-ecfc-4b93-9da7-1efe6be19fa0", "email": "student075@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:30.10505+00	2025-07-06 23:29:30.105101+00	2025-07-06 23:29:30.105101+00	fa76310b-6a7d-4f4b-b443-486b66732d1f
07a74c11-bbf3-41e3-8753-c282132a0942	07a74c11-bbf3-41e3-8753-c282132a0942	{"sub": "07a74c11-bbf3-41e3-8753-c282132a0942", "email": "student076@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:31.369872+00	2025-07-06 23:29:31.369919+00	2025-07-06 23:29:31.369919+00	38fd6fe0-2e56-4a54-a499-63dc061e5a97
986cfe33-942a-4052-9d5f-585ba1c58e2a	986cfe33-942a-4052-9d5f-585ba1c58e2a	{"sub": "986cfe33-942a-4052-9d5f-585ba1c58e2a", "email": "student077@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:32.669297+00	2025-07-06 23:29:32.669348+00	2025-07-06 23:29:32.669348+00	d45c085a-3086-4d82-ad72-ae1ef1e0913c
1e85df90-4c60-426a-8599-20866cd4179f	1e85df90-4c60-426a-8599-20866cd4179f	{"sub": "1e85df90-4c60-426a-8599-20866cd4179f", "email": "student078@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:34.528234+00	2025-07-06 23:29:34.528287+00	2025-07-06 23:29:34.528287+00	db8c43a4-4797-40d8-8505-4cbdb8d8ce27
124afc78-d787-490e-ac3b-e4c99628cb40	124afc78-d787-490e-ac3b-e4c99628cb40	{"sub": "124afc78-d787-490e-ac3b-e4c99628cb40", "email": "student079@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:36.47209+00	2025-07-06 23:29:36.472143+00	2025-07-06 23:29:36.472143+00	7f34f2bd-9c38-48c3-b196-1288082ebb20
40329907-7532-4f20-a086-331ca748a856	40329907-7532-4f20-a086-331ca748a856	{"sub": "40329907-7532-4f20-a086-331ca748a856", "email": "student080@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:38.601729+00	2025-07-06 23:29:38.601777+00	2025-07-06 23:29:38.601777+00	ffee1ad8-1b94-452b-a81e-d5c1ab606549
cc83167d-aa1f-4879-a15c-41dcb608a579	cc83167d-aa1f-4879-a15c-41dcb608a579	{"sub": "cc83167d-aa1f-4879-a15c-41dcb608a579", "email": "student081@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:39.948117+00	2025-07-06 23:29:39.948163+00	2025-07-06 23:29:39.948163+00	f24cf63c-b840-4239-b4ca-a1ff2acdcb5c
5d1addd3-2819-46ba-a2e2-a556e7ab56d5	5d1addd3-2819-46ba-a2e2-a556e7ab56d5	{"sub": "5d1addd3-2819-46ba-a2e2-a556e7ab56d5", "email": "student082@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:41.234549+00	2025-07-06 23:29:41.2346+00	2025-07-06 23:29:41.2346+00	85aa4763-46c1-4bb5-9b07-1a45069647be
f0832eb1-0639-4593-a7f4-83c80588ea59	f0832eb1-0639-4593-a7f4-83c80588ea59	{"sub": "f0832eb1-0639-4593-a7f4-83c80588ea59", "email": "student083@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:42.519779+00	2025-07-06 23:29:42.519827+00	2025-07-06 23:29:42.519827+00	0a91daee-1f78-40ed-bf7c-814738e78071
84306c4b-ca98-4eca-824b-98ef34f9235c	84306c4b-ca98-4eca-824b-98ef34f9235c	{"sub": "84306c4b-ca98-4eca-824b-98ef34f9235c", "email": "student084@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:43.839412+00	2025-07-06 23:29:43.839459+00	2025-07-06 23:29:43.839459+00	bab1e306-6b05-4e2b-83ff-2b433a8aa830
32a145f7-f290-48da-a885-cac6acb8f18a	32a145f7-f290-48da-a885-cac6acb8f18a	{"sub": "32a145f7-f290-48da-a885-cac6acb8f18a", "email": "student085@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:45.29259+00	2025-07-06 23:29:45.292641+00	2025-07-06 23:29:45.292641+00	582b4c91-08ce-4716-88f1-458bfac952e8
8d6f5bc2-d90a-41f6-bb35-0a3eb5119495	8d6f5bc2-d90a-41f6-bb35-0a3eb5119495	{"sub": "8d6f5bc2-d90a-41f6-bb35-0a3eb5119495", "email": "student086@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:47.092084+00	2025-07-06 23:29:47.09215+00	2025-07-06 23:29:47.09215+00	7815b896-79ba-40b7-b2cc-e309cf8ae4fb
fa01eacd-c7bf-4039-b3b7-b61d9b2311d8	fa01eacd-c7bf-4039-b3b7-b61d9b2311d8	{"sub": "fa01eacd-c7bf-4039-b3b7-b61d9b2311d8", "email": "student087@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:48.395026+00	2025-07-06 23:29:48.395075+00	2025-07-06 23:29:48.395075+00	ae823042-b043-42b9-9e64-f2b710e6b742
9ca18835-0971-4842-be97-08186fc34251	9ca18835-0971-4842-be97-08186fc34251	{"sub": "9ca18835-0971-4842-be97-08186fc34251", "email": "student088@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:49.661669+00	2025-07-06 23:29:49.661715+00	2025-07-06 23:29:49.661715+00	155fd992-63ed-450f-916f-e1097469d267
4f53ba4b-2d7f-4da3-a6a8-8eede3f7c060	4f53ba4b-2d7f-4da3-a6a8-8eede3f7c060	{"sub": "4f53ba4b-2d7f-4da3-a6a8-8eede3f7c060", "email": "student089@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:50.985054+00	2025-07-06 23:29:50.985125+00	2025-07-06 23:29:50.985125+00	4929bb70-d7bb-4677-ab69-097f7b09f46c
a2d51914-1cde-4a1d-912e-50c388430197	a2d51914-1cde-4a1d-912e-50c388430197	{"sub": "a2d51914-1cde-4a1d-912e-50c388430197", "email": "student090@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:52.284247+00	2025-07-06 23:29:52.284292+00	2025-07-06 23:29:52.284292+00	a90355b9-bb95-4f84-8d92-31bf7741113b
0efe3c02-f278-4ec1-9038-fad1588f1493	0efe3c02-f278-4ec1-9038-fad1588f1493	{"sub": "0efe3c02-f278-4ec1-9038-fad1588f1493", "email": "student091@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:53.552538+00	2025-07-06 23:29:53.552586+00	2025-07-06 23:29:53.552586+00	c3f1316f-ffff-4768-816f-9b802772f98a
5459b24c-84b0-45ad-8c2c-2af37595df06	5459b24c-84b0-45ad-8c2c-2af37595df06	{"sub": "5459b24c-84b0-45ad-8c2c-2af37595df06", "email": "student092@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:54.819392+00	2025-07-06 23:29:54.819439+00	2025-07-06 23:29:54.819439+00	e1d8ae02-717f-4b23-b21f-8bab5ac530c2
2a043cb7-c39f-4d3b-86e6-fd939f593ff6	2a043cb7-c39f-4d3b-86e6-fd939f593ff6	{"sub": "2a043cb7-c39f-4d3b-86e6-fd939f593ff6", "email": "student093@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:56.136432+00	2025-07-06 23:29:56.136477+00	2025-07-06 23:29:56.136477+00	d721cd48-b4e1-4171-8a85-53f9250472cb
079446fa-9e6c-4fd1-90ff-4432ff8bfc15	079446fa-9e6c-4fd1-90ff-4432ff8bfc15	{"sub": "079446fa-9e6c-4fd1-90ff-4432ff8bfc15", "email": "student094@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:57.417926+00	2025-07-06 23:29:57.417972+00	2025-07-06 23:29:57.417972+00	08ba30aa-8536-4176-84e2-843e05e50dcf
78ebb959-0002-4e3a-8a73-62477951e421	78ebb959-0002-4e3a-8a73-62477951e421	{"sub": "78ebb959-0002-4e3a-8a73-62477951e421", "email": "student095@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:29:58.683538+00	2025-07-06 23:29:58.683584+00	2025-07-06 23:29:58.683584+00	535ba7fa-5bfa-426e-8624-b699ef97cc47
ffcbebef-bd6a-490a-a024-6ea73c71ac44	ffcbebef-bd6a-490a-a024-6ea73c71ac44	{"sub": "ffcbebef-bd6a-490a-a024-6ea73c71ac44", "email": "student096@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:30:00.002706+00	2025-07-06 23:30:00.002753+00	2025-07-06 23:30:00.002753+00	8f1a54df-2195-4246-9aec-605562773bd9
2ad27174-9dc2-4dd0-9b01-73d0a0c334e1	2ad27174-9dc2-4dd0-9b01-73d0a0c334e1	{"sub": "2ad27174-9dc2-4dd0-9b01-73d0a0c334e1", "email": "student098@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:30:02.540289+00	2025-07-06 23:30:02.54034+00	2025-07-06 23:30:02.54034+00	76acb749-5c81-4219-a72e-99b9e3c6c7fa
cfa11a9a-0de0-4e32-99a0-5df45d2f56dd	cfa11a9a-0de0-4e32-99a0-5df45d2f56dd	{"sub": "cfa11a9a-0de0-4e32-99a0-5df45d2f56dd", "email": "student099@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:30:03.830622+00	2025-07-06 23:30:03.830668+00	2025-07-06 23:30:03.830668+00	771d2087-a307-49b0-900e-ac27b8b69b85
fe033a35-e2e5-405c-8d74-f5c247307f0b	fe033a35-e2e5-405c-8d74-f5c247307f0b	{"sub": "fe033a35-e2e5-405c-8d74-f5c247307f0b", "email": "student100@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:30:05.167603+00	2025-07-06 23:30:05.167665+00	2025-07-06 23:30:05.167665+00	1af5b374-bd43-4c80-9cae-7ec4f9e47edc
cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	{"sub": "cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a", "email": "staff001@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:30:06.470697+00	2025-07-06 23:30:06.470752+00	2025-07-06 23:30:06.470752+00	605a4b78-503f-4250-a6f1-270f50377307
079ca79f-f4a5-494c-ab69-6eb5d9309140	079ca79f-f4a5-494c-ab69-6eb5d9309140	{"sub": "079ca79f-f4a5-494c-ab69-6eb5d9309140", "email": "staff002@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:30:07.75766+00	2025-07-06 23:30:07.757708+00	2025-07-06 23:30:07.757708+00	1b3536a5-b93e-4a51-9cbd-8586e657a42c
406386d9-94e4-4c78-83fd-604ffbb2dd5a	406386d9-94e4-4c78-83fd-604ffbb2dd5a	{"sub": "406386d9-94e4-4c78-83fd-604ffbb2dd5a", "email": "staff003@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:30:09.333261+00	2025-07-06 23:30:09.333307+00	2025-07-06 23:30:09.333307+00	9685a287-d004-42c2-b9d8-9400459d2cd8
4ef422bd-aba3-4280-a28f-d0ac7cc6c208	4ef422bd-aba3-4280-a28f-d0ac7cc6c208	{"sub": "4ef422bd-aba3-4280-a28f-d0ac7cc6c208", "email": "staff004@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:30:10.782504+00	2025-07-06 23:30:10.782552+00	2025-07-06 23:30:10.782552+00	b7212fba-800b-4849-8499-123cb0f9680a
96e1680c-63d7-4902-afd1-98b74cf34645	96e1680c-63d7-4902-afd1-98b74cf34645	{"sub": "96e1680c-63d7-4902-afd1-98b74cf34645", "email": "staff005@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:30:12.084303+00	2025-07-06 23:30:12.084355+00	2025-07-06 23:30:12.084355+00	fa7910b3-e8d5-4e09-abd7-f4de08e0ef55
8ed041f9-82b9-4c46-b620-2d74d82273d6	8ed041f9-82b9-4c46-b620-2d74d82273d6	{"sub": "8ed041f9-82b9-4c46-b620-2d74d82273d6", "email": "staff006@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:30:15.363459+00	2025-07-06 23:30:15.363512+00	2025-07-06 23:30:15.363512+00	48dcee8b-3c1b-4075-bb09-03d78fc822b6
6d505cca-71c5-4b89-8c62-40daee2fe79c	6d505cca-71c5-4b89-8c62-40daee2fe79c	{"sub": "6d505cca-71c5-4b89-8c62-40daee2fe79c", "email": "staff007@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:30:16.91016+00	2025-07-06 23:30:16.910207+00	2025-07-06 23:30:16.910207+00	7be46d10-91fd-460c-9395-4da643f96d88
49817fdc-6d6c-4a5d-9e45-5498a27e8555	49817fdc-6d6c-4a5d-9e45-5498a27e8555	{"sub": "49817fdc-6d6c-4a5d-9e45-5498a27e8555", "email": "staff008@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:30:18.171944+00	2025-07-06 23:30:18.171991+00	2025-07-06 23:30:18.171991+00	cc8d5047-5d9e-4ebb-a8d4-3ee89c03227a
91f0d641-d8b2-47ef-b164-198f0972d313	91f0d641-d8b2-47ef-b164-198f0972d313	{"sub": "91f0d641-d8b2-47ef-b164-198f0972d313", "email": "staff009@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:30:19.471947+00	2025-07-06 23:30:19.472+00	2025-07-06 23:30:19.472+00	2130a5b6-22f0-4bd0-a8d3-1cbac2e39038
e6b8ae92-b4f3-4717-9efc-d743df2bf28c	e6b8ae92-b4f3-4717-9efc-d743df2bf28c	{"sub": "e6b8ae92-b4f3-4717-9efc-d743df2bf28c", "email": "staff010@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:30:20.743398+00	2025-07-06 23:30:20.743444+00	2025-07-06 23:30:20.743444+00	24fd96b4-1a6c-4201-a209-35f76c84b4f9
a38f3ea2-7acd-48f4-a79f-a25eeaec2d94	a38f3ea2-7acd-48f4-a79f-a25eeaec2d94	{"sub": "a38f3ea2-7acd-48f4-a79f-a25eeaec2d94", "email": "staff011@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:30:22.885291+00	2025-07-06 23:30:22.885349+00	2025-07-06 23:30:22.885349+00	7ef86e58-e8a8-4d00-8566-6404ce031c17
bc6a8258-631b-4b34-8e01-61e7e4ab7f2a	bc6a8258-631b-4b34-8e01-61e7e4ab7f2a	{"sub": "bc6a8258-631b-4b34-8e01-61e7e4ab7f2a", "email": "staff012@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:30:24.22049+00	2025-07-06 23:30:24.220537+00	2025-07-06 23:30:24.220537+00	9009af86-0ef3-40ca-ae9e-a1996d4b0186
17566d57-1e67-435d-a236-20b0d74c6b0d	17566d57-1e67-435d-a236-20b0d74c6b0d	{"sub": "17566d57-1e67-435d-a236-20b0d74c6b0d", "email": "staff013@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:30:25.583915+00	2025-07-06 23:30:25.583964+00	2025-07-06 23:30:25.583964+00	9f967256-015f-4881-92ae-efddf18d400e
f05a5bde-deea-4c06-9398-07c9960aef2c	f05a5bde-deea-4c06-9398-07c9960aef2c	{"sub": "f05a5bde-deea-4c06-9398-07c9960aef2c", "email": "staff014@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:30:26.896684+00	2025-07-06 23:30:26.896734+00	2025-07-06 23:30:26.896734+00	5c1624ee-66d9-4374-ac54-2ed7beda8017
07eb809c-ab0b-4235-b0d7-9d0726ae9340	07eb809c-ab0b-4235-b0d7-9d0726ae9340	{"sub": "07eb809c-ab0b-4235-b0d7-9d0726ae9340", "email": "staff015@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:30:28.17064+00	2025-07-06 23:30:28.170688+00	2025-07-06 23:30:28.170688+00	9d9ae50b-8aba-4394-a00b-42c508e7690e
0e6980f9-2985-431c-b311-4e0538ee213a	0e6980f9-2985-431c-b311-4e0538ee213a	{"sub": "0e6980f9-2985-431c-b311-4e0538ee213a", "email": "staff016@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:30:29.475136+00	2025-07-06 23:30:29.475186+00	2025-07-06 23:30:29.475186+00	8e26e60d-c6ab-49b3-8057-741d239696c1
a17350fc-6190-4acf-ad2f-9b3539c545f4	a17350fc-6190-4acf-ad2f-9b3539c545f4	{"sub": "a17350fc-6190-4acf-ad2f-9b3539c545f4", "email": "staff017@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:30:30.746746+00	2025-07-06 23:30:30.746797+00	2025-07-06 23:30:30.746797+00	a376c099-426a-497a-9e13-b46c79cb11ae
07dc5cce-f102-4237-810f-3f20640bc6d6	07dc5cce-f102-4237-810f-3f20640bc6d6	{"sub": "07dc5cce-f102-4237-810f-3f20640bc6d6", "email": "staff018@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:30:32.182244+00	2025-07-06 23:30:32.182293+00	2025-07-06 23:30:32.182293+00	23032cec-9b21-4089-812b-63440e8d1a92
141223a6-6603-49a9-8f61-7caa6f12cf59	141223a6-6603-49a9-8f61-7caa6f12cf59	{"sub": "141223a6-6603-49a9-8f61-7caa6f12cf59", "email": "staff019@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:30:33.505464+00	2025-07-06 23:30:33.50551+00	2025-07-06 23:30:33.50551+00	f77239bb-0fb3-46df-9cee-b47fca612d1b
396ee654-66e0-4407-b4a5-f8757363c7ac	396ee654-66e0-4407-b4a5-f8757363c7ac	{"sub": "396ee654-66e0-4407-b4a5-f8757363c7ac", "email": "staff020@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:30:34.795196+00	2025-07-06 23:30:34.795242+00	2025-07-06 23:30:34.795242+00	a5f195dc-9123-42da-a431-8b2d0e9e9f41
63b72a63-e5d9-45be-aa99-a7c26ef5d00e	63b72a63-e5d9-45be-aa99-a7c26ef5d00e	{"sub": "63b72a63-e5d9-45be-aa99-a7c26ef5d00e", "email": "staff021@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:30:36.107645+00	2025-07-06 23:30:36.107695+00	2025-07-06 23:30:36.107695+00	6d028e32-8aa2-4ff6-8926-6edb19667a8c
7c99c941-ab16-4b77-b0cd-e240575ee019	7c99c941-ab16-4b77-b0cd-e240575ee019	{"sub": "7c99c941-ab16-4b77-b0cd-e240575ee019", "email": "staff022@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:30:37.387454+00	2025-07-06 23:30:37.387502+00	2025-07-06 23:30:37.387502+00	30fe2329-4a53-4525-beb0-74a31efdfc9b
5898d819-8063-4e9e-aabf-d510dea65708	5898d819-8063-4e9e-aabf-d510dea65708	{"sub": "5898d819-8063-4e9e-aabf-d510dea65708", "email": "staff023@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:30:38.662348+00	2025-07-06 23:30:38.662397+00	2025-07-06 23:30:38.662397+00	652adb24-d884-4f8d-b267-469a7587eb62
e7c03374-717f-4458-8f16-1d0931f87240	e7c03374-717f-4458-8f16-1d0931f87240	{"sub": "e7c03374-717f-4458-8f16-1d0931f87240", "email": "staff024@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:30:39.927388+00	2025-07-06 23:30:39.927435+00	2025-07-06 23:30:39.927435+00	11e8a3f4-6ca0-4b5d-b05b-df7149f815af
0b08f0c8-3c0f-498a-b0f9-796a2e4d3a2a	0b08f0c8-3c0f-498a-b0f9-796a2e4d3a2a	{"sub": "0b08f0c8-3c0f-498a-b0f9-796a2e4d3a2a", "email": "staff025@example.com", "email_verified": false, "phone_verified": false}	email	2025-07-06 23:30:41.248146+00	2025-07-06 23:30:41.248192+00	2025-07-06 23:30:41.248192+00	d5def88b-fa46-4bb1-b5c8-c4377c7b5c84
\.


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.instances (id, uuid, raw_base_config, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.mfa_amr_claims (session_id, created_at, updated_at, authentication_method, id) FROM stdin;
14cf00f4-471e-4a3d-8e18-3f362319faee	2025-07-06 23:03:29.281197+00	2025-07-06 23:03:29.281197+00	password	183353bc-49e2-4a4f-a4ad-3f4f6e9e7b65
1c6d7e52-8395-4319-a153-50f308031b6f	2025-07-06 23:06:26.668579+00	2025-07-06 23:06:26.668579+00	password	ef451992-4af0-4e6d-8411-fb645e38c05f
5e292e13-76e1-4d9a-ae1c-2a16d1495bf5	2025-07-06 23:07:00.713058+00	2025-07-06 23:07:00.713058+00	password	f7e5eee0-db1c-4630-bcdb-8373ca372941
2e2eaee4-40a6-435b-b633-0d614546e540	2025-07-06 23:19:29.599334+00	2025-07-06 23:19:29.599334+00	password	ec22ce34-3333-439e-b25c-da2a8f69e498
a6457166-c302-45e8-a596-4aea4d527b94	2025-07-06 23:19:30.044056+00	2025-07-06 23:19:30.044056+00	password	9307c7df-4d1c-4081-aea3-95874bab3762
fff5a52e-2097-44ad-a250-6abcee4caf28	2025-07-06 23:19:30.422117+00	2025-07-06 23:19:30.422117+00	password	f7a28311-5abc-45c0-b1fc-fb866e297b95
30e55564-0145-4e7a-ae10-3c6c40193b90	2025-07-06 23:19:30.680993+00	2025-07-06 23:19:30.680993+00	password	1f2aeb23-157a-4d4b-83bf-2545ede97e37
701d0baa-5683-4d29-a159-d3cba13a46f2	2025-07-06 23:19:30.948214+00	2025-07-06 23:19:30.948214+00	password	86527a8e-7e7c-4418-af0a-d91d0fc08298
cb58faae-8fbc-4e43-a23f-2e4cc7d149d6	2025-07-06 23:19:31.32717+00	2025-07-06 23:19:31.32717+00	password	66dd2860-11d8-4fbc-9cfe-58168033076e
24db0f9d-3272-4492-85b2-0534a1fcb7f7	2025-07-06 23:19:31.646812+00	2025-07-06 23:19:31.646812+00	password	7f7678d7-1641-4190-8eb2-896b368188eb
b90c6b24-c588-4831-b0a6-ac4fc50acb79	2025-07-06 23:19:32.022219+00	2025-07-06 23:19:32.022219+00	password	e467d090-8629-482a-82d0-a366d170be31
9e111ad1-5670-4bf8-a575-8ee3e1d37832	2025-07-06 23:19:32.397155+00	2025-07-06 23:19:32.397155+00	password	97edf776-74cb-433f-b7a0-beb804f62fc1
ace83962-60a7-48c0-b3c8-4a55aca15b10	2025-07-06 23:19:32.654025+00	2025-07-06 23:19:32.654025+00	password	bc5131b2-2a2c-44f2-98a4-6e3e21936934
77f204ba-6199-44c1-a936-129c6915a862	2025-07-06 23:19:32.936628+00	2025-07-06 23:19:32.936628+00	password	a6b850f9-ade4-44f2-aab7-4379077ce044
1c0cc52c-bd58-4781-846c-3a8ed3f6ee83	2025-07-06 23:19:33.228671+00	2025-07-06 23:19:33.228671+00	password	c556f4f8-860c-4910-a613-58f8d2d17d5b
7751cb91-220d-407f-9abb-1bd5248be93c	2025-07-06 23:19:33.593751+00	2025-07-06 23:19:33.593751+00	password	6afb8be6-ed0b-45c8-9575-bdf031f13d25
abe0ca13-7bbd-4a28-83f8-fd606388c08f	2025-07-06 23:19:33.871873+00	2025-07-06 23:19:33.871873+00	password	dc377e01-b92c-4a0a-91b3-1c79466da7b4
7531c0d3-e4d7-4343-a084-409a3d9b884b	2025-07-06 23:19:34.23754+00	2025-07-06 23:19:34.23754+00	password	7d2fb590-d220-470b-ac2e-4d823615ef38
579dd5ce-3422-4937-947a-f2cda91923b8	2025-07-06 23:19:34.644506+00	2025-07-06 23:19:34.644506+00	password	d3bda3fa-b28d-4086-86d1-b5807f49fe12
f9c2b4ac-66b0-45f4-9816-8cb46e68e06a	2025-07-06 23:19:34.985209+00	2025-07-06 23:19:34.985209+00	password	19691e99-4df3-44ac-a258-9fb560f8bee9
04219cb8-42e6-4899-b6eb-f240a633ab3c	2025-07-06 23:19:35.231875+00	2025-07-06 23:19:35.231875+00	password	289dfc11-de54-43c3-9777-702de4f1d3a1
bc49a365-bb8e-4ea7-8235-d072fd9522b3	2025-07-06 23:19:35.511899+00	2025-07-06 23:19:35.511899+00	password	0ddc62bd-92cb-4a59-88f8-8939c3e16572
9f08aff5-20da-4c9d-b0f8-07af263167e6	2025-07-06 23:19:35.769181+00	2025-07-06 23:19:35.769181+00	password	5a5a2ee8-b9d5-4ffb-b09d-a816849c49fd
8c66df02-9fe2-4084-9682-e9186101df9f	2025-07-06 23:19:36.037426+00	2025-07-06 23:19:36.037426+00	password	3cb1572d-437c-46cb-a4b0-98769ffd9f70
69f24172-8296-4054-a025-b7516bb8da1d	2025-07-06 23:19:36.305225+00	2025-07-06 23:19:36.305225+00	password	b699d9e6-2dcb-4f2b-af3b-2405de9cd627
78e66d83-c16e-427a-a6e4-8e8414d9df95	2025-07-06 23:19:36.711722+00	2025-07-06 23:19:36.711722+00	password	c64a502a-92bc-4ec2-b893-a965a90bcf5b
e4acbf67-be9f-4d91-87b8-71883d76ef98	2025-07-06 23:19:36.968277+00	2025-07-06 23:19:36.968277+00	password	8f79e72a-a700-49f5-8273-e370285c21f4
fa68866c-7faa-4766-a84f-ac41fe4ec7fe	2025-07-06 23:19:37.241696+00	2025-07-06 23:19:37.241696+00	password	b8dd141b-7c16-4466-8613-968500fb37db
693ec374-2091-4d37-a0f3-07c65b28c835	2025-07-06 23:19:37.490751+00	2025-07-06 23:19:37.490751+00	password	d40f9465-8725-43d9-a406-7e827fd638a4
f7593c4b-f70d-4b9c-9e41-2bb84c4ba0c7	2025-07-06 23:19:37.752631+00	2025-07-06 23:19:37.752631+00	password	192f595d-3635-4a9d-a1dd-1339cd531ef2
76eeae7f-d055-40b6-9731-59b6409827da	2025-07-06 23:19:38.052121+00	2025-07-06 23:19:38.052121+00	password	160a97ca-0d94-46c6-aa83-30de5ccd1622
80a39010-afa6-4872-ab93-e59004ed7e28	2025-07-06 23:19:38.310769+00	2025-07-06 23:19:38.310769+00	password	f8cd1eb2-a978-4b20-9e73-2c3d013bd600
c8e1fa7b-6dc7-4701-9425-154975707e5b	2025-07-06 23:19:38.601294+00	2025-07-06 23:19:38.601294+00	password	88b7d025-9201-4475-a711-ec9b09f1652a
0bf59029-2932-4415-940a-4a2e93ff3ac9	2025-07-06 23:19:39.665346+00	2025-07-06 23:19:39.665346+00	password	63bd67c0-abe8-4d61-abd9-afa769e59283
e8d5b2c3-47ef-4c15-a773-7f84f13ec33a	2025-07-06 23:19:49.605167+00	2025-07-06 23:19:49.605167+00	password	b3368d60-79c9-410d-810f-af8ad509bd9c
30d41a52-75c1-4114-b8da-f084787d47e3	2025-07-06 23:28:30.729689+00	2025-07-06 23:28:30.729689+00	password	ee04f31f-b075-4472-bf91-9597e466a7cd
1c7fd618-f842-4fde-9a7e-b42e59e58165	2025-07-06 23:28:32.037109+00	2025-07-06 23:28:32.037109+00	password	9ccf585c-9a52-456f-ac5e-a1c3554b1d93
8e87ecae-d08e-4088-a3bc-4dece327fade	2025-07-06 23:28:33.32851+00	2025-07-06 23:28:33.32851+00	password	147bbdc6-2358-4d84-a546-7aee709b23e7
6c3a0661-843a-4818-881e-0eb95753282b	2025-07-06 23:28:34.582843+00	2025-07-06 23:28:34.582843+00	password	ca98869e-dca0-4a9c-ae97-f403039d94c7
714e53a1-8a1f-477f-9369-6ab8eee1f7c6	2025-07-06 23:28:35.879838+00	2025-07-06 23:28:35.879838+00	password	2916ef54-9855-4cff-b642-b46c324df78e
1672e6f8-9dce-4cea-b886-692dcc1cc8c8	2025-07-06 23:28:38.497982+00	2025-07-06 23:28:38.497982+00	password	1b7409c3-51a7-41b9-976b-5f0895e70b93
a6a5d091-0749-4497-8617-67578017c7e5	2025-07-06 23:28:39.753766+00	2025-07-06 23:28:39.753766+00	password	4f9517a3-94fc-4850-ba22-abc2a503aa07
fbf12d3d-a46c-438b-8292-48eea52121df	2025-07-06 23:28:41.006452+00	2025-07-06 23:28:41.006452+00	password	96393d2d-fba3-4e33-9e86-f579ee605813
14b932ed-997e-4fc6-a24f-dcd97db964cf	2025-07-06 23:28:42.291481+00	2025-07-06 23:28:42.291481+00	password	cb476ca4-7d7f-4f1f-b456-ba38358c30b3
b5022eb9-c1eb-4b52-afa5-44a0ed0ededf	2025-07-06 23:28:43.572858+00	2025-07-06 23:28:43.572858+00	password	d20dc92b-7f1e-4fd0-a634-9542ae59cebe
f229704e-262f-4635-bd82-55b15b19e252	2025-07-06 23:28:44.899861+00	2025-07-06 23:28:44.899861+00	password	4fbf3b77-d26d-4e76-9f83-13a9e9fb6054
89e59692-4b3b-4463-8fcc-9a46c6b74198	2025-07-06 23:28:46.162252+00	2025-07-06 23:28:46.162252+00	password	7fa76ddf-8f2b-4f1e-b520-e5b6192cbe99
5b3e76fd-a5ec-4c46-bbe7-268533ff849f	2025-07-06 23:28:47.457083+00	2025-07-06 23:28:47.457083+00	password	261b5fee-35c2-49a0-9d45-7380952df739
6f13ac2c-401d-4a4c-b3c8-119e62a034f8	2025-07-06 23:28:48.757767+00	2025-07-06 23:28:48.757767+00	password	ca004abc-8580-4716-a486-5735fee0d2a9
36a6968f-e1d8-44a9-abe0-dda6cb60c0d6	2025-07-06 23:28:50.095104+00	2025-07-06 23:28:50.095104+00	password	3d03e60a-1e74-4438-981a-555212be55c5
c4648124-47f0-47b8-b4db-2ea48aeb24cb	2025-07-06 23:28:51.332201+00	2025-07-06 23:28:51.332201+00	password	02800e9e-a4e9-4657-a832-bc36ac0c8707
b80c6b18-0768-4885-9601-0a98b27febbd	2025-07-06 23:28:52.622779+00	2025-07-06 23:28:52.622779+00	password	874d139d-c8d5-45f0-b648-baf458c5bbc7
53dba4e1-5f29-4948-b50a-af0026425713	2025-07-06 23:28:53.919548+00	2025-07-06 23:28:53.919548+00	password	6757d1a9-1cbf-4874-8a4d-ae18361016d6
ff377001-34f5-48e2-906b-0edc140a48cd	2025-07-06 23:28:55.22077+00	2025-07-06 23:28:55.22077+00	password	63599762-12cf-483f-914a-ab4a1c8248c7
1e27ce4a-ac19-46ad-9d22-6157e25fd591	2025-07-06 23:28:56.509048+00	2025-07-06 23:28:56.509048+00	password	1378eb18-121c-4814-b6fc-b660b53760de
c44fdfb7-614d-4895-9887-d19be62ab109	2025-07-06 23:28:57.796515+00	2025-07-06 23:28:57.796515+00	password	1c6122da-2a15-4e2c-bf8a-a9dc566318e2
6a9079e4-ac09-4cca-8abf-516d2606ff3e	2025-07-06 23:28:59.14374+00	2025-07-06 23:28:59.14374+00	password	2f63e5df-ff35-4678-9c67-f58f4451b36a
51eece24-596c-4774-a1aa-c80a2e0e5992	2025-07-06 23:29:00.462105+00	2025-07-06 23:29:00.462105+00	password	8c0cf576-7aad-4f6a-ae25-34a784154929
b9dae8c0-6604-4d58-979c-03c75ee5f89a	2025-07-06 23:29:01.711954+00	2025-07-06 23:29:01.711954+00	password	a6c0486e-62dc-4af0-a4fa-cfff2fb5df08
e93c3d9e-1a48-4fbb-be0a-eb7d5935857d	2025-07-06 23:29:02.973052+00	2025-07-06 23:29:02.973052+00	password	8e837e12-4054-48b8-8c54-a7ddb19bea01
151f1108-3436-4e7d-9162-51e81a100bb6	2025-07-06 23:29:04.260735+00	2025-07-06 23:29:04.260735+00	password	f4730bba-41ce-41a7-8cef-81dcb6917311
673453f4-99ed-474c-804f-2d892e91df4e	2025-07-06 23:29:05.565693+00	2025-07-06 23:29:05.565693+00	password	227d7bd0-ad81-4a95-a070-21362b5ec861
f521eafc-3eac-4858-a631-2f79dd0c1fdd	2025-07-06 23:29:06.840462+00	2025-07-06 23:29:06.840462+00	password	23db2992-1d91-412a-8e9b-8e522e492a91
720a8164-ecac-4b8d-b6fd-1b281a6a1782	2025-07-06 23:29:08.147881+00	2025-07-06 23:29:08.147881+00	password	47f5b20b-a613-49a0-b428-ed4fe5c00f0a
7c1220f3-3f91-4e20-83dd-b610fb55dc83	2025-07-06 23:29:09.402017+00	2025-07-06 23:29:09.402017+00	password	2ae5555a-9aa7-4f73-a5d2-fd9ca1844145
790ea3a3-f806-4de2-82cb-8195e1faad55	2025-07-06 23:29:10.709008+00	2025-07-06 23:29:10.709008+00	password	7d813695-e0a1-4815-acba-436fcac5d1e4
35128808-d5ba-4fc0-9f55-356d42a96db9	2025-07-06 23:29:12.024511+00	2025-07-06 23:29:12.024511+00	password	c3c43c26-5c2e-4c1c-8624-d8549833f275
c812bf57-60cd-4a97-a4f4-ba7f20623786	2025-07-06 23:29:13.337826+00	2025-07-06 23:29:13.337826+00	password	cfd0f271-e20c-4b4d-a516-4051110de9c6
58cf10a3-ce68-4997-8035-ef429007d911	2025-07-06 23:29:14.632726+00	2025-07-06 23:29:14.632726+00	password	dc14500e-9e57-4a74-85c3-c5f770a5bbf3
ba245ff4-77e7-4463-8602-79df45fdf223	2025-07-06 23:29:17.109822+00	2025-07-06 23:29:17.109822+00	password	566b123a-e9c4-4f54-8c5a-0eb6febb28ec
f70b6f9f-738a-4abf-8a5c-788d172db684	2025-07-06 23:29:18.383873+00	2025-07-06 23:29:18.383873+00	password	e72c2fc0-4ca9-4409-8880-dcb3db50b2b3
3045437e-21ac-4b57-a0ea-ba96a9e58b52	2025-07-06 23:29:19.695107+00	2025-07-06 23:29:19.695107+00	password	1466034a-2d26-4766-a8be-cb0aa8cc187e
8a144375-065d-47b6-aecc-51a29ccb8914	2025-07-06 23:29:21.61742+00	2025-07-06 23:29:21.61742+00	password	cd10cce6-595d-440b-9f56-52db12459270
19ea455e-03bc-403a-b35e-23c03fa09dc5	2025-07-06 23:29:23.193339+00	2025-07-06 23:29:23.193339+00	password	5415967e-6884-4df2-86e0-13b4496d3014
a163b46e-af1c-4448-89e5-c46d59f0b1ee	2025-07-06 23:29:24.914997+00	2025-07-06 23:29:24.914997+00	password	fb9ec642-7140-42ea-9b76-bb4531aadba6
6f9b480d-d7d5-4963-966f-4f155239f756	2025-07-06 23:29:26.182746+00	2025-07-06 23:29:26.182746+00	password	9b729850-1d37-4c5c-bb91-d3f1efbf6727
089853a7-edaa-4ad6-91f1-8af28cfd8706	2025-07-06 23:29:27.494456+00	2025-07-06 23:29:27.494456+00	password	2370c4a9-30ff-44d9-8e82-29543d7bf681
d6db6ee0-9cf5-43cb-9b72-276c3cd67f33	2025-07-06 23:29:28.816965+00	2025-07-06 23:29:28.816965+00	password	99f9f87c-337d-42d2-8ccf-7f6495f5bf5a
317e8cde-30dd-4af3-90ba-c35eb8535453	2025-07-06 23:29:30.112911+00	2025-07-06 23:29:30.112911+00	password	ae8d7871-d3c4-4805-bac1-dced4d220d7f
dc69870b-11a6-4daa-817d-6892cf689de7	2025-07-06 23:29:31.377233+00	2025-07-06 23:29:31.377233+00	password	45131f6d-449b-4470-bb5b-ad7ca0948233
219752a5-8a63-4813-959a-8daf685e5270	2025-07-06 23:29:32.678214+00	2025-07-06 23:29:32.678214+00	password	a7d334f4-3ba5-47e7-9193-ceaaf240c484
cb5131cb-603e-4080-aaae-3d3966ad2f9c	2025-07-06 23:29:34.535396+00	2025-07-06 23:29:34.535396+00	password	da6dc240-e9a9-49e6-8c83-10bbfb40e306
8d6dff1e-8685-4851-a6f3-cc2a441cf45b	2025-07-06 23:29:36.479207+00	2025-07-06 23:29:36.479207+00	password	79c24313-5740-4a89-8f85-10d8aefc50cf
a5da2c85-e197-4386-8bea-3fb3f3db27b0	2025-07-06 23:29:38.609695+00	2025-07-06 23:29:38.609695+00	password	1af70852-ab18-4c9e-b523-fb4a238d3f3e
756f2613-7e1c-4734-82f6-7bf465824a9d	2025-07-06 23:29:39.955246+00	2025-07-06 23:29:39.955246+00	password	70a692a6-4585-49c7-a181-fd4b03cfda44
2ad80b65-c494-471b-b792-4d6cea6e8a2e	2025-07-06 23:29:41.241701+00	2025-07-06 23:29:41.241701+00	password	fe9bd9e2-2acf-43d1-8e22-366de0ec0427
2db71b5e-714a-4288-bd17-7dbf33592583	2025-07-06 23:29:42.527279+00	2025-07-06 23:29:42.527279+00	password	feb0184f-6766-46c8-bb08-a7001c61fb07
2efda568-80d4-497e-a59d-2cdaa2749c14	2025-07-06 23:29:43.848852+00	2025-07-06 23:29:43.848852+00	password	d47e5ad0-641e-4104-9dc3-e93eadd4db36
5f429e59-cd15-48b4-bc8b-59d01cdb3f70	2025-07-06 23:29:45.302781+00	2025-07-06 23:29:45.302781+00	password	05d8a5f4-8d1b-4a88-a436-571de0390b17
373f9206-c331-4d3f-8676-29b6d943f8eb	2025-07-06 23:29:47.098641+00	2025-07-06 23:29:47.098641+00	password	d83c883c-cdca-4e7e-af1c-980c46882a88
46821fea-4478-47ea-9d1c-17e048069c0e	2025-07-06 23:29:48.402336+00	2025-07-06 23:29:48.402336+00	password	9cb4af37-e114-4c44-9b17-c7a62baa984d
d60db3a8-a45d-4a60-90d0-7019a9ade487	2025-07-06 23:29:49.669069+00	2025-07-06 23:29:49.669069+00	password	98992e29-629c-4bef-8a21-bbb9d3cfde31
83576323-89f0-4f0f-bfe0-7453b88668a6	2025-07-06 23:29:50.992464+00	2025-07-06 23:29:50.992464+00	password	b5e0218a-4260-44b8-a86d-b271adbe4cf7
31764dff-4094-4be1-a203-57fb5abea8f2	2025-07-06 23:29:52.294112+00	2025-07-06 23:29:52.294112+00	password	c78be3ff-d0ec-401f-95f7-08db4a7b9a3d
ee642004-0641-4ec9-a50a-1876b1424565	2025-07-06 23:29:53.560105+00	2025-07-06 23:29:53.560105+00	password	483adbbb-8887-46f6-a0e8-13651c57462a
bfe9c634-9614-40b8-bc1a-a284efcc3966	2025-07-06 23:29:54.827424+00	2025-07-06 23:29:54.827424+00	password	64d71981-0076-495f-b334-1f80c843b762
6d53e14b-2338-4646-bdd2-054c7c6d4e3a	2025-07-06 23:29:56.144387+00	2025-07-06 23:29:56.144387+00	password	0c29c920-0b5e-44f2-8910-e874f4da2e57
8c15c141-ae58-48a7-a3b0-e3336dbc9c93	2025-07-06 23:29:57.425439+00	2025-07-06 23:29:57.425439+00	password	6ad0595b-fdeb-4ce1-bc9b-604e2f4fa184
54808bf4-29bf-458b-9f2d-ea9bb47e26ef	2025-07-06 23:29:58.69153+00	2025-07-06 23:29:58.69153+00	password	3ddda889-185e-4c9b-b2a3-ef00ab9cc30a
b0463435-0b0c-4054-832b-d1dc19c90837	2025-07-06 23:30:00.018572+00	2025-07-06 23:30:00.018572+00	password	e02556c1-ea48-4753-aa1f-a18c8ea3455a
945c2aaf-6421-425e-9cd3-23db7e517d38	2025-07-06 23:30:02.54878+00	2025-07-06 23:30:02.54878+00	password	7ff8bbb5-ce4a-4ba6-a7b0-544b37dae853
dae8638a-2ac5-4962-9636-bb05779faf61	2025-07-06 23:30:03.838548+00	2025-07-06 23:30:03.838548+00	password	aaf51cf4-be3a-4867-b4f1-2fd272bdbf26
6369e92a-399e-4f60-ae6c-8159c3732eaa	2025-07-06 23:30:05.175034+00	2025-07-06 23:30:05.175034+00	password	bb4df9e6-01b8-4a5d-8d25-3121fd9d3be4
56cf5531-5295-46b0-a048-e2fc13ad9aee	2025-07-06 23:30:06.47815+00	2025-07-06 23:30:06.47815+00	password	f69d9e84-4fc5-4675-9336-81df46307f10
7c58e2c6-741b-4a3e-b146-e9da22269405	2025-07-06 23:30:07.765023+00	2025-07-06 23:30:07.765023+00	password	552fde12-db4b-4f68-b5c9-5ff061255d30
cf51983a-1142-480a-8638-2f0982c50b9a	2025-07-06 23:30:09.341193+00	2025-07-06 23:30:09.341193+00	password	11474462-d252-4164-80d3-8a67171d5a87
48c6ae3d-46b5-49a7-9c69-2a55b25ee04c	2025-07-06 23:30:10.789726+00	2025-07-06 23:30:10.789726+00	password	77648926-ef4c-448a-8766-f53ffb420445
e97e70df-7eb0-4844-a982-18c10f750500	2025-07-06 23:30:12.092482+00	2025-07-06 23:30:12.092482+00	password	9608a0aa-aa5c-4519-9853-dbd1a45c0626
9ce4afa4-53c2-4389-b2e1-6dfddb192e35	2025-07-06 23:30:15.37112+00	2025-07-06 23:30:15.37112+00	password	18ce55b8-cdcd-4363-bdcb-5266106caebd
f0b0fc79-a347-441d-93e4-2d652599a389	2025-07-06 23:30:16.918481+00	2025-07-06 23:30:16.918481+00	password	c447bf98-19b4-4b55-b167-0ee55d3fbb5e
fcb2b117-7aa7-4d10-b45f-3905099bdaa3	2025-07-06 23:30:18.180379+00	2025-07-06 23:30:18.180379+00	password	0e07959e-7c35-4130-a3b1-4d53b55f216f
5f790aa5-8b47-4761-a332-8ebd7c092486	2025-07-06 23:30:19.479904+00	2025-07-06 23:30:19.479904+00	password	24f5ce2d-6a1e-42ad-af87-2b3e0271ced5
043280c3-bc64-496a-a490-672e98df8def	2025-07-06 23:30:20.750525+00	2025-07-06 23:30:20.750525+00	password	1a9d8c84-1007-4f14-9aa9-4c15c4412b9f
8e23e621-0309-4f93-bafa-90c06cb16418	2025-07-06 23:30:22.892794+00	2025-07-06 23:30:22.892794+00	password	740279dc-e7bb-4031-acdd-721aa0ffdb52
9861486d-c563-4c27-ac06-f493cc0aaab6	2025-07-06 23:30:24.228876+00	2025-07-06 23:30:24.228876+00	password	d16fd9b1-c60d-4e08-8376-21930d0f0cfc
1b7df1ae-f8f9-42c6-87fc-66a63ee79fb1	2025-07-06 23:30:25.591339+00	2025-07-06 23:30:25.591339+00	password	4163ec69-215e-4c8b-bcad-823a75153963
5d039c7e-640f-4136-a3d7-2b38001e2e84	2025-07-06 23:30:26.904212+00	2025-07-06 23:30:26.904212+00	password	7aeed3b3-bc2e-432a-854e-971b7fde4b51
6db947e6-7f8d-4c08-baa4-ac6bf091ed7d	2025-07-06 23:30:28.177996+00	2025-07-06 23:30:28.177996+00	password	3f0d3773-173a-497d-9718-cacba5939477
a172f4cc-58f2-40f1-8816-d7bb33ece973	2025-07-06 23:30:29.482509+00	2025-07-06 23:30:29.482509+00	password	4fea8bba-076f-4378-b9ae-76081e53dc5d
cd0cced3-e5f8-4960-a101-2142d2bbe496	2025-07-06 23:30:30.754315+00	2025-07-06 23:30:30.754315+00	password	6e642bd9-32ba-4dbc-9eb7-70ba043a2324
85bb808b-6596-4b8a-93aa-ab22cc5720e8	2025-07-06 23:30:32.189367+00	2025-07-06 23:30:32.189367+00	password	33af62ae-622f-4c8c-b81d-72d4e2cf2b93
7f9ea083-d927-4480-8cda-1d324f0a0f95	2025-07-06 23:30:33.513053+00	2025-07-06 23:30:33.513053+00	password	ad43d967-9f92-4f89-b81f-ec55ddcb2ee9
220793b5-9358-45b9-b395-4aded7d441d3	2025-07-06 23:30:34.8028+00	2025-07-06 23:30:34.8028+00	password	a8c85dc6-8b96-40aa-a9d0-85c23a5cb602
a6d74574-b064-4118-9929-87b04c5cdceb	2025-07-06 23:30:36.115642+00	2025-07-06 23:30:36.115642+00	password	16f20fbf-f510-4145-adff-5d9d05d6dfde
e0c1c3ec-1c77-4a5a-b3a5-72b7f434b9be	2025-07-06 23:30:37.394826+00	2025-07-06 23:30:37.394826+00	password	da86192e-a89a-48aa-a92e-daa8d13bb443
002b7c86-3c1f-41ee-a1de-7a7f4c8567c7	2025-07-06 23:30:38.669993+00	2025-07-06 23:30:38.669993+00	password	4b4b52c9-e0e6-45e2-9075-f3077bc21852
89a6cf39-f1e1-49ef-b1b4-eae9e77a0123	2025-07-06 23:30:39.934469+00	2025-07-06 23:30:39.934469+00	password	d230c55f-8378-49ee-bc33-065046408e8e
5da3bb73-a05e-4439-b05d-b9906c427b2e	2025-07-06 23:30:41.256822+00	2025-07-06 23:30:41.256822+00	password	d8c26e6e-de1e-4e32-8421-d9af765c02c5
2533aaa6-a09d-493b-86b6-bba65fe0beff	2025-07-06 23:32:18.599126+00	2025-07-06 23:32:18.599126+00	password	bc90ffe6-4797-4693-a1fc-8004b06c2b6e
8dbb094d-aa7d-4940-bf03-b27836c63e4f	2025-07-06 23:33:50.528178+00	2025-07-06 23:33:50.528178+00	password	a37a8a7f-d94f-451f-9c7c-9e63728bd933
8924fa09-e9af-4c71-8f7f-73aeab358745	2025-07-06 23:35:05.601456+00	2025-07-06 23:35:05.601456+00	password	3a5888f1-02d1-4b71-8389-f0f428d5ad71
12329c7f-87f6-4b5b-b0ba-6e82f2a320c4	2025-07-08 19:45:02.764148+00	2025-07-08 19:45:02.764148+00	password	bc0ca5ae-77af-4a19-8c1e-c151d55e3684
264954fc-7f2d-4bea-9160-b9fa5d45880c	2025-07-08 19:49:06.34384+00	2025-07-08 19:49:06.34384+00	password	14127322-960c-4ee9-a7ab-6b4263ebb344
fd6d720d-e832-4467-9cad-d6779dd976e1	2025-07-08 19:49:08.555339+00	2025-07-08 19:49:08.555339+00	password	2f2e101d-38d0-4980-80fc-781778e323ec
45a92eba-8240-4131-948b-1c34510adb67	2025-07-08 19:49:34.30262+00	2025-07-08 19:49:34.30262+00	password	cea4b8ec-a493-437d-ac08-536248eb4077
c2573d4b-4d19-4ba2-80c1-2adad8b439fa	2025-07-08 19:49:43.233347+00	2025-07-08 19:49:43.233347+00	password	575a2e6d-3467-4a78-b386-d80c2471e6e6
7a589885-59a7-421d-98a9-33eb3db725bf	2025-07-08 19:50:06.816859+00	2025-07-08 19:50:06.816859+00	password	d9d0ef28-8a62-45f3-8cd1-776c066e6589
7e10202e-f611-49ca-9d72-18f871f68d2e	2025-07-08 19:51:06.931298+00	2025-07-08 19:51:06.931298+00	password	2166600e-b418-4dc6-b3dc-b962af98c663
e6b67609-35cd-4ee6-bf02-0f5419912646	2025-07-08 19:52:44.272832+00	2025-07-08 19:52:44.272832+00	password	2da9b8dd-ad7c-420f-b3a2-ffd26ed5c888
bb5cc1a4-7b7e-4abb-949b-8f74ca395741	2025-07-08 19:53:05.784434+00	2025-07-08 19:53:05.784434+00	password	16efbbf9-ceaa-4a2f-9a1e-800a885dbfb4
b9082d41-42cf-496a-bd06-b025b0b46ba6	2025-07-08 19:53:22.901228+00	2025-07-08 19:53:22.901228+00	password	f7a27f6c-a1bc-4282-be20-57dbfc49b45d
29afafed-fa1d-4f91-8c0c-77fab4f0f416	2025-07-08 19:55:03.142265+00	2025-07-08 19:55:03.142265+00	password	ba8015a3-2762-428d-9bd7-889818539212
460ec79e-15a3-404d-963b-10d63a84cd9e	2025-07-08 19:56:07.530861+00	2025-07-08 19:56:07.530861+00	password	e53bc0e4-e52f-4d59-9836-9c9a26c6cbd4
f65ff8af-05b2-46a0-baa3-5678815f6f6a	2025-07-08 20:53:18.075548+00	2025-07-08 20:53:18.075548+00	password	6cb8d3b8-b1b3-475e-89ef-fa8084344b70
f42d638b-a030-4e34-8345-5ae6c6c6dfce	2025-07-08 21:44:26.300249+00	2025-07-08 21:44:26.300249+00	password	8e1ed4bf-e8b2-406e-97f2-3312d53d7df5
c0bdcab2-8bb7-4cae-a0fa-554a422cfa99	2025-07-09 07:59:45.45517+00	2025-07-09 07:59:45.45517+00	password	105280eb-61c2-4dcf-8cc1-54e07fb78228
eb839424-97f6-47eb-b4a0-25c0a07e77e5	2025-07-09 07:59:45.473231+00	2025-07-09 07:59:45.473231+00	password	393bb999-f360-4116-aaf8-940d9b02ae74
a315791a-bf8f-4f6c-ac3a-103e3420c246	2025-07-09 08:00:46.513917+00	2025-07-09 08:00:46.513917+00	password	fe349ccf-2788-4974-b96b-46f015dc80e7
0d3f8ecb-92a8-4b8b-8783-8b5fe30f4c67	2025-07-09 08:00:47.931795+00	2025-07-09 08:00:47.931795+00	password	fb2024db-b362-4b01-a1ca-9e9b5d32f550
a3efb9f1-12b5-4289-981c-712f233e9970	2025-07-09 08:03:02.724017+00	2025-07-09 08:03:02.724017+00	password	82f9e454-b2ca-40cd-9e0c-75e18e6c4537
436dc88c-96bc-4232-9396-1b357e8eda00	2025-07-09 08:10:05.7+00	2025-07-09 08:10:05.7+00	password	231ca3f4-4ac4-4ef7-b257-d6b3d124a811
cba58655-1789-4b51-9830-5b0f34322325	2025-07-09 08:11:04.343804+00	2025-07-09 08:11:04.343804+00	password	495a983e-1058-465c-bbeb-56b413d151eb
3dcb7ae4-f0b3-4d26-b27f-9b38683f63b7	2025-07-09 08:26:23.639072+00	2025-07-09 08:26:23.639072+00	password	aff4b174-3269-4f00-b46f-6d6c66bc7298
31e176f0-4f2d-49a7-b1f7-c52fbd9239a8	2025-07-09 08:26:23.782395+00	2025-07-09 08:26:23.782395+00	password	7c5de4d3-cf97-4c59-bb2b-1b5e52107f6c
f3247182-481a-403f-9e80-11c13e90bb6f	2025-07-09 08:26:52.467983+00	2025-07-09 08:26:52.467983+00	password	cddf1b6c-3345-48f9-a664-b1e55fc9e22b
b68abd87-359e-41ad-913d-04d2a59fc604	2025-07-09 10:03:46.944712+00	2025-07-09 10:03:46.944712+00	password	067e49ed-6d65-4c87-b37e-20dc3ff2c7f8
51967b86-75df-448d-b63f-cd385ae469a5	2025-07-09 10:03:47.761804+00	2025-07-09 10:03:47.761804+00	password	a24bd7ca-9246-45ad-a7f3-52a02f189e61
c4856b3d-2302-4e42-8dce-da6da314d17a	2025-07-09 10:14:25.562974+00	2025-07-09 10:14:25.562974+00	password	f938a43b-b143-4c50-9196-bea9c95a341c
aeed4fcb-c9b8-4365-8d28-22231fd5d0df	2025-07-09 13:47:09.55462+00	2025-07-09 13:47:09.55462+00	password	f8fb0c40-2553-4fff-af40-0bcc4886160b
c0e04e4a-84e7-4553-b303-10b90b92efb2	2025-07-09 13:47:11.228991+00	2025-07-09 13:47:11.228991+00	password	58d5f851-38c0-4191-881a-df7a81aef58a
dc237747-aaa5-4ffb-ba1a-8a56fbc73ac4	2025-07-09 13:47:27.691142+00	2025-07-09 13:47:27.691142+00	password	e5b50df9-0d05-40ee-bff1-50e09c05ec0a
93a321fc-eaf4-40c6-8584-186ae381ab5f	2025-07-09 13:47:27.733589+00	2025-07-09 13:47:27.733589+00	password	897f9cde-1f5a-4148-8fd7-c90607e3af61
dc443ad9-2f90-461a-aaf5-caaab292b40f	2025-07-09 13:47:29.006022+00	2025-07-09 13:47:29.006022+00	password	57462c68-2979-41b7-95e5-60ae073461ec
6693e873-441f-444e-ae5c-36a9074f6d13	2025-07-09 13:47:31.290767+00	2025-07-09 13:47:31.290767+00	password	a20292a6-1f18-4de5-a333-cc2eadf3fb7b
e4c81172-1ba0-4e2a-9e88-e0ed1a37040c	2025-07-09 15:12:30.435015+00	2025-07-09 15:12:30.435015+00	password	0cf91fc5-9fdf-48ce-9070-d6f4616658d5
d4394681-d543-4739-ade7-33eddc29a294	2025-07-09 15:14:39.178647+00	2025-07-09 15:14:39.178647+00	password	6c8ea02b-6a8c-4473-8233-c8e6533f63ed
fb5a6268-8631-4e76-8a07-1b4e3dc8a752	2025-07-09 15:14:39.415375+00	2025-07-09 15:14:39.415375+00	password	86ee45a3-6f5c-4b77-8073-43727a1cd370
d80ee8fc-2b58-4422-bc0b-b56002eae811	2025-07-09 15:14:46.839561+00	2025-07-09 15:14:46.839561+00	password	3fea04b5-b580-461c-824e-c69c08b4364a
c1568700-b2ec-4a6c-878a-4090588218dd	2025-07-09 17:27:54.516105+00	2025-07-09 17:27:54.516105+00	password	2f3d97a1-7244-438c-88fb-8a99dd9aa165
c3f4f675-1682-47a4-8514-6280b3db3d4a	2025-07-09 17:27:55.800977+00	2025-07-09 17:27:55.800977+00	password	6b9310b7-99a2-4c0d-9623-67e369ea624d
15fa3a5a-e903-4acd-a4c5-76997800b78f	2025-07-09 17:28:44.561201+00	2025-07-09 17:28:44.561201+00	password	f0ef1afe-2e15-403b-b3c9-098494e49068
6099d0cd-a3f3-494b-8f16-67d5d73e78bc	2025-07-09 17:29:58.689325+00	2025-07-09 17:29:58.689325+00	password	ebd9f8ab-4038-4189-884e-978299839934
1bea534c-d7e4-481f-8dc6-07d58388077d	2025-07-10 09:06:53.272248+00	2025-07-10 09:06:53.272248+00	password	ee0ae70e-63d7-4927-9780-8be19ed4d414
d9216698-bdfe-44e8-9443-0260399faba5	2025-07-10 09:06:54.049644+00	2025-07-10 09:06:54.049644+00	password	729ddb8f-cdbd-4964-8932-47775c629058
7271dce2-f1d6-4cea-859b-62dd0b2a6a81	2025-07-10 09:26:40.558856+00	2025-07-10 09:26:40.558856+00	password	782337d5-50af-4ff4-bf0a-4e9eb8e7d4a9
20ad66b1-797a-4e58-ad15-ea4bc952bd87	2025-07-10 09:26:41.784199+00	2025-07-10 09:26:41.784199+00	password	20b797d2-c608-4779-a803-fbef2e2484e4
c3555530-b1de-4775-8139-79dc50640b9b	2025-07-10 13:55:58.354892+00	2025-07-10 13:55:58.354892+00	password	5cda577e-d153-4181-b6ed-dcb8e1d943b2
23e4ab7a-0f3a-4544-899f-48a2f938ea99	2025-07-10 13:57:02.451525+00	2025-07-10 13:57:02.451525+00	password	52bc0688-29b8-4aaa-b99c-012affe8dfda
49490ff1-565f-4431-af17-250118550037	2025-07-10 13:57:03.530765+00	2025-07-10 13:57:03.530765+00	password	5a02da81-318a-496a-a571-e412277aec06
7a7b9f23-3233-498b-9e4d-507c8f139f91	2025-07-10 16:10:43.621253+00	2025-07-10 16:10:43.621253+00	password	8e99a55c-cce4-40c2-8d9b-f66fdd79b997
1ec9ff5a-31e0-4b47-9a9a-71d883ee808a	2025-07-10 16:10:45.504184+00	2025-07-10 16:10:45.504184+00	password	1f4bc509-300b-4d06-9aef-686d5e54f514
b5f78b1f-fcbe-4d41-aeef-f4cd1fb6ccd8	2025-07-10 16:16:21.166155+00	2025-07-10 16:16:21.166155+00	password	30fbb788-f5a4-418b-bada-714836df7bc7
6836b3d0-0638-4350-9c28-cae015a4f2d2	2025-07-10 16:17:12.118593+00	2025-07-10 16:17:12.118593+00	password	891f1475-eaa6-45c6-a19b-a97080d15117
a7226eb0-795f-448d-ba5c-3c8c4a45883e	2025-07-10 16:23:57.666138+00	2025-07-10 16:23:57.666138+00	password	50cb7d89-0df6-4da7-a92a-1d9f3e399171
b02e6481-b874-4186-8110-0924bab53a7d	2025-07-10 16:25:02.904219+00	2025-07-10 16:25:02.904219+00	password	b517fc55-8251-4901-9045-534eea9e920b
3169def4-505d-48b6-923f-c332234a8164	2025-07-10 16:39:38.198971+00	2025-07-10 16:39:38.198971+00	password	0af83e74-07ad-4f5e-8a54-457bfe688756
46831c51-185b-4c33-9be1-57e4a464db17	2025-07-10 16:40:41.850159+00	2025-07-10 16:40:41.850159+00	password	57366c79-c039-4a2e-9bb9-907a7e22b233
67f3a0dc-69db-48ee-87a9-f1eaf56ade7e	2025-07-10 16:42:46.583453+00	2025-07-10 16:42:46.583453+00	password	c1c9fae8-f3eb-41e0-b234-c3ff07a92c92
d944a68c-dde1-4e88-b7d8-f8b1deccd15f	2025-07-10 16:44:48.26551+00	2025-07-10 16:44:48.26551+00	password	d0efb478-765e-4140-8081-024ba9e567f5
99923062-0886-45e9-917d-8f420edbc4c3	2025-07-17 16:46:55.876204+00	2025-07-17 16:46:55.876204+00	password	2818c490-d49c-4f38-96f4-b0f96d4f4782
cc56d1f9-8110-41e0-843b-12519a8f9a35	2025-07-17 16:47:44.303086+00	2025-07-17 16:47:44.303086+00	password	8b52dabe-2292-4dd5-9be7-80ad01832c6e
42824d4d-0045-4f46-8e06-d5ece2b2bfdb	2025-07-17 17:33:05.043207+00	2025-07-17 17:33:05.043207+00	password	5aa85f21-630d-4792-a7d7-5076aad0f7cb
202c1c86-19a1-4503-912b-9d5bd26b5fa5	2025-07-17 17:33:47.751897+00	2025-07-17 17:33:47.751897+00	password	eee5d804-a642-459b-9dff-797982f0223b
4d3074c9-249e-4e96-8a4b-7569bf13e385	2025-07-17 17:35:08.660684+00	2025-07-17 17:35:08.660684+00	password	56440818-06cb-4236-9b2c-a061549fb0f0
85ee24ad-25fa-47c4-b1de-dd1f09cda3ee	2025-07-18 09:28:05.690673+00	2025-07-18 09:28:05.690673+00	password	b13c360d-4061-4c9d-ab64-b4731f01a528
68625e10-b512-4535-93ff-a528d2b1bf99	2025-07-18 09:49:45.086499+00	2025-07-18 09:49:45.086499+00	password	a8cbd75b-50d8-44a7-a311-7bb4929774cc
23e0dc6d-3436-4ef6-996c-ee4947042f58	2025-07-18 10:14:09.430369+00	2025-07-18 10:14:09.430369+00	password	c8233ffc-e122-44fa-8cd3-882240838449
eb57ec64-5d93-4a1e-a84b-94ef2abea842	2025-07-18 10:47:32.521046+00	2025-07-18 10:47:32.521046+00	password	92a39008-921b-4067-bbff-fd3bcedde4f6
65983de9-6bea-4047-b53f-d01f38b13542	2025-07-18 10:48:40.026345+00	2025-07-18 10:48:40.026345+00	password	38532479-2541-4cb9-b065-3577491b9b75
ba52d417-13e0-4e9e-8288-74f931cd5dad	2025-07-18 10:55:06.731433+00	2025-07-18 10:55:06.731433+00	password	bd72fc7e-ecd1-41b1-aeb5-5bc5e0f7372f
a244faf4-f567-49b5-864e-c85409cb6e65	2025-07-18 11:46:04.53098+00	2025-07-18 11:46:04.53098+00	password	3e273545-6244-400e-9ca5-8cc49e60edaf
36e02d51-f948-4e63-b2ec-6f23b9facc1e	2025-07-19 04:42:42.523247+00	2025-07-19 04:42:42.523247+00	password	30ca4fef-e968-4e1c-afc1-984e6d4a9394
50df0cbe-42b5-47c9-91f1-bb906cb745a7	2025-07-19 04:43:41.97404+00	2025-07-19 04:43:41.97404+00	password	9faf469f-23e5-4a47-beec-5aa196ed9493
054270b2-0d77-4ee3-b94b-30d7a0209ebb	2025-07-19 04:44:39.739181+00	2025-07-19 04:44:39.739181+00	password	1bd4656c-c267-4bce-b8e0-a86e3bb07116
cea12436-5891-48e2-8523-9c84bf805df2	2025-07-19 04:46:33.355025+00	2025-07-19 04:46:33.355025+00	password	2b67068b-dc1c-4aa6-b396-aea16a05ba8c
b7ec25cc-2418-4cde-bc7b-9b202e1e5a42	2025-07-19 04:49:38.84791+00	2025-07-19 04:49:38.84791+00	password	c27e710e-19fe-4ebe-be5d-0d69a3462c3f
c5fba476-bedd-4ac1-90da-bc87cb85d7c4	2025-07-19 05:05:53.766233+00	2025-07-19 05:05:53.766233+00	password	33f110b9-f327-411e-add8-76bb5113eabf
570e09bc-fe94-4597-ae01-33e735f28873	2025-07-19 05:07:01.65319+00	2025-07-19 05:07:01.65319+00	password	26ef2c96-0606-4344-8530-81a8a0a1b419
b865fa88-16b2-418f-901d-f5182b537122	2025-07-19 05:09:17.93284+00	2025-07-19 05:09:17.93284+00	password	b6a8140b-1e14-4576-b4d0-fdef6e67a801
97549cb5-475d-4b85-abe6-122dd1364e71	2025-07-19 05:09:43.796263+00	2025-07-19 05:09:43.796263+00	password	9bc3e05d-afbb-40a9-88f2-5a71557bd272
65eebcda-ff2a-45d0-8429-d9cb3fda4b3e	2025-07-19 05:51:09.414415+00	2025-07-19 05:51:09.414415+00	password	6c4cbbff-1700-41ae-940a-ffe50d7dfb2a
0ea6243c-6b92-41dc-a94f-e06ea0396fdb	2025-07-19 06:00:12.833734+00	2025-07-19 06:00:12.833734+00	password	ba54ff57-36fe-4121-8c28-384865df74b4
f7a0f3c4-5581-4163-b4d8-39afed6c8595	2025-07-19 06:03:10.144019+00	2025-07-19 06:03:10.144019+00	password	e47e214e-fa3b-41e3-9c18-4f93fdef3197
90d7c6c5-a244-4b67-8fea-c3b53cb3d104	2025-07-19 06:07:46.833059+00	2025-07-19 06:07:46.833059+00	password	8e8a7e1e-8e1e-4809-b68b-a62a6a76144e
6956b137-8682-4c96-a66e-c2ac75ad33c9	2025-07-19 06:09:43.021686+00	2025-07-19 06:09:43.021686+00	password	04cec790-9e10-44e2-94d2-ee26e2a69a9e
b26bd13d-838b-4911-82d6-3a2be3b63087	2025-07-19 06:14:34.044649+00	2025-07-19 06:14:34.044649+00	password	b3bb640e-8529-4602-8e7f-e45ffb75c613
2ed3069c-de53-4781-9533-d972e21d0c15	2025-07-19 06:38:02.457745+00	2025-07-19 06:38:02.457745+00	password	e5bfce68-7732-4bd3-abd8-233602d8b5e7
376f462f-b995-4749-9f9a-f7fa22200f99	2025-07-19 06:56:44.253751+00	2025-07-19 06:56:44.253751+00	password	2a7b0c15-a53f-4396-962b-b53f665efc8c
e083be42-3419-4602-9862-581b78e1bc0a	2025-07-26 06:32:32.872123+00	2025-07-26 06:32:32.872123+00	password	35aee0a3-ddf4-497d-a2f8-e07dd60e9763
de566707-2bf1-486c-a9ae-7f5acb2221b0	2025-07-26 06:34:17.335569+00	2025-07-26 06:34:17.335569+00	password	98bac1f2-e0b5-4ca6-adfe-c87e78c3ad9c
8ac8b2bf-ddcb-46b6-9523-e6bface88fb7	2025-07-26 06:35:49.376248+00	2025-07-26 06:35:49.376248+00	password	d7f566bd-b583-457b-a958-4ba8704e4802
\.


--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.mfa_challenges (id, factor_id, created_at, verified_at, ip_address, otp_code, web_authn_session_data) FROM stdin;
\.


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.mfa_factors (id, user_id, friendly_name, factor_type, status, created_at, updated_at, secret, phone, last_challenged_at, web_authn_credential, web_authn_aaguid) FROM stdin;
\.


--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.one_time_tokens (id, user_id, token_type, token_hash, relates_to, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.refresh_tokens (instance_id, id, token, user_id, revoked, created_at, updated_at, parent, session_id) FROM stdin;
00000000-0000-0000-0000-000000000000	1	kz7nbfwn5gpj	40e670c9-3227-4adb-bac9-14930a87a782	f	2025-07-06 23:03:29.272222+00	2025-07-06 23:03:29.272222+00	\N	14cf00f4-471e-4a3d-8e18-3f362319faee
00000000-0000-0000-0000-000000000000	2	vhevhvml3wec	40e670c9-3227-4adb-bac9-14930a87a782	f	2025-07-06 23:06:26.665631+00	2025-07-06 23:06:26.665631+00	\N	1c6d7e52-8395-4319-a153-50f308031b6f
00000000-0000-0000-0000-000000000000	3	avewa2p7tmwf	40e670c9-3227-4adb-bac9-14930a87a782	f	2025-07-06 23:07:00.711155+00	2025-07-06 23:07:00.711155+00	\N	5e292e13-76e1-4d9a-ae1c-2a16d1495bf5
00000000-0000-0000-0000-000000000000	4	ynju4mawhodr	f043067b-9ef4-4009-93e3-a8c2dec006e1	f	2025-07-06 23:19:29.596715+00	2025-07-06 23:19:29.596715+00	\N	2e2eaee4-40a6-435b-b633-0d614546e540
00000000-0000-0000-0000-000000000000	5	hkhment5cgcc	00654f1b-b3e3-43af-a7b4-56f97921040b	f	2025-07-06 23:19:30.04135+00	2025-07-06 23:19:30.04135+00	\N	a6457166-c302-45e8-a596-4aea4d527b94
00000000-0000-0000-0000-000000000000	6	ufyyplpubwf4	359c592a-dd23-4db2-9135-bcdd5c066705	f	2025-07-06 23:19:30.420963+00	2025-07-06 23:19:30.420963+00	\N	fff5a52e-2097-44ad-a250-6abcee4caf28
00000000-0000-0000-0000-000000000000	7	dooqglin2gqx	c1f5941b-17b0-4191-bfb9-7dc67c526310	f	2025-07-06 23:19:30.679762+00	2025-07-06 23:19:30.679762+00	\N	30e55564-0145-4e7a-ae10-3c6c40193b90
00000000-0000-0000-0000-000000000000	8	bk6n4onkrrfk	1ce57413-49e4-4706-ace4-b2a3117a33c3	f	2025-07-06 23:19:30.946696+00	2025-07-06 23:19:30.946696+00	\N	701d0baa-5683-4d29-a159-d3cba13a46f2
00000000-0000-0000-0000-000000000000	9	4hxmyr6nguka	4fcafc36-f358-4930-8e98-e10347b330d8	f	2025-07-06 23:19:31.32594+00	2025-07-06 23:19:31.32594+00	\N	cb58faae-8fbc-4e43-a23f-2e4cc7d149d6
00000000-0000-0000-0000-000000000000	10	yfoq5dacx4cp	6485a6cd-3531-4d64-8d9d-c7e497f1c618	f	2025-07-06 23:19:31.644921+00	2025-07-06 23:19:31.644921+00	\N	24db0f9d-3272-4492-85b2-0534a1fcb7f7
00000000-0000-0000-0000-000000000000	11	ggusa2pjhj74	36078707-91df-4b7b-8b4a-8e342bbc3e36	f	2025-07-06 23:19:32.021103+00	2025-07-06 23:19:32.021103+00	\N	b90c6b24-c588-4831-b0a6-ac4fc50acb79
00000000-0000-0000-0000-000000000000	12	6r2ntxeyweoe	d362753f-74bf-427c-8666-6cad45b48cd0	f	2025-07-06 23:19:32.396116+00	2025-07-06 23:19:32.396116+00	\N	9e111ad1-5670-4bf8-a575-8ee3e1d37832
00000000-0000-0000-0000-000000000000	13	gbqlia54rsrp	b2105c0e-41f7-4adc-a6d4-a3bab47ef2ee	f	2025-07-06 23:19:32.652973+00	2025-07-06 23:19:32.652973+00	\N	ace83962-60a7-48c0-b3c8-4a55aca15b10
00000000-0000-0000-0000-000000000000	14	ngk4uxngl3k3	759276a4-cc74-4d53-bd9f-d7611a54e140	f	2025-07-06 23:19:32.935248+00	2025-07-06 23:19:32.935248+00	\N	77f204ba-6199-44c1-a936-129c6915a862
00000000-0000-0000-0000-000000000000	15	7uypzoanddvr	695edbf7-687d-434f-8e37-706f38502b57	f	2025-07-06 23:19:33.227537+00	2025-07-06 23:19:33.227537+00	\N	1c0cc52c-bd58-4781-846c-3a8ed3f6ee83
00000000-0000-0000-0000-000000000000	16	4mc5hdilzhkk	e9f9d1f4-66be-4978-b4ab-a31c37fbc42f	f	2025-07-06 23:19:33.591978+00	2025-07-06 23:19:33.591978+00	\N	7751cb91-220d-407f-9abb-1bd5248be93c
00000000-0000-0000-0000-000000000000	17	x2oqg4bzn3pd	e0ce2d2b-bd66-4d34-a109-7e719aad41e2	f	2025-07-06 23:19:33.870745+00	2025-07-06 23:19:33.870745+00	\N	abe0ca13-7bbd-4a28-83f8-fd606388c08f
00000000-0000-0000-0000-000000000000	18	vdlyfiduunny	13f0aceb-43a4-4120-ad57-8ce74766a078	f	2025-07-06 23:19:34.236394+00	2025-07-06 23:19:34.236394+00	\N	7531c0d3-e4d7-4343-a084-409a3d9b884b
00000000-0000-0000-0000-000000000000	19	pfqgnwitu24g	7919fd8d-0f89-40a5-baf0-12c87c32e39c	f	2025-07-06 23:19:34.643446+00	2025-07-06 23:19:34.643446+00	\N	579dd5ce-3422-4937-947a-f2cda91923b8
00000000-0000-0000-0000-000000000000	20	3sj6tsgp2ylr	d57366cd-d4e2-4731-8559-445f513c2d91	f	2025-07-06 23:19:34.984131+00	2025-07-06 23:19:34.984131+00	\N	f9c2b4ac-66b0-45f4-9816-8cb46e68e06a
00000000-0000-0000-0000-000000000000	21	zepv56ylkfdc	c11b8b42-5040-4e36-a6cd-8d191d001793	f	2025-07-06 23:19:35.230803+00	2025-07-06 23:19:35.230803+00	\N	04219cb8-42e6-4899-b6eb-f240a633ab3c
00000000-0000-0000-0000-000000000000	22	u2pupuehixa2	8fbb89b6-ec73-44b9-a055-f705841efad5	f	2025-07-06 23:19:35.510835+00	2025-07-06 23:19:35.510835+00	\N	bc49a365-bb8e-4ea7-8235-d072fd9522b3
00000000-0000-0000-0000-000000000000	23	ncq3krmsrd67	3382735c-65d6-4f3a-ac19-1da3efff8dc9	f	2025-07-06 23:19:35.768153+00	2025-07-06 23:19:35.768153+00	\N	9f08aff5-20da-4c9d-b0f8-07af263167e6
00000000-0000-0000-0000-000000000000	24	tuzq2rwjhahs	294edd58-3f43-4693-98c7-0912ee512a17	f	2025-07-06 23:19:36.036214+00	2025-07-06 23:19:36.036214+00	\N	8c66df02-9fe2-4084-9682-e9186101df9f
00000000-0000-0000-0000-000000000000	25	nrlcsta7ek3y	de264ef1-6740-422b-bf8d-a104532e0c90	f	2025-07-06 23:19:36.304125+00	2025-07-06 23:19:36.304125+00	\N	69f24172-8296-4054-a025-b7516bb8da1d
00000000-0000-0000-0000-000000000000	26	cob46pd5zwer	e2535c7d-c6d4-4e72-9a09-f28bc8ed9a7e	f	2025-07-06 23:19:36.710597+00	2025-07-06 23:19:36.710597+00	\N	78e66d83-c16e-427a-a6e4-8e8414d9df95
00000000-0000-0000-0000-000000000000	27	k6zbtadr3zww	90cd8044-d51a-4dfb-8dba-ba12538edd0b	f	2025-07-06 23:19:36.963043+00	2025-07-06 23:19:36.963043+00	\N	e4acbf67-be9f-4d91-87b8-71883d76ef98
00000000-0000-0000-0000-000000000000	28	nxntcnlcv62d	38a9c3a7-4faf-4053-b3ce-39b3807d1bf8	f	2025-07-06 23:19:37.240635+00	2025-07-06 23:19:37.240635+00	\N	fa68866c-7faa-4766-a84f-ac41fe4ec7fe
00000000-0000-0000-0000-000000000000	29	kr47azpqudr3	8058af23-f469-4ca8-a7c4-5182a0eef655	f	2025-07-06 23:19:37.489379+00	2025-07-06 23:19:37.489379+00	\N	693ec374-2091-4d37-a0f3-07c65b28c835
00000000-0000-0000-0000-000000000000	30	bt6mjtysndio	cc3c89cc-118b-4779-9901-580245998f7b	f	2025-07-06 23:19:37.751453+00	2025-07-06 23:19:37.751453+00	\N	f7593c4b-f70d-4b9c-9e41-2bb84c4ba0c7
00000000-0000-0000-0000-000000000000	31	ta7mecjhv75g	5ee23e8e-b8db-4554-9d10-41a19321f817	f	2025-07-06 23:19:38.051034+00	2025-07-06 23:19:38.051034+00	\N	76eeae7f-d055-40b6-9731-59b6409827da
00000000-0000-0000-0000-000000000000	32	w5xqpktdq4q6	01ad9937-bd54-4b32-9458-9b50c81a84d1	f	2025-07-06 23:19:38.309659+00	2025-07-06 23:19:38.309659+00	\N	80a39010-afa6-4872-ab93-e59004ed7e28
00000000-0000-0000-0000-000000000000	33	uweiijmj3yok	7baeab7d-13d6-47f5-ad82-65d9ca35c85e	f	2025-07-06 23:19:38.599469+00	2025-07-06 23:19:38.599469+00	\N	c8e1fa7b-6dc7-4701-9425-154975707e5b
00000000-0000-0000-0000-000000000000	34	32nvdnhjhmc4	dba96981-5e2e-4b6b-af70-b1b6b4586390	f	2025-07-06 23:19:39.664269+00	2025-07-06 23:19:39.664269+00	\N	0bf59029-2932-4415-940a-4a2e93ff3ac9
00000000-0000-0000-0000-000000000000	35	tnrkcoqg3n3v	945033ac-abb6-426c-88c6-926ffa615561	f	2025-07-06 23:19:49.604012+00	2025-07-06 23:19:49.604012+00	\N	e8d5b2c3-47ef-4c15-a773-7f84f13ec33a
00000000-0000-0000-0000-000000000000	36	v4cc2n4yixeg	7279bbef-accb-49e3-af8a-1eaa1950828c	f	2025-07-06 23:28:30.726414+00	2025-07-06 23:28:30.726414+00	\N	30d41a52-75c1-4114-b8da-f084787d47e3
00000000-0000-0000-0000-000000000000	37	i3hr2f3utpwq	f5c1abe0-cbf4-449f-8f4c-5029070083ff	f	2025-07-06 23:28:32.035851+00	2025-07-06 23:28:32.035851+00	\N	1c7fd618-f842-4fde-9a7e-b42e59e58165
00000000-0000-0000-0000-000000000000	38	belpqwbyq6ly	f26a23b8-080f-42ec-8856-0c6629d426aa	f	2025-07-06 23:28:33.326839+00	2025-07-06 23:28:33.326839+00	\N	8e87ecae-d08e-4088-a3bc-4dece327fade
00000000-0000-0000-0000-000000000000	39	q6g3jpqakvng	957b0e6b-9843-4531-8273-1878f186bdbe	f	2025-07-06 23:28:34.581724+00	2025-07-06 23:28:34.581724+00	\N	6c3a0661-843a-4818-881e-0eb95753282b
00000000-0000-0000-0000-000000000000	40	g4a35yq6vqoy	0552910e-f473-48bd-a631-8fd6c90b9a09	f	2025-07-06 23:28:35.878529+00	2025-07-06 23:28:35.878529+00	\N	714e53a1-8a1f-477f-9369-6ab8eee1f7c6
00000000-0000-0000-0000-000000000000	41	j26k424vvo23	92bb1183-589a-401f-a86b-5ae11a04e9bc	f	2025-07-06 23:28:38.496646+00	2025-07-06 23:28:38.496646+00	\N	1672e6f8-9dce-4cea-b886-692dcc1cc8c8
00000000-0000-0000-0000-000000000000	42	votvkjvcalxz	c5e5750f-bac1-4531-8acb-7b0e0027363a	f	2025-07-06 23:28:39.752672+00	2025-07-06 23:28:39.752672+00	\N	a6a5d091-0749-4497-8617-67578017c7e5
00000000-0000-0000-0000-000000000000	43	yhebjru3ezv2	09a05d58-176a-4ead-b435-167ef5b12f8b	f	2025-07-06 23:28:41.005362+00	2025-07-06 23:28:41.005362+00	\N	fbf12d3d-a46c-438b-8292-48eea52121df
00000000-0000-0000-0000-000000000000	44	mdn7knypioim	e097a9f6-36fd-4a46-87ea-2cb4f19719c8	f	2025-07-06 23:28:42.290382+00	2025-07-06 23:28:42.290382+00	\N	14b932ed-997e-4fc6-a24f-dcd97db964cf
00000000-0000-0000-0000-000000000000	45	sldwrhrimlwq	55a7bdfb-ed63-4e31-beca-88314bc8cc5f	f	2025-07-06 23:28:43.571793+00	2025-07-06 23:28:43.571793+00	\N	b5022eb9-c1eb-4b52-afa5-44a0ed0ededf
00000000-0000-0000-0000-000000000000	46	yctj6jfdb2lg	5ec60e6d-5b8c-4fe1-8181-1fec9ec2ab86	f	2025-07-06 23:28:44.898767+00	2025-07-06 23:28:44.898767+00	\N	f229704e-262f-4635-bd82-55b15b19e252
00000000-0000-0000-0000-000000000000	47	4tp23tmjmcp3	2ebbab6a-e0e8-4a29-9e15-9b321ded899a	f	2025-07-06 23:28:46.161121+00	2025-07-06 23:28:46.161121+00	\N	89e59692-4b3b-4463-8fcc-9a46c6b74198
00000000-0000-0000-0000-000000000000	48	p7lp5gdpwr6j	3ae6e2bf-60f1-4bec-936b-048b25d8f68e	f	2025-07-06 23:28:47.455266+00	2025-07-06 23:28:47.455266+00	\N	5b3e76fd-a5ec-4c46-bbe7-268533ff849f
00000000-0000-0000-0000-000000000000	49	jzz5icg2batj	e00a142c-8a75-49a8-bed1-3d95a0f4c459	f	2025-07-06 23:28:48.756595+00	2025-07-06 23:28:48.756595+00	\N	6f13ac2c-401d-4a4c-b3c8-119e62a034f8
00000000-0000-0000-0000-000000000000	50	5ks6m6gkmcat	a6beb2c1-97e9-4b89-87f8-c6ce608ee596	f	2025-07-06 23:28:50.093895+00	2025-07-06 23:28:50.093895+00	\N	36a6968f-e1d8-44a9-abe0-dda6cb60c0d6
00000000-0000-0000-0000-000000000000	51	jj5cc5eusssz	915bdb50-deb0-49b7-8c7a-e17268258e68	f	2025-07-06 23:28:51.330947+00	2025-07-06 23:28:51.330947+00	\N	c4648124-47f0-47b8-b4db-2ea48aeb24cb
00000000-0000-0000-0000-000000000000	52	5xfdarxjec4c	f2a4c1ed-57db-44a8-b062-4ce8ae9e1b98	f	2025-07-06 23:28:52.621774+00	2025-07-06 23:28:52.621774+00	\N	b80c6b18-0768-4885-9601-0a98b27febbd
00000000-0000-0000-0000-000000000000	53	ycikwicfdy53	e337a4dc-1832-4a9d-85f4-1d30683eb964	f	2025-07-06 23:28:53.918316+00	2025-07-06 23:28:53.918316+00	\N	53dba4e1-5f29-4948-b50a-af0026425713
00000000-0000-0000-0000-000000000000	54	lj5ojhqwcrgp	56371e1b-e464-4d3d-90d3-3f025c40f398	f	2025-07-06 23:28:55.219571+00	2025-07-06 23:28:55.219571+00	\N	ff377001-34f5-48e2-906b-0edc140a48cd
00000000-0000-0000-0000-000000000000	55	lyfuwgbvp6ov	cc7c1dc4-ff0b-499f-a39f-ca58a1e2cfd1	f	2025-07-06 23:28:56.507978+00	2025-07-06 23:28:56.507978+00	\N	1e27ce4a-ac19-46ad-9d22-6157e25fd591
00000000-0000-0000-0000-000000000000	56	jijbkd4bb5cz	4d01ad91-ce75-49ce-8f20-e99e68343a4d	f	2025-07-06 23:28:57.795169+00	2025-07-06 23:28:57.795169+00	\N	c44fdfb7-614d-4895-9887-d19be62ab109
00000000-0000-0000-0000-000000000000	57	kxq7cutokn7z	759b543d-2173-4901-803d-dd210dbf41db	f	2025-07-06 23:28:59.142659+00	2025-07-06 23:28:59.142659+00	\N	6a9079e4-ac09-4cca-8abf-516d2606ff3e
00000000-0000-0000-0000-000000000000	58	y3xong2blbhx	fe1078bc-e494-4dbe-b8b9-5b289e505666	f	2025-07-06 23:29:00.460836+00	2025-07-06 23:29:00.460836+00	\N	51eece24-596c-4774-a1aa-c80a2e0e5992
00000000-0000-0000-0000-000000000000	59	gvh3lv6h5r5b	c98b5d43-3b01-458d-a702-54d0924f8c98	f	2025-07-06 23:29:01.710625+00	2025-07-06 23:29:01.710625+00	\N	b9dae8c0-6604-4d58-979c-03c75ee5f89a
00000000-0000-0000-0000-000000000000	60	iwc4747w2s3l	03b6eecb-379b-4083-b4a5-32583ab0fda1	f	2025-07-06 23:29:02.971839+00	2025-07-06 23:29:02.971839+00	\N	e93c3d9e-1a48-4fbb-be0a-eb7d5935857d
00000000-0000-0000-0000-000000000000	61	6wp37hbc2mx3	bf1356fc-2359-499d-a8fa-3cf08a07254e	f	2025-07-06 23:29:04.259591+00	2025-07-06 23:29:04.259591+00	\N	151f1108-3436-4e7d-9162-51e81a100bb6
00000000-0000-0000-0000-000000000000	62	563bbm5rn74z	cd234ac4-69fa-4a9f-8c5a-7544555a229f	f	2025-07-06 23:29:05.564555+00	2025-07-06 23:29:05.564555+00	\N	673453f4-99ed-474c-804f-2d892e91df4e
00000000-0000-0000-0000-000000000000	63	5y4oxcn64okr	55bbe185-cda0-49e6-8f8a-cace1ba1129a	f	2025-07-06 23:29:06.839344+00	2025-07-06 23:29:06.839344+00	\N	f521eafc-3eac-4858-a631-2f79dd0c1fdd
00000000-0000-0000-0000-000000000000	64	3ekmcu4ao5xl	5f8ff2f1-18d7-4627-b4f2-d42fbe9f132a	f	2025-07-06 23:29:08.146864+00	2025-07-06 23:29:08.146864+00	\N	720a8164-ecac-4b8d-b6fd-1b281a6a1782
00000000-0000-0000-0000-000000000000	65	aggaw6zrzyin	34de1333-884a-4bb8-bfe8-9f618568973c	f	2025-07-06 23:29:09.400868+00	2025-07-06 23:29:09.400868+00	\N	7c1220f3-3f91-4e20-83dd-b610fb55dc83
00000000-0000-0000-0000-000000000000	66	cmwihyzodlqx	496f4ad0-249e-41e1-857f-2cd6ae7fa1ef	f	2025-07-06 23:29:10.707949+00	2025-07-06 23:29:10.707949+00	\N	790ea3a3-f806-4de2-82cb-8195e1faad55
00000000-0000-0000-0000-000000000000	67	o3n7lmn6zibq	4c2a2cec-2745-4073-85f9-04ad472b017d	f	2025-07-06 23:29:12.023358+00	2025-07-06 23:29:12.023358+00	\N	35128808-d5ba-4fc0-9f55-356d42a96db9
00000000-0000-0000-0000-000000000000	68	5f65vextm5fm	ad781a50-10b1-40ce-87a0-e22f98502cf7	f	2025-07-06 23:29:13.336668+00	2025-07-06 23:29:13.336668+00	\N	c812bf57-60cd-4a97-a4f4-ba7f20623786
00000000-0000-0000-0000-000000000000	69	djdki2xelw6k	f234be03-5a87-4dc5-bb74-280676f90bbb	f	2025-07-06 23:29:14.631689+00	2025-07-06 23:29:14.631689+00	\N	58cf10a3-ce68-4997-8035-ef429007d911
00000000-0000-0000-0000-000000000000	70	kr2k7hcndvzc	920244f9-7510-4aba-a7f8-42819a4f56e1	f	2025-07-06 23:29:17.108716+00	2025-07-06 23:29:17.108716+00	\N	ba245ff4-77e7-4463-8602-79df45fdf223
00000000-0000-0000-0000-000000000000	71	22kt6veitmaq	490830f3-23c6-4e39-9850-0257a84ec7ad	f	2025-07-06 23:29:18.382718+00	2025-07-06 23:29:18.382718+00	\N	f70b6f9f-738a-4abf-8a5c-788d172db684
00000000-0000-0000-0000-000000000000	72	wy2qnt2znoo7	3615deed-9a1e-490a-b344-b664262f5cc4	f	2025-07-06 23:29:19.693713+00	2025-07-06 23:29:19.693713+00	\N	3045437e-21ac-4b57-a0ea-ba96a9e58b52
00000000-0000-0000-0000-000000000000	73	25tggrsxvj2e	19a34652-2e3a-4551-bf66-10c32fefdcb9	f	2025-07-06 23:29:21.616321+00	2025-07-06 23:29:21.616321+00	\N	8a144375-065d-47b6-aecc-51a29ccb8914
00000000-0000-0000-0000-000000000000	74	zqgofauzvdey	e9a10fb2-e0b7-4115-ab40-d9002738486a	f	2025-07-06 23:29:23.192109+00	2025-07-06 23:29:23.192109+00	\N	19ea455e-03bc-403a-b35e-23c03fa09dc5
00000000-0000-0000-0000-000000000000	75	qlibmiv4em7z	23c1aeb2-602e-4076-9d13-4615c742f916	f	2025-07-06 23:29:24.913969+00	2025-07-06 23:29:24.913969+00	\N	a163b46e-af1c-4448-89e5-c46d59f0b1ee
00000000-0000-0000-0000-000000000000	76	xrdtjhm2yxte	42055b75-3473-48f0-9f12-a4abba8714ea	f	2025-07-06 23:29:26.181199+00	2025-07-06 23:29:26.181199+00	\N	6f9b480d-d7d5-4963-966f-4f155239f756
00000000-0000-0000-0000-000000000000	77	ej4t2xuphh6g	07fd0355-c715-45f2-98ae-90b292d77d41	f	2025-07-06 23:29:27.493303+00	2025-07-06 23:29:27.493303+00	\N	089853a7-edaa-4ad6-91f1-8af28cfd8706
00000000-0000-0000-0000-000000000000	78	rxpaqmn4cad6	91db900d-0bef-4f07-90e5-bac9f72e08aa	f	2025-07-06 23:29:28.815903+00	2025-07-06 23:29:28.815903+00	\N	d6db6ee0-9cf5-43cb-9b72-276c3cd67f33
00000000-0000-0000-0000-000000000000	79	n6ca4aupqoco	55dac851-ecfc-4b93-9da7-1efe6be19fa0	f	2025-07-06 23:29:30.111676+00	2025-07-06 23:29:30.111676+00	\N	317e8cde-30dd-4af3-90ba-c35eb8535453
00000000-0000-0000-0000-000000000000	80	2ocrfgf3siiv	07a74c11-bbf3-41e3-8753-c282132a0942	f	2025-07-06 23:29:31.376152+00	2025-07-06 23:29:31.376152+00	\N	dc69870b-11a6-4daa-817d-6892cf689de7
00000000-0000-0000-0000-000000000000	81	4sosq2mba3n5	986cfe33-942a-4052-9d5f-585ba1c58e2a	f	2025-07-06 23:29:32.677057+00	2025-07-06 23:29:32.677057+00	\N	219752a5-8a63-4813-959a-8daf685e5270
00000000-0000-0000-0000-000000000000	82	m5ppttpppdiw	1e85df90-4c60-426a-8599-20866cd4179f	f	2025-07-06 23:29:34.534324+00	2025-07-06 23:29:34.534324+00	\N	cb5131cb-603e-4080-aaae-3d3966ad2f9c
00000000-0000-0000-0000-000000000000	83	pqpfe6cejiu6	124afc78-d787-490e-ac3b-e4c99628cb40	f	2025-07-06 23:29:36.478156+00	2025-07-06 23:29:36.478156+00	\N	8d6dff1e-8685-4851-a6f3-cc2a441cf45b
00000000-0000-0000-0000-000000000000	84	r2nbpkvsfzwa	40329907-7532-4f20-a086-331ca748a856	f	2025-07-06 23:29:38.608469+00	2025-07-06 23:29:38.608469+00	\N	a5da2c85-e197-4386-8bea-3fb3f3db27b0
00000000-0000-0000-0000-000000000000	85	pqltmxkrkyzp	cc83167d-aa1f-4879-a15c-41dcb608a579	f	2025-07-06 23:29:39.954253+00	2025-07-06 23:29:39.954253+00	\N	756f2613-7e1c-4734-82f6-7bf465824a9d
00000000-0000-0000-0000-000000000000	86	3gqnxbp4ttup	5d1addd3-2819-46ba-a2e2-a556e7ab56d5	f	2025-07-06 23:29:41.240668+00	2025-07-06 23:29:41.240668+00	\N	2ad80b65-c494-471b-b792-4d6cea6e8a2e
00000000-0000-0000-0000-000000000000	87	otzbgle4gtua	f0832eb1-0639-4593-a7f4-83c80588ea59	f	2025-07-06 23:29:42.526105+00	2025-07-06 23:29:42.526105+00	\N	2db71b5e-714a-4288-bd17-7dbf33592583
00000000-0000-0000-0000-000000000000	88	fbtrby3vxjb4	84306c4b-ca98-4eca-824b-98ef34f9235c	f	2025-07-06 23:29:43.846919+00	2025-07-06 23:29:43.846919+00	\N	2efda568-80d4-497e-a59d-2cdaa2749c14
00000000-0000-0000-0000-000000000000	89	53c7obuszcji	32a145f7-f290-48da-a885-cac6acb8f18a	f	2025-07-06 23:29:45.301202+00	2025-07-06 23:29:45.301202+00	\N	5f429e59-cd15-48b4-bc8b-59d01cdb3f70
00000000-0000-0000-0000-000000000000	90	7pzq4vu2h4ph	8d6f5bc2-d90a-41f6-bb35-0a3eb5119495	f	2025-07-06 23:29:47.097688+00	2025-07-06 23:29:47.097688+00	\N	373f9206-c331-4d3f-8676-29b6d943f8eb
00000000-0000-0000-0000-000000000000	91	qjfejeuazyyu	fa01eacd-c7bf-4039-b3b7-b61d9b2311d8	f	2025-07-06 23:29:48.401233+00	2025-07-06 23:29:48.401233+00	\N	46821fea-4478-47ea-9d1c-17e048069c0e
00000000-0000-0000-0000-000000000000	92	lqhwx353e3aw	9ca18835-0971-4842-be97-08186fc34251	f	2025-07-06 23:29:49.668011+00	2025-07-06 23:29:49.668011+00	\N	d60db3a8-a45d-4a60-90d0-7019a9ade487
00000000-0000-0000-0000-000000000000	93	hads4zlq4ut5	4f53ba4b-2d7f-4da3-a6a8-8eede3f7c060	f	2025-07-06 23:29:50.991322+00	2025-07-06 23:29:50.991322+00	\N	83576323-89f0-4f0f-bfe0-7453b88668a6
00000000-0000-0000-0000-000000000000	94	iibbkeqdfw4g	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-06 23:29:52.292445+00	2025-07-06 23:29:52.292445+00	\N	31764dff-4094-4be1-a203-57fb5abea8f2
00000000-0000-0000-0000-000000000000	95	4xbyzwy5hxvj	0efe3c02-f278-4ec1-9038-fad1588f1493	f	2025-07-06 23:29:53.558943+00	2025-07-06 23:29:53.558943+00	\N	ee642004-0641-4ec9-a50a-1876b1424565
00000000-0000-0000-0000-000000000000	96	cqshqzqdatos	5459b24c-84b0-45ad-8c2c-2af37595df06	f	2025-07-06 23:29:54.826254+00	2025-07-06 23:29:54.826254+00	\N	bfe9c634-9614-40b8-bc1a-a284efcc3966
00000000-0000-0000-0000-000000000000	97	ijkbrncj34yb	2a043cb7-c39f-4d3b-86e6-fd939f593ff6	f	2025-07-06 23:29:56.143218+00	2025-07-06 23:29:56.143218+00	\N	6d53e14b-2338-4646-bdd2-054c7c6d4e3a
00000000-0000-0000-0000-000000000000	98	wuk2qcfzhvq5	079446fa-9e6c-4fd1-90ff-4432ff8bfc15	f	2025-07-06 23:29:57.424276+00	2025-07-06 23:29:57.424276+00	\N	8c15c141-ae58-48a7-a3b0-e3336dbc9c93
00000000-0000-0000-0000-000000000000	99	ser2jamx5he5	78ebb959-0002-4e3a-8a73-62477951e421	f	2025-07-06 23:29:58.690144+00	2025-07-06 23:29:58.690144+00	\N	54808bf4-29bf-458b-9f2d-ea9bb47e26ef
00000000-0000-0000-0000-000000000000	100	ehen5m5c6c6m	ffcbebef-bd6a-490a-a024-6ea73c71ac44	f	2025-07-06 23:30:00.017296+00	2025-07-06 23:30:00.017296+00	\N	b0463435-0b0c-4054-832b-d1dc19c90837
00000000-0000-0000-0000-000000000000	101	n3pkg2vwe2sv	2ad27174-9dc2-4dd0-9b01-73d0a0c334e1	f	2025-07-06 23:30:02.547736+00	2025-07-06 23:30:02.547736+00	\N	945c2aaf-6421-425e-9cd3-23db7e517d38
00000000-0000-0000-0000-000000000000	102	yywnfbxadlrs	cfa11a9a-0de0-4e32-99a0-5df45d2f56dd	f	2025-07-06 23:30:03.836583+00	2025-07-06 23:30:03.836583+00	\N	dae8638a-2ac5-4962-9636-bb05779faf61
00000000-0000-0000-0000-000000000000	103	cizip55v737j	fe033a35-e2e5-405c-8d74-f5c247307f0b	f	2025-07-06 23:30:05.173906+00	2025-07-06 23:30:05.173906+00	\N	6369e92a-399e-4f60-ae6c-8159c3732eaa
00000000-0000-0000-0000-000000000000	104	ova6ntfi3ypx	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	f	2025-07-06 23:30:06.477027+00	2025-07-06 23:30:06.477027+00	\N	56cf5531-5295-46b0-a048-e2fc13ad9aee
00000000-0000-0000-0000-000000000000	105	5vijo6usk5rt	079ca79f-f4a5-494c-ab69-6eb5d9309140	f	2025-07-06 23:30:07.763943+00	2025-07-06 23:30:07.763943+00	\N	7c58e2c6-741b-4a3e-b146-e9da22269405
00000000-0000-0000-0000-000000000000	106	g7cpcipgw5fk	406386d9-94e4-4c78-83fd-604ffbb2dd5a	f	2025-07-06 23:30:09.339963+00	2025-07-06 23:30:09.339963+00	\N	cf51983a-1142-480a-8638-2f0982c50b9a
00000000-0000-0000-0000-000000000000	107	uiu2spjsktak	4ef422bd-aba3-4280-a28f-d0ac7cc6c208	f	2025-07-06 23:30:10.788662+00	2025-07-06 23:30:10.788662+00	\N	48c6ae3d-46b5-49a7-9c69-2a55b25ee04c
00000000-0000-0000-0000-000000000000	108	ymetjajcp5rf	96e1680c-63d7-4902-afd1-98b74cf34645	f	2025-07-06 23:30:12.091236+00	2025-07-06 23:30:12.091236+00	\N	e97e70df-7eb0-4844-a982-18c10f750500
00000000-0000-0000-0000-000000000000	109	pair4gjwd4pc	8ed041f9-82b9-4c46-b620-2d74d82273d6	f	2025-07-06 23:30:15.369928+00	2025-07-06 23:30:15.369928+00	\N	9ce4afa4-53c2-4389-b2e1-6dfddb192e35
00000000-0000-0000-0000-000000000000	110	fva5uw6bovx2	6d505cca-71c5-4b89-8c62-40daee2fe79c	f	2025-07-06 23:30:16.917359+00	2025-07-06 23:30:16.917359+00	\N	f0b0fc79-a347-441d-93e4-2d652599a389
00000000-0000-0000-0000-000000000000	111	sklrmw3z43jr	49817fdc-6d6c-4a5d-9e45-5498a27e8555	f	2025-07-06 23:30:18.179085+00	2025-07-06 23:30:18.179085+00	\N	fcb2b117-7aa7-4d10-b45f-3905099bdaa3
00000000-0000-0000-0000-000000000000	112	26g32usnrhqc	91f0d641-d8b2-47ef-b164-198f0972d313	f	2025-07-06 23:30:19.478501+00	2025-07-06 23:30:19.478501+00	\N	5f790aa5-8b47-4761-a332-8ebd7c092486
00000000-0000-0000-0000-000000000000	113	abkam6fdkmxy	e6b8ae92-b4f3-4717-9efc-d743df2bf28c	f	2025-07-06 23:30:20.749481+00	2025-07-06 23:30:20.749481+00	\N	043280c3-bc64-496a-a490-672e98df8def
00000000-0000-0000-0000-000000000000	114	csygjnxh7rbb	a38f3ea2-7acd-48f4-a79f-a25eeaec2d94	f	2025-07-06 23:30:22.891653+00	2025-07-06 23:30:22.891653+00	\N	8e23e621-0309-4f93-bafa-90c06cb16418
00000000-0000-0000-0000-000000000000	115	mgayuc6ah24o	bc6a8258-631b-4b34-8e01-61e7e4ab7f2a	f	2025-07-06 23:30:24.226965+00	2025-07-06 23:30:24.226965+00	\N	9861486d-c563-4c27-ac06-f493cc0aaab6
00000000-0000-0000-0000-000000000000	116	mo2ytuurf7u7	17566d57-1e67-435d-a236-20b0d74c6b0d	f	2025-07-06 23:30:25.590154+00	2025-07-06 23:30:25.590154+00	\N	1b7df1ae-f8f9-42c6-87fc-66a63ee79fb1
00000000-0000-0000-0000-000000000000	117	ekqgo3zektsp	f05a5bde-deea-4c06-9398-07c9960aef2c	f	2025-07-06 23:30:26.903043+00	2025-07-06 23:30:26.903043+00	\N	5d039c7e-640f-4136-a3d7-2b38001e2e84
00000000-0000-0000-0000-000000000000	118	jo7lkk65aiqh	07eb809c-ab0b-4235-b0d7-9d0726ae9340	f	2025-07-06 23:30:28.176888+00	2025-07-06 23:30:28.176888+00	\N	6db947e6-7f8d-4c08-baa4-ac6bf091ed7d
00000000-0000-0000-0000-000000000000	119	defdmxu3oi2f	0e6980f9-2985-431c-b311-4e0538ee213a	f	2025-07-06 23:30:29.481307+00	2025-07-06 23:30:29.481307+00	\N	a172f4cc-58f2-40f1-8816-d7bb33ece973
00000000-0000-0000-0000-000000000000	120	6pm4p26muba7	a17350fc-6190-4acf-ad2f-9b3539c545f4	f	2025-07-06 23:30:30.753196+00	2025-07-06 23:30:30.753196+00	\N	cd0cced3-e5f8-4960-a101-2142d2bbe496
00000000-0000-0000-0000-000000000000	121	qc7wvbmbohnw	07dc5cce-f102-4237-810f-3f20640bc6d6	f	2025-07-06 23:30:32.188274+00	2025-07-06 23:30:32.188274+00	\N	85bb808b-6596-4b8a-93aa-ab22cc5720e8
00000000-0000-0000-0000-000000000000	122	serhvb2qebx3	141223a6-6603-49a9-8f61-7caa6f12cf59	f	2025-07-06 23:30:33.511767+00	2025-07-06 23:30:33.511767+00	\N	7f9ea083-d927-4480-8cda-1d324f0a0f95
00000000-0000-0000-0000-000000000000	123	wwcg3ui6plne	396ee654-66e0-4407-b4a5-f8757363c7ac	f	2025-07-06 23:30:34.801496+00	2025-07-06 23:30:34.801496+00	\N	220793b5-9358-45b9-b395-4aded7d441d3
00000000-0000-0000-0000-000000000000	124	4lai3wk7orvg	63b72a63-e5d9-45be-aa99-a7c26ef5d00e	f	2025-07-06 23:30:36.114561+00	2025-07-06 23:30:36.114561+00	\N	a6d74574-b064-4118-9929-87b04c5cdceb
00000000-0000-0000-0000-000000000000	125	nk5gzrelgcwz	7c99c941-ab16-4b77-b0cd-e240575ee019	f	2025-07-06 23:30:37.393718+00	2025-07-06 23:30:37.393718+00	\N	e0c1c3ec-1c77-4a5a-b3a5-72b7f434b9be
00000000-0000-0000-0000-000000000000	126	mr5ie5trhkjh	5898d819-8063-4e9e-aabf-d510dea65708	f	2025-07-06 23:30:38.668858+00	2025-07-06 23:30:38.668858+00	\N	002b7c86-3c1f-41ee-a1de-7a7f4c8567c7
00000000-0000-0000-0000-000000000000	127	5lg3t3qnhzca	e7c03374-717f-4458-8f16-1d0931f87240	f	2025-07-06 23:30:39.933415+00	2025-07-06 23:30:39.933415+00	\N	89a6cf39-f1e1-49ef-b1b4-eae9e77a0123
00000000-0000-0000-0000-000000000000	128	pcvanmi5h7t4	0b08f0c8-3c0f-498a-b0f9-796a2e4d3a2a	f	2025-07-06 23:30:41.255704+00	2025-07-06 23:30:41.255704+00	\N	5da3bb73-a05e-4439-b05d-b9906c427b2e
00000000-0000-0000-0000-000000000000	130	hhnsxnadhck7	0b08f0c8-3c0f-498a-b0f9-796a2e4d3a2a	f	2025-07-06 23:33:50.526752+00	2025-07-06 23:33:50.526752+00	\N	8dbb094d-aa7d-4940-bf03-b27836c63e4f
00000000-0000-0000-0000-000000000000	131	jio3z4szrgdk	0b08f0c8-3c0f-498a-b0f9-796a2e4d3a2a	f	2025-07-06 23:35:05.598723+00	2025-07-06 23:35:05.598723+00	\N	8924fa09-e9af-4c71-8f7f-73aeab358745
00000000-0000-0000-0000-000000000000	129	uyirijfsqqs6	1e85df90-4c60-426a-8599-20866cd4179f	t	2025-07-06 23:32:18.597096+00	2025-07-07 15:19:11.93632+00	\N	2533aaa6-a09d-493b-86b6-bba65fe0beff
00000000-0000-0000-0000-000000000000	132	7kt73tg5j5o6	1e85df90-4c60-426a-8599-20866cd4179f	t	2025-07-07 15:19:11.947692+00	2025-07-08 11:53:50.269873+00	uyirijfsqqs6	2533aaa6-a09d-493b-86b6-bba65fe0beff
00000000-0000-0000-0000-000000000000	134	zcykpit3y3jg	359c592a-dd23-4db2-9135-bcdd5c066705	f	2025-07-08 19:45:02.756846+00	2025-07-08 19:45:02.756846+00	\N	12329c7f-87f6-4b5b-b0ba-6e82f2a320c4
00000000-0000-0000-0000-000000000000	135	iitmijnm6skm	359c592a-dd23-4db2-9135-bcdd5c066705	f	2025-07-08 19:49:06.339184+00	2025-07-08 19:49:06.339184+00	\N	264954fc-7f2d-4bea-9160-b9fa5d45880c
00000000-0000-0000-0000-000000000000	136	s35tye3g2sqc	359c592a-dd23-4db2-9135-bcdd5c066705	f	2025-07-08 19:49:08.553398+00	2025-07-08 19:49:08.553398+00	\N	fd6d720d-e832-4467-9cad-d6779dd976e1
00000000-0000-0000-0000-000000000000	137	yvlle4ewf3lo	359c592a-dd23-4db2-9135-bcdd5c066705	f	2025-07-08 19:49:34.300891+00	2025-07-08 19:49:34.300891+00	\N	45a92eba-8240-4131-948b-1c34510adb67
00000000-0000-0000-0000-000000000000	138	gmtca4zq5atj	359c592a-dd23-4db2-9135-bcdd5c066705	f	2025-07-08 19:49:43.230965+00	2025-07-08 19:49:43.230965+00	\N	c2573d4b-4d19-4ba2-80c1-2adad8b439fa
00000000-0000-0000-0000-000000000000	139	5tufmbqgvmrl	359c592a-dd23-4db2-9135-bcdd5c066705	f	2025-07-08 19:50:06.814869+00	2025-07-08 19:50:06.814869+00	\N	7a589885-59a7-421d-98a9-33eb3db725bf
00000000-0000-0000-0000-000000000000	140	ldhkevgbdyi2	359c592a-dd23-4db2-9135-bcdd5c066705	f	2025-07-08 19:51:06.925698+00	2025-07-08 19:51:06.925698+00	\N	7e10202e-f611-49ca-9d72-18f871f68d2e
00000000-0000-0000-0000-000000000000	141	uv42vup366wr	359c592a-dd23-4db2-9135-bcdd5c066705	f	2025-07-08 19:52:44.270708+00	2025-07-08 19:52:44.270708+00	\N	e6b67609-35cd-4ee6-bf02-0f5419912646
00000000-0000-0000-0000-000000000000	142	vttifqyflujr	359c592a-dd23-4db2-9135-bcdd5c066705	f	2025-07-08 19:53:05.782531+00	2025-07-08 19:53:05.782531+00	\N	bb5cc1a4-7b7e-4abb-949b-8f74ca395741
00000000-0000-0000-0000-000000000000	143	3vv3hfzexina	359c592a-dd23-4db2-9135-bcdd5c066705	f	2025-07-08 19:53:22.90008+00	2025-07-08 19:53:22.90008+00	\N	b9082d41-42cf-496a-bd06-b025b0b46ba6
00000000-0000-0000-0000-000000000000	144	2ynljvom5ajs	359c592a-dd23-4db2-9135-bcdd5c066705	f	2025-07-08 19:55:03.139494+00	2025-07-08 19:55:03.139494+00	\N	29afafed-fa1d-4f91-8c0c-77fab4f0f416
00000000-0000-0000-0000-000000000000	145	jlxlranx2uw7	359c592a-dd23-4db2-9135-bcdd5c066705	f	2025-07-08 19:56:07.523334+00	2025-07-08 19:56:07.523334+00	\N	460ec79e-15a3-404d-963b-10d63a84cd9e
00000000-0000-0000-0000-000000000000	146	yl3zcthhkf2h	359c592a-dd23-4db2-9135-bcdd5c066705	f	2025-07-08 20:53:18.069004+00	2025-07-08 20:53:18.069004+00	\N	f65ff8af-05b2-46a0-baa3-5678815f6f6a
00000000-0000-0000-0000-000000000000	147	em4v6xqxa5a2	4ef422bd-aba3-4280-a28f-d0ac7cc6c208	f	2025-07-08 21:44:26.291988+00	2025-07-08 21:44:26.291988+00	\N	f42d638b-a030-4e34-8345-5ae6c6c6dfce
00000000-0000-0000-0000-000000000000	149	sgal6mn7bcj2	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	f	2025-07-09 07:59:45.433597+00	2025-07-09 07:59:45.433597+00	\N	eb839424-97f6-47eb-b4a0-25c0a07e77e5
00000000-0000-0000-0000-000000000000	148	zkirhzowrc2l	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	f	2025-07-09 07:59:45.429316+00	2025-07-09 07:59:45.429316+00	\N	c0bdcab2-8bb7-4cae-a0fa-554a422cfa99
00000000-0000-0000-0000-000000000000	150	io7boem6hlz2	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	f	2025-07-09 08:00:46.510898+00	2025-07-09 08:00:46.510898+00	\N	a315791a-bf8f-4f6c-ac3a-103e3420c246
00000000-0000-0000-0000-000000000000	151	kvcu3v4ybl2y	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	f	2025-07-09 08:00:47.928786+00	2025-07-09 08:00:47.928786+00	\N	0d3f8ecb-92a8-4b8b-8783-8b5fe30f4c67
00000000-0000-0000-0000-000000000000	152	7ab7vepqyfxz	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-09 08:03:02.721934+00	2025-07-09 08:03:02.721934+00	\N	a3efb9f1-12b5-4289-981c-712f233e9970
00000000-0000-0000-0000-000000000000	153	3cuw2knvcci7	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-09 08:10:05.69572+00	2025-07-09 08:10:05.69572+00	\N	436dc88c-96bc-4232-9396-1b357e8eda00
00000000-0000-0000-0000-000000000000	154	swnpn76kekth	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	f	2025-07-09 08:11:04.340913+00	2025-07-09 08:11:04.340913+00	\N	cba58655-1789-4b51-9830-5b0f34322325
00000000-0000-0000-0000-000000000000	155	cawjklywqfz5	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	f	2025-07-09 08:26:23.632678+00	2025-07-09 08:26:23.632678+00	\N	3dcb7ae4-f0b3-4d26-b27f-9b38683f63b7
00000000-0000-0000-0000-000000000000	156	u5p2udli42xw	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	f	2025-07-09 08:26:23.775706+00	2025-07-09 08:26:23.775706+00	\N	31e176f0-4f2d-49a7-b1f7-c52fbd9239a8
00000000-0000-0000-0000-000000000000	157	phfkhj5lh4sj	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-09 08:26:52.465235+00	2025-07-09 08:26:52.465235+00	\N	f3247182-481a-403f-9e80-11c13e90bb6f
00000000-0000-0000-0000-000000000000	158	glx5s6wnafs3	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-09 10:03:46.938949+00	2025-07-09 10:03:46.938949+00	\N	b68abd87-359e-41ad-913d-04d2a59fc604
00000000-0000-0000-0000-000000000000	159	gc5gqctop4yo	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-09 10:03:47.760497+00	2025-07-09 10:03:47.760497+00	\N	51967b86-75df-448d-b63f-cd385ae469a5
00000000-0000-0000-0000-000000000000	160	2aip6esh6mu2	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	f	2025-07-09 10:14:25.557578+00	2025-07-09 10:14:25.557578+00	\N	c4856b3d-2302-4e42-8dce-da6da314d17a
00000000-0000-0000-0000-000000000000	133	i4nqmj7vetxk	1e85df90-4c60-426a-8599-20866cd4179f	t	2025-07-08 11:53:50.285283+00	2025-07-09 12:10:40.095956+00	7kt73tg5j5o6	2533aaa6-a09d-493b-86b6-bba65fe0beff
00000000-0000-0000-0000-000000000000	161	7cbo7e3gxfli	1e85df90-4c60-426a-8599-20866cd4179f	t	2025-07-09 12:10:40.101463+00	2025-07-09 13:09:16.532791+00	i4nqmj7vetxk	2533aaa6-a09d-493b-86b6-bba65fe0beff
00000000-0000-0000-0000-000000000000	163	ks6gcplh2tee	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	f	2025-07-09 13:47:09.548399+00	2025-07-09 13:47:09.548399+00	\N	aeed4fcb-c9b8-4365-8d28-22231fd5d0df
00000000-0000-0000-0000-000000000000	162	xh6kmqcpzict	1e85df90-4c60-426a-8599-20866cd4179f	t	2025-07-09 13:09:16.545113+00	2025-07-09 15:45:28.887447+00	7cbo7e3gxfli	2533aaa6-a09d-493b-86b6-bba65fe0beff
00000000-0000-0000-0000-000000000000	164	ku56htzc3i4p	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	f	2025-07-09 13:47:11.225606+00	2025-07-09 13:47:11.225606+00	\N	c0e04e4a-84e7-4553-b303-10b90b92efb2
00000000-0000-0000-0000-000000000000	165	rz5vfdffmoga	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	f	2025-07-09 13:47:27.68932+00	2025-07-09 13:47:27.68932+00	\N	dc237747-aaa5-4ffb-ba1a-8a56fbc73ac4
00000000-0000-0000-0000-000000000000	166	m6hpum7tqedt	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	f	2025-07-09 13:47:27.732361+00	2025-07-09 13:47:27.732361+00	\N	93a321fc-eaf4-40c6-8584-186ae381ab5f
00000000-0000-0000-0000-000000000000	167	v47o6lvj2i7w	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	f	2025-07-09 13:47:29.004033+00	2025-07-09 13:47:29.004033+00	\N	dc443ad9-2f90-461a-aaf5-caaab292b40f
00000000-0000-0000-0000-000000000000	168	z5ckva2s55gj	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	f	2025-07-09 13:47:31.287408+00	2025-07-09 13:47:31.287408+00	\N	6693e873-441f-444e-ae5c-36a9074f6d13
00000000-0000-0000-0000-000000000000	169	mcershhgsuyc	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	f	2025-07-09 15:12:30.427146+00	2025-07-09 15:12:30.427146+00	\N	e4c81172-1ba0-4e2a-9e88-e0ed1a37040c
00000000-0000-0000-0000-000000000000	170	nh6vegpqcw6u	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	f	2025-07-09 15:14:39.175772+00	2025-07-09 15:14:39.175772+00	\N	d4394681-d543-4739-ade7-33eddc29a294
00000000-0000-0000-0000-000000000000	171	fftzm6knzytm	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	f	2025-07-09 15:14:39.414125+00	2025-07-09 15:14:39.414125+00	\N	fb5a6268-8631-4e76-8a07-1b4e3dc8a752
00000000-0000-0000-0000-000000000000	172	3syk753niigz	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-09 15:14:46.838116+00	2025-07-09 15:14:46.838116+00	\N	d80ee8fc-2b58-4422-bc0b-b56002eae811
00000000-0000-0000-0000-000000000000	173	qqzrnrdg4zyy	1e85df90-4c60-426a-8599-20866cd4179f	t	2025-07-09 15:45:28.891811+00	2025-07-09 17:24:29.199551+00	xh6kmqcpzict	2533aaa6-a09d-493b-86b6-bba65fe0beff
00000000-0000-0000-0000-000000000000	175	blrgnlsdnoon	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-09 17:27:54.511925+00	2025-07-09 17:27:54.511925+00	\N	c1568700-b2ec-4a6c-878a-4090588218dd
00000000-0000-0000-0000-000000000000	176	tndp2srz6n5g	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-09 17:27:55.799711+00	2025-07-09 17:27:55.799711+00	\N	c3f4f675-1682-47a4-8514-6280b3db3d4a
00000000-0000-0000-0000-000000000000	177	idwvooxliftr	1ce57413-49e4-4706-ace4-b2a3117a33c3	f	2025-07-09 17:28:44.56002+00	2025-07-09 17:28:44.56002+00	\N	15fa3a5a-e903-4acd-a4c5-76997800b78f
00000000-0000-0000-0000-000000000000	178	6ckz2v7zwuvm	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	f	2025-07-09 17:29:58.686968+00	2025-07-09 17:29:58.686968+00	\N	6099d0cd-a3f3-494b-8f16-67d5d73e78bc
00000000-0000-0000-0000-000000000000	179	6ktx3vwtnx4i	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-10 09:06:53.254202+00	2025-07-10 09:06:53.254202+00	\N	1bea534c-d7e4-481f-8dc6-07d58388077d
00000000-0000-0000-0000-000000000000	180	l6fu3aorwsl2	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-10 09:06:54.045529+00	2025-07-10 09:06:54.045529+00	\N	d9216698-bdfe-44e8-9443-0260399faba5
00000000-0000-0000-0000-000000000000	181	6n4z2rnyvdgy	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	f	2025-07-10 09:26:40.552328+00	2025-07-10 09:26:40.552328+00	\N	7271dce2-f1d6-4cea-859b-62dd0b2a6a81
00000000-0000-0000-0000-000000000000	182	bowreknpnuhx	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	f	2025-07-10 09:26:41.78226+00	2025-07-10 09:26:41.78226+00	\N	20ad66b1-797a-4e58-ad15-ea4bc952bd87
00000000-0000-0000-0000-000000000000	174	lkfq47apzszd	1e85df90-4c60-426a-8599-20866cd4179f	t	2025-07-09 17:24:29.202298+00	2025-07-10 13:50:00.46177+00	qqzrnrdg4zyy	2533aaa6-a09d-493b-86b6-bba65fe0beff
00000000-0000-0000-0000-000000000000	184	65tcamv6g2ll	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-10 13:55:58.349825+00	2025-07-10 13:55:58.349825+00	\N	c3555530-b1de-4775-8139-79dc50640b9b
00000000-0000-0000-0000-000000000000	185	4eci7yke72at	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-10 13:57:02.444239+00	2025-07-10 13:57:02.444239+00	\N	23e4ab7a-0f3a-4544-899f-48a2f938ea99
00000000-0000-0000-0000-000000000000	186	xblwexputrfc	a2d51914-1cde-4a1d-912e-50c388430197	t	2025-07-10 13:57:03.529554+00	2025-07-10 14:56:54.450695+00	\N	49490ff1-565f-4431-af17-250118550037
00000000-0000-0000-0000-000000000000	187	n53hqttfmlmf	a2d51914-1cde-4a1d-912e-50c388430197	t	2025-07-10 14:56:54.454914+00	2025-07-10 14:56:54.694636+00	xblwexputrfc	49490ff1-565f-4431-af17-250118550037
00000000-0000-0000-0000-000000000000	183	jzhrwibx4egd	1e85df90-4c60-426a-8599-20866cd4179f	t	2025-07-10 13:50:00.467403+00	2025-07-10 15:52:49.495682+00	lkfq47apzszd	2533aaa6-a09d-493b-86b6-bba65fe0beff
00000000-0000-0000-0000-000000000000	188	b4adlwinhjxm	a2d51914-1cde-4a1d-912e-50c388430197	t	2025-07-10 14:56:54.694973+00	2025-07-10 15:56:45.747302+00	n53hqttfmlmf	49490ff1-565f-4431-af17-250118550037
00000000-0000-0000-0000-000000000000	190	avce6smosjat	a2d51914-1cde-4a1d-912e-50c388430197	t	2025-07-10 15:56:45.751923+00	2025-07-10 15:56:46.079215+00	b4adlwinhjxm	49490ff1-565f-4431-af17-250118550037
00000000-0000-0000-0000-000000000000	191	2pjnikcl4cqd	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-10 15:56:46.079579+00	2025-07-10 15:56:46.079579+00	avce6smosjat	49490ff1-565f-4431-af17-250118550037
00000000-0000-0000-0000-000000000000	192	zjc2f4vj7yrg	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-10 16:10:43.615515+00	2025-07-10 16:10:43.615515+00	\N	7a7b9f23-3233-498b-9e4d-507c8f139f91
00000000-0000-0000-0000-000000000000	193	ldd3ci5hlxp3	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-10 16:10:45.50295+00	2025-07-10 16:10:45.50295+00	\N	1ec9ff5a-31e0-4b47-9a9a-71d883ee808a
00000000-0000-0000-0000-000000000000	194	q7opjcq7p3zz	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-10 16:16:21.160778+00	2025-07-10 16:16:21.160778+00	\N	b5f78b1f-fcbe-4d41-aeef-f4cd1fb6ccd8
00000000-0000-0000-0000-000000000000	195	6ano6cdkzw6h	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	f	2025-07-10 16:17:12.116633+00	2025-07-10 16:17:12.116633+00	\N	6836b3d0-0638-4350-9c28-cae015a4f2d2
00000000-0000-0000-0000-000000000000	196	okmv4sxitbd6	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-10 16:23:57.65971+00	2025-07-10 16:23:57.65971+00	\N	a7226eb0-795f-448d-ba5c-3c8c4a45883e
00000000-0000-0000-0000-000000000000	197	qpkx2bakjuhs	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	f	2025-07-10 16:25:02.901072+00	2025-07-10 16:25:02.901072+00	\N	b02e6481-b874-4186-8110-0924bab53a7d
00000000-0000-0000-0000-000000000000	198	xo2y5asxa3y3	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-10 16:39:38.189544+00	2025-07-10 16:39:38.189544+00	\N	3169def4-505d-48b6-923f-c332234a8164
00000000-0000-0000-0000-000000000000	199	z2hol6nw4m47	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	f	2025-07-10 16:40:41.84814+00	2025-07-10 16:40:41.84814+00	\N	46831c51-185b-4c33-9be1-57e4a464db17
00000000-0000-0000-0000-000000000000	200	scni7epazrjy	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-10 16:42:46.576226+00	2025-07-10 16:42:46.576226+00	\N	67f3a0dc-69db-48ee-87a9-f1eaf56ade7e
00000000-0000-0000-0000-000000000000	189	xvna2k6j4jki	1e85df90-4c60-426a-8599-20866cd4179f	t	2025-07-10 15:52:49.499142+00	2025-07-10 17:19:41.261471+00	jzhrwibx4egd	2533aaa6-a09d-493b-86b6-bba65fe0beff
00000000-0000-0000-0000-000000000000	201	bls56yuuzrro	a2d51914-1cde-4a1d-912e-50c388430197	t	2025-07-10 16:44:48.263242+00	2025-07-10 17:44:39.126228+00	\N	d944a68c-dde1-4e88-b7d8-f8b1deccd15f
00000000-0000-0000-0000-000000000000	203	472y243m5p6z	a2d51914-1cde-4a1d-912e-50c388430197	t	2025-07-10 17:44:39.130242+00	2025-07-10 17:44:39.753163+00	bls56yuuzrro	d944a68c-dde1-4e88-b7d8-f8b1deccd15f
00000000-0000-0000-0000-000000000000	204	rb6cuy74dcut	a2d51914-1cde-4a1d-912e-50c388430197	t	2025-07-10 17:44:39.753497+00	2025-07-10 18:44:29.870895+00	472y243m5p6z	d944a68c-dde1-4e88-b7d8-f8b1deccd15f
00000000-0000-0000-0000-000000000000	205	zk5dmokaw4ad	a2d51914-1cde-4a1d-912e-50c388430197	t	2025-07-10 18:44:29.875039+00	2025-07-10 18:44:30.180777+00	rb6cuy74dcut	d944a68c-dde1-4e88-b7d8-f8b1deccd15f
00000000-0000-0000-0000-000000000000	206	bkgmd23ndbwr	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-10 18:44:30.181209+00	2025-07-10 18:44:30.181209+00	zk5dmokaw4ad	d944a68c-dde1-4e88-b7d8-f8b1deccd15f
00000000-0000-0000-0000-000000000000	207	moqaj57g3oe6	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	f	2025-07-17 16:46:55.873353+00	2025-07-17 16:46:55.873353+00	\N	99923062-0886-45e9-917d-8f420edbc4c3
00000000-0000-0000-0000-000000000000	208	lkmtpamzxjnv	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-17 16:47:44.296863+00	2025-07-17 16:47:44.296863+00	\N	cc56d1f9-8110-41e0-843b-12519a8f9a35
00000000-0000-0000-0000-000000000000	209	craz7nvori27	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	f	2025-07-17 17:33:05.037451+00	2025-07-17 17:33:05.037451+00	\N	42824d4d-0045-4f46-8e06-d5ece2b2bfdb
00000000-0000-0000-0000-000000000000	210	nwem4tgsxbq6	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-17 17:33:47.750648+00	2025-07-17 17:33:47.750648+00	\N	202c1c86-19a1-4503-912b-9d5bd26b5fa5
00000000-0000-0000-0000-000000000000	211	6bi55rucl5vj	a2d51914-1cde-4a1d-912e-50c388430197	t	2025-07-17 17:35:08.658771+00	2025-07-17 19:19:51.994774+00	\N	4d3074c9-249e-4e96-8a4b-7569bf13e385
00000000-0000-0000-0000-000000000000	212	fik466opeuxt	a2d51914-1cde-4a1d-912e-50c388430197	t	2025-07-17 19:19:51.997041+00	2025-07-17 19:19:52.380477+00	6bi55rucl5vj	4d3074c9-249e-4e96-8a4b-7569bf13e385
00000000-0000-0000-0000-000000000000	213	vzqgppgmhxco	a2d51914-1cde-4a1d-912e-50c388430197	t	2025-07-17 19:19:52.3808+00	2025-07-17 20:19:42.514345+00	fik466opeuxt	4d3074c9-249e-4e96-8a4b-7569bf13e385
00000000-0000-0000-0000-000000000000	214	yerugfal5n4z	a2d51914-1cde-4a1d-912e-50c388430197	t	2025-07-17 20:19:42.51492+00	2025-07-17 20:19:42.822769+00	vzqgppgmhxco	4d3074c9-249e-4e96-8a4b-7569bf13e385
00000000-0000-0000-0000-000000000000	215	zfw7kl5qz5cl	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-17 20:19:42.823082+00	2025-07-17 20:19:42.823082+00	yerugfal5n4z	4d3074c9-249e-4e96-8a4b-7569bf13e385
00000000-0000-0000-0000-000000000000	216	gbhddkw4is5d	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-18 09:28:05.685897+00	2025-07-18 09:28:05.685897+00	\N	85ee24ad-25fa-47c4-b1de-dd1f09cda3ee
00000000-0000-0000-0000-000000000000	217	rszz3yo73svr	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-18 09:49:45.08199+00	2025-07-18 09:49:45.08199+00	\N	68625e10-b512-4535-93ff-a528d2b1bf99
00000000-0000-0000-0000-000000000000	202	wnssut2xi4zu	1e85df90-4c60-426a-8599-20866cd4179f	t	2025-07-10 17:19:41.265229+00	2025-07-19 05:03:20.518619+00	xvna2k6j4jki	2533aaa6-a09d-493b-86b6-bba65fe0beff
00000000-0000-0000-0000-000000000000	218	i77fnbt6s2rs	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-18 10:14:09.425718+00	2025-07-18 10:14:09.425718+00	\N	23e0dc6d-3436-4ef6-996c-ee4947042f58
00000000-0000-0000-0000-000000000000	219	ung7dkao4p3q	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-18 10:47:32.516816+00	2025-07-18 10:47:32.516816+00	\N	eb57ec64-5d93-4a1e-a84b-94ef2abea842
00000000-0000-0000-0000-000000000000	220	xxyim2vrkhva	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	f	2025-07-18 10:48:40.024337+00	2025-07-18 10:48:40.024337+00	\N	65983de9-6bea-4047-b53f-d01f38b13542
00000000-0000-0000-0000-000000000000	221	yoigfnwp2o2b	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	f	2025-07-18 10:55:06.728785+00	2025-07-18 10:55:06.728785+00	\N	ba52d417-13e0-4e9e-8288-74f931cd5dad
00000000-0000-0000-0000-000000000000	222	pi7g4jrbu4f2	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-18 11:46:04.52819+00	2025-07-18 11:46:04.52819+00	\N	a244faf4-f567-49b5-864e-c85409cb6e65
00000000-0000-0000-0000-000000000000	223	wb7riidgtjja	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-19 04:42:42.507456+00	2025-07-19 04:42:42.507456+00	\N	36e02d51-f948-4e63-b2ec-6f23b9facc1e
00000000-0000-0000-0000-000000000000	224	rue4j54o3qja	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	f	2025-07-19 04:43:41.97094+00	2025-07-19 04:43:41.97094+00	\N	50df0cbe-42b5-47c9-91f1-bb906cb745a7
00000000-0000-0000-0000-000000000000	225	p732u7a2zi2v	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-19 04:44:39.738002+00	2025-07-19 04:44:39.738002+00	\N	054270b2-0d77-4ee3-b94b-30d7a0209ebb
00000000-0000-0000-0000-000000000000	226	fo5sc6qwywja	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	f	2025-07-19 04:46:33.350773+00	2025-07-19 04:46:33.350773+00	\N	cea12436-5891-48e2-8523-9c84bf805df2
00000000-0000-0000-0000-000000000000	227	rs67kpjaun2a	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-19 04:49:38.842176+00	2025-07-19 04:49:38.842176+00	\N	b7ec25cc-2418-4cde-bc7b-9b202e1e5a42
00000000-0000-0000-0000-000000000000	228	iwgmqikzmptg	1e85df90-4c60-426a-8599-20866cd4179f	f	2025-07-19 05:03:20.523573+00	2025-07-19 05:03:20.523573+00	wnssut2xi4zu	2533aaa6-a09d-493b-86b6-bba65fe0beff
00000000-0000-0000-0000-000000000000	229	564yujhycrjo	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-19 05:05:53.76421+00	2025-07-19 05:05:53.76421+00	\N	c5fba476-bedd-4ac1-90da-bc87cb85d7c4
00000000-0000-0000-0000-000000000000	230	gra2hm5zdpok	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-19 05:07:01.651133+00	2025-07-19 05:07:01.651133+00	\N	570e09bc-fe94-4597-ae01-33e735f28873
00000000-0000-0000-0000-000000000000	231	psco57bac7vk	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-19 05:09:17.92696+00	2025-07-19 05:09:17.92696+00	\N	b865fa88-16b2-418f-901d-f5182b537122
00000000-0000-0000-0000-000000000000	232	h74iocraecxf	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	f	2025-07-19 05:09:43.793686+00	2025-07-19 05:09:43.793686+00	\N	97549cb5-475d-4b85-abe6-122dd1364e71
00000000-0000-0000-0000-000000000000	233	65whr37wmhy5	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-19 05:51:09.408572+00	2025-07-19 05:51:09.408572+00	\N	65eebcda-ff2a-45d0-8429-d9cb3fda4b3e
00000000-0000-0000-0000-000000000000	234	wxnbcwynjvyl	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	f	2025-07-19 06:00:12.829208+00	2025-07-19 06:00:12.829208+00	\N	0ea6243c-6b92-41dc-a94f-e06ea0396fdb
00000000-0000-0000-0000-000000000000	235	34ugltr56n4r	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-19 06:03:10.140736+00	2025-07-19 06:03:10.140736+00	\N	f7a0f3c4-5581-4163-b4d8-39afed6c8595
00000000-0000-0000-0000-000000000000	236	pwnsnjfb6kzc	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	f	2025-07-19 06:07:46.829514+00	2025-07-19 06:07:46.829514+00	\N	90d7c6c5-a244-4b67-8fea-c3b53cb3d104
00000000-0000-0000-0000-000000000000	237	gfoynfgcgwhq	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-19 06:09:43.019791+00	2025-07-19 06:09:43.019791+00	\N	6956b137-8682-4c96-a66e-c2ac75ad33c9
00000000-0000-0000-0000-000000000000	238	uxhgnkep5yt6	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-19 06:14:34.040099+00	2025-07-19 06:14:34.040099+00	\N	b26bd13d-838b-4911-82d6-3a2be3b63087
00000000-0000-0000-0000-000000000000	239	2fl5kkr5dqb3	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-19 06:38:02.455711+00	2025-07-19 06:38:02.455711+00	\N	2ed3069c-de53-4781-9533-d972e21d0c15
00000000-0000-0000-0000-000000000000	240	mozdfedqbtsd	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	f	2025-07-19 06:56:44.248731+00	2025-07-19 06:56:44.248731+00	\N	376f462f-b995-4749-9f9a-f7fa22200f99
00000000-0000-0000-0000-000000000000	241	o26vcfhunnsl	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-26 06:32:32.853575+00	2025-07-26 06:32:32.853575+00	\N	e083be42-3419-4602-9862-581b78e1bc0a
00000000-0000-0000-0000-000000000000	242	mzs642qblxw5	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	f	2025-07-26 06:34:17.332888+00	2025-07-26 06:34:17.332888+00	\N	de566707-2bf1-486c-a9ae-7f5acb2221b0
00000000-0000-0000-0000-000000000000	243	yzuxatpih7jw	a2d51914-1cde-4a1d-912e-50c388430197	t	2025-07-26 06:35:49.372619+00	2025-07-26 07:35:38.554798+00	\N	8ac8b2bf-ddcb-46b6-9523-e6bface88fb7
00000000-0000-0000-0000-000000000000	244	vdttu23tt26z	a2d51914-1cde-4a1d-912e-50c388430197	t	2025-07-26 07:35:38.559961+00	2025-07-26 07:35:38.805818+00	yzuxatpih7jw	8ac8b2bf-ddcb-46b6-9523-e6bface88fb7
00000000-0000-0000-0000-000000000000	245	prq7fgxrjyww	a2d51914-1cde-4a1d-912e-50c388430197	t	2025-07-26 07:35:38.806106+00	2025-07-26 08:35:27.637052+00	vdttu23tt26z	8ac8b2bf-ddcb-46b6-9523-e6bface88fb7
00000000-0000-0000-0000-000000000000	246	tbk5e32lt6f2	a2d51914-1cde-4a1d-912e-50c388430197	t	2025-07-26 08:35:27.640329+00	2025-07-26 08:35:27.896353+00	prq7fgxrjyww	8ac8b2bf-ddcb-46b6-9523-e6bface88fb7
00000000-0000-0000-0000-000000000000	247	aj2fcorp6gta	a2d51914-1cde-4a1d-912e-50c388430197	f	2025-07-26 08:35:27.89666+00	2025-07-26 08:35:27.89666+00	tbk5e32lt6f2	8ac8b2bf-ddcb-46b6-9523-e6bface88fb7
\.


--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.saml_providers (id, sso_provider_id, entity_id, metadata_xml, metadata_url, attribute_mapping, created_at, updated_at, name_id_format) FROM stdin;
\.


--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.saml_relay_states (id, sso_provider_id, request_id, for_email, redirect_to, created_at, updated_at, flow_state_id) FROM stdin;
\.


--
-- Data for Name: schema_migrations; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.schema_migrations (version) FROM stdin;
20171026211738
20171026211808
20171026211834
20180103212743
20180108183307
20180119214651
20180125194653
00
20210710035447
20210722035447
20210730183235
20210909172000
20210927181326
20211122151130
20211124214934
20211202183645
20220114185221
20220114185340
20220224000811
20220323170000
20220429102000
20220531120530
20220614074223
20220811173540
20221003041349
20221003041400
20221011041400
20221020193600
20221021073300
20221021082433
20221027105023
20221114143122
20221114143410
20221125140132
20221208132122
20221215195500
20221215195800
20221215195900
20230116124310
20230116124412
20230131181311
20230322519590
20230402418590
20230411005111
20230508135423
20230523124323
20230818113222
20230914180801
20231027141322
20231114161723
20231117164230
20240115144230
20240214120130
20240306115329
20240314092811
20240427152123
20240612123726
20240729123726
20240802193726
20240806073726
20241009103726
\.


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.sessions (id, user_id, created_at, updated_at, factor_id, aal, not_after, refreshed_at, user_agent, ip, tag) FROM stdin;
14cf00f4-471e-4a3d-8e18-3f362319faee	40e670c9-3227-4adb-bac9-14930a87a782	2025-07-06 23:03:29.265344+00	2025-07-06 23:03:29.265344+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
1c6d7e52-8395-4319-a153-50f308031b6f	40e670c9-3227-4adb-bac9-14930a87a782	2025-07-06 23:06:26.66375+00	2025-07-06 23:06:26.66375+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
5e292e13-76e1-4d9a-ae1c-2a16d1495bf5	40e670c9-3227-4adb-bac9-14930a87a782	2025-07-06 23:07:00.710364+00	2025-07-06 23:07:00.710364+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
2e2eaee4-40a6-435b-b633-0d614546e540	f043067b-9ef4-4009-93e3-a8c2dec006e1	2025-07-06 23:19:29.595713+00	2025-07-06 23:19:29.595713+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
a6457166-c302-45e8-a596-4aea4d527b94	00654f1b-b3e3-43af-a7b4-56f97921040b	2025-07-06 23:19:30.040304+00	2025-07-06 23:19:30.040304+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
fff5a52e-2097-44ad-a250-6abcee4caf28	359c592a-dd23-4db2-9135-bcdd5c066705	2025-07-06 23:19:30.420243+00	2025-07-06 23:19:30.420243+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
30e55564-0145-4e7a-ae10-3c6c40193b90	c1f5941b-17b0-4191-bfb9-7dc67c526310	2025-07-06 23:19:30.679033+00	2025-07-06 23:19:30.679033+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
701d0baa-5683-4d29-a159-d3cba13a46f2	1ce57413-49e4-4706-ace4-b2a3117a33c3	2025-07-06 23:19:30.944967+00	2025-07-06 23:19:30.944967+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
cb58faae-8fbc-4e43-a23f-2e4cc7d149d6	4fcafc36-f358-4930-8e98-e10347b330d8	2025-07-06 23:19:31.325264+00	2025-07-06 23:19:31.325264+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
24db0f9d-3272-4492-85b2-0534a1fcb7f7	6485a6cd-3531-4d64-8d9d-c7e497f1c618	2025-07-06 23:19:31.644379+00	2025-07-06 23:19:31.644379+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
b90c6b24-c588-4831-b0a6-ac4fc50acb79	36078707-91df-4b7b-8b4a-8e342bbc3e36	2025-07-06 23:19:32.02045+00	2025-07-06 23:19:32.02045+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
9e111ad1-5670-4bf8-a575-8ee3e1d37832	d362753f-74bf-427c-8666-6cad45b48cd0	2025-07-06 23:19:32.395493+00	2025-07-06 23:19:32.395493+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
ace83962-60a7-48c0-b3c8-4a55aca15b10	b2105c0e-41f7-4adc-a6d4-a3bab47ef2ee	2025-07-06 23:19:32.652394+00	2025-07-06 23:19:32.652394+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
77f204ba-6199-44c1-a936-129c6915a862	759276a4-cc74-4d53-bd9f-d7611a54e140	2025-07-06 23:19:32.933764+00	2025-07-06 23:19:32.933764+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
1c0cc52c-bd58-4781-846c-3a8ed3f6ee83	695edbf7-687d-434f-8e37-706f38502b57	2025-07-06 23:19:33.226313+00	2025-07-06 23:19:33.226313+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
7751cb91-220d-407f-9abb-1bd5248be93c	e9f9d1f4-66be-4978-b4ab-a31c37fbc42f	2025-07-06 23:19:33.59136+00	2025-07-06 23:19:33.59136+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
abe0ca13-7bbd-4a28-83f8-fd606388c08f	e0ce2d2b-bd66-4d34-a109-7e719aad41e2	2025-07-06 23:19:33.870149+00	2025-07-06 23:19:33.870149+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
7531c0d3-e4d7-4343-a084-409a3d9b884b	13f0aceb-43a4-4120-ad57-8ce74766a078	2025-07-06 23:19:34.235812+00	2025-07-06 23:19:34.235812+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
579dd5ce-3422-4937-947a-f2cda91923b8	7919fd8d-0f89-40a5-baf0-12c87c32e39c	2025-07-06 23:19:34.642801+00	2025-07-06 23:19:34.642801+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
f9c2b4ac-66b0-45f4-9816-8cb46e68e06a	d57366cd-d4e2-4731-8559-445f513c2d91	2025-07-06 23:19:34.983496+00	2025-07-06 23:19:34.983496+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
04219cb8-42e6-4899-b6eb-f240a633ab3c	c11b8b42-5040-4e36-a6cd-8d191d001793	2025-07-06 23:19:35.230193+00	2025-07-06 23:19:35.230193+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
bc49a365-bb8e-4ea7-8235-d072fd9522b3	8fbb89b6-ec73-44b9-a055-f705841efad5	2025-07-06 23:19:35.510269+00	2025-07-06 23:19:35.510269+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
9f08aff5-20da-4c9d-b0f8-07af263167e6	3382735c-65d6-4f3a-ac19-1da3efff8dc9	2025-07-06 23:19:35.767535+00	2025-07-06 23:19:35.767535+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
8c66df02-9fe2-4084-9682-e9186101df9f	294edd58-3f43-4693-98c7-0912ee512a17	2025-07-06 23:19:36.0354+00	2025-07-06 23:19:36.0354+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
69f24172-8296-4054-a025-b7516bb8da1d	de264ef1-6740-422b-bf8d-a104532e0c90	2025-07-06 23:19:36.303532+00	2025-07-06 23:19:36.303532+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
78e66d83-c16e-427a-a6e4-8e8414d9df95	e2535c7d-c6d4-4e72-9a09-f28bc8ed9a7e	2025-07-06 23:19:36.709907+00	2025-07-06 23:19:36.709907+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
e4acbf67-be9f-4d91-87b8-71883d76ef98	90cd8044-d51a-4dfb-8dba-ba12538edd0b	2025-07-06 23:19:36.962166+00	2025-07-06 23:19:36.962166+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
fa68866c-7faa-4766-a84f-ac41fe4ec7fe	38a9c3a7-4faf-4053-b3ce-39b3807d1bf8	2025-07-06 23:19:37.240059+00	2025-07-06 23:19:37.240059+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
693ec374-2091-4d37-a0f3-07c65b28c835	8058af23-f469-4ca8-a7c4-5182a0eef655	2025-07-06 23:19:37.488732+00	2025-07-06 23:19:37.488732+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
f7593c4b-f70d-4b9c-9e41-2bb84c4ba0c7	cc3c89cc-118b-4779-9901-580245998f7b	2025-07-06 23:19:37.750804+00	2025-07-06 23:19:37.750804+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
76eeae7f-d055-40b6-9731-59b6409827da	5ee23e8e-b8db-4554-9d10-41a19321f817	2025-07-06 23:19:38.050352+00	2025-07-06 23:19:38.050352+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
80a39010-afa6-4872-ab93-e59004ed7e28	01ad9937-bd54-4b32-9458-9b50c81a84d1	2025-07-06 23:19:38.309016+00	2025-07-06 23:19:38.309016+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
c8e1fa7b-6dc7-4701-9425-154975707e5b	7baeab7d-13d6-47f5-ad82-65d9ca35c85e	2025-07-06 23:19:38.598843+00	2025-07-06 23:19:38.598843+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
0bf59029-2932-4415-940a-4a2e93ff3ac9	dba96981-5e2e-4b6b-af70-b1b6b4586390	2025-07-06 23:19:39.663658+00	2025-07-06 23:19:39.663658+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
e8d5b2c3-47ef-4c15-a773-7f84f13ec33a	945033ac-abb6-426c-88c6-926ffa615561	2025-07-06 23:19:49.602858+00	2025-07-06 23:19:49.602858+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
30d41a52-75c1-4114-b8da-f084787d47e3	7279bbef-accb-49e3-af8a-1eaa1950828c	2025-07-06 23:28:30.724566+00	2025-07-06 23:28:30.724566+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
1c7fd618-f842-4fde-9a7e-b42e59e58165	f5c1abe0-cbf4-449f-8f4c-5029070083ff	2025-07-06 23:28:32.035089+00	2025-07-06 23:28:32.035089+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
8e87ecae-d08e-4088-a3bc-4dece327fade	f26a23b8-080f-42ec-8856-0c6629d426aa	2025-07-06 23:28:33.326089+00	2025-07-06 23:28:33.326089+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
6c3a0661-843a-4818-881e-0eb95753282b	957b0e6b-9843-4531-8273-1878f186bdbe	2025-07-06 23:28:34.581054+00	2025-07-06 23:28:34.581054+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
714e53a1-8a1f-477f-9369-6ab8eee1f7c6	0552910e-f473-48bd-a631-8fd6c90b9a09	2025-07-06 23:28:35.877792+00	2025-07-06 23:28:35.877792+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
1672e6f8-9dce-4cea-b886-692dcc1cc8c8	92bb1183-589a-401f-a86b-5ae11a04e9bc	2025-07-06 23:28:38.495824+00	2025-07-06 23:28:38.495824+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
a6a5d091-0749-4497-8617-67578017c7e5	c5e5750f-bac1-4531-8acb-7b0e0027363a	2025-07-06 23:28:39.752055+00	2025-07-06 23:28:39.752055+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
fbf12d3d-a46c-438b-8292-48eea52121df	09a05d58-176a-4ead-b435-167ef5b12f8b	2025-07-06 23:28:41.004734+00	2025-07-06 23:28:41.004734+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
14b932ed-997e-4fc6-a24f-dcd97db964cf	e097a9f6-36fd-4a46-87ea-2cb4f19719c8	2025-07-06 23:28:42.289651+00	2025-07-06 23:28:42.289651+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
b5022eb9-c1eb-4b52-afa5-44a0ed0ededf	55a7bdfb-ed63-4e31-beca-88314bc8cc5f	2025-07-06 23:28:43.571199+00	2025-07-06 23:28:43.571199+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
f229704e-262f-4635-bd82-55b15b19e252	5ec60e6d-5b8c-4fe1-8181-1fec9ec2ab86	2025-07-06 23:28:44.898178+00	2025-07-06 23:28:44.898178+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
89e59692-4b3b-4463-8fcc-9a46c6b74198	2ebbab6a-e0e8-4a29-9e15-9b321ded899a	2025-07-06 23:28:46.160507+00	2025-07-06 23:28:46.160507+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
5b3e76fd-a5ec-4c46-bbe7-268533ff849f	3ae6e2bf-60f1-4bec-936b-048b25d8f68e	2025-07-06 23:28:47.454571+00	2025-07-06 23:28:47.454571+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
6f13ac2c-401d-4a4c-b3c8-119e62a034f8	e00a142c-8a75-49a8-bed1-3d95a0f4c459	2025-07-06 23:28:48.755957+00	2025-07-06 23:28:48.755957+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
36a6968f-e1d8-44a9-abe0-dda6cb60c0d6	a6beb2c1-97e9-4b89-87f8-c6ce608ee596	2025-07-06 23:28:50.093136+00	2025-07-06 23:28:50.093136+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
c4648124-47f0-47b8-b4db-2ea48aeb24cb	915bdb50-deb0-49b7-8c7a-e17268258e68	2025-07-06 23:28:51.330133+00	2025-07-06 23:28:51.330133+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
b80c6b18-0768-4885-9601-0a98b27febbd	f2a4c1ed-57db-44a8-b062-4ce8ae9e1b98	2025-07-06 23:28:52.621116+00	2025-07-06 23:28:52.621116+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
53dba4e1-5f29-4948-b50a-af0026425713	e337a4dc-1832-4a9d-85f4-1d30683eb964	2025-07-06 23:28:53.917626+00	2025-07-06 23:28:53.917626+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
ff377001-34f5-48e2-906b-0edc140a48cd	56371e1b-e464-4d3d-90d3-3f025c40f398	2025-07-06 23:28:55.21878+00	2025-07-06 23:28:55.21878+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
1e27ce4a-ac19-46ad-9d22-6157e25fd591	cc7c1dc4-ff0b-499f-a39f-ca58a1e2cfd1	2025-07-06 23:28:56.507271+00	2025-07-06 23:28:56.507271+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
c44fdfb7-614d-4895-9887-d19be62ab109	4d01ad91-ce75-49ce-8f20-e99e68343a4d	2025-07-06 23:28:57.7944+00	2025-07-06 23:28:57.7944+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
6a9079e4-ac09-4cca-8abf-516d2606ff3e	759b543d-2173-4901-803d-dd210dbf41db	2025-07-06 23:28:59.141973+00	2025-07-06 23:28:59.141973+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
51eece24-596c-4774-a1aa-c80a2e0e5992	fe1078bc-e494-4dbe-b8b9-5b289e505666	2025-07-06 23:29:00.45996+00	2025-07-06 23:29:00.45996+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
b9dae8c0-6604-4d58-979c-03c75ee5f89a	c98b5d43-3b01-458d-a702-54d0924f8c98	2025-07-06 23:29:01.710026+00	2025-07-06 23:29:01.710026+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
e93c3d9e-1a48-4fbb-be0a-eb7d5935857d	03b6eecb-379b-4083-b4a5-32583ab0fda1	2025-07-06 23:29:02.971212+00	2025-07-06 23:29:02.971212+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
151f1108-3436-4e7d-9162-51e81a100bb6	bf1356fc-2359-499d-a8fa-3cf08a07254e	2025-07-06 23:29:04.258928+00	2025-07-06 23:29:04.258928+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
673453f4-99ed-474c-804f-2d892e91df4e	cd234ac4-69fa-4a9f-8c5a-7544555a229f	2025-07-06 23:29:05.563957+00	2025-07-06 23:29:05.563957+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
f521eafc-3eac-4858-a631-2f79dd0c1fdd	55bbe185-cda0-49e6-8f8a-cace1ba1129a	2025-07-06 23:29:06.83874+00	2025-07-06 23:29:06.83874+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
720a8164-ecac-4b8d-b6fd-1b281a6a1782	5f8ff2f1-18d7-4627-b4f2-d42fbe9f132a	2025-07-06 23:29:08.146326+00	2025-07-06 23:29:08.146326+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
7c1220f3-3f91-4e20-83dd-b610fb55dc83	34de1333-884a-4bb8-bfe8-9f618568973c	2025-07-06 23:29:09.400176+00	2025-07-06 23:29:09.400176+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
790ea3a3-f806-4de2-82cb-8195e1faad55	496f4ad0-249e-41e1-857f-2cd6ae7fa1ef	2025-07-06 23:29:10.707344+00	2025-07-06 23:29:10.707344+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
35128808-d5ba-4fc0-9f55-356d42a96db9	4c2a2cec-2745-4073-85f9-04ad472b017d	2025-07-06 23:29:12.02272+00	2025-07-06 23:29:12.02272+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
c812bf57-60cd-4a97-a4f4-ba7f20623786	ad781a50-10b1-40ce-87a0-e22f98502cf7	2025-07-06 23:29:13.336003+00	2025-07-06 23:29:13.336003+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
58cf10a3-ce68-4997-8035-ef429007d911	f234be03-5a87-4dc5-bb74-280676f90bbb	2025-07-06 23:29:14.631103+00	2025-07-06 23:29:14.631103+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
ba245ff4-77e7-4463-8602-79df45fdf223	920244f9-7510-4aba-a7f8-42819a4f56e1	2025-07-06 23:29:17.108051+00	2025-07-06 23:29:17.108051+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
f70b6f9f-738a-4abf-8a5c-788d172db684	490830f3-23c6-4e39-9850-0257a84ec7ad	2025-07-06 23:29:18.381819+00	2025-07-06 23:29:18.381819+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
3045437e-21ac-4b57-a0ea-ba96a9e58b52	3615deed-9a1e-490a-b344-b664262f5cc4	2025-07-06 23:29:19.692574+00	2025-07-06 23:29:19.692574+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
8a144375-065d-47b6-aecc-51a29ccb8914	19a34652-2e3a-4551-bf66-10c32fefdcb9	2025-07-06 23:29:21.6157+00	2025-07-06 23:29:21.6157+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
19ea455e-03bc-403a-b35e-23c03fa09dc5	e9a10fb2-e0b7-4115-ab40-d9002738486a	2025-07-06 23:29:23.191332+00	2025-07-06 23:29:23.191332+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
a163b46e-af1c-4448-89e5-c46d59f0b1ee	23c1aeb2-602e-4076-9d13-4615c742f916	2025-07-06 23:29:24.913386+00	2025-07-06 23:29:24.913386+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
6f9b480d-d7d5-4963-966f-4f155239f756	42055b75-3473-48f0-9f12-a4abba8714ea	2025-07-06 23:29:26.180492+00	2025-07-06 23:29:26.180492+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
089853a7-edaa-4ad6-91f1-8af28cfd8706	07fd0355-c715-45f2-98ae-90b292d77d41	2025-07-06 23:29:27.492647+00	2025-07-06 23:29:27.492647+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
d6db6ee0-9cf5-43cb-9b72-276c3cd67f33	91db900d-0bef-4f07-90e5-bac9f72e08aa	2025-07-06 23:29:28.815262+00	2025-07-06 23:29:28.815262+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
317e8cde-30dd-4af3-90ba-c35eb8535453	55dac851-ecfc-4b93-9da7-1efe6be19fa0	2025-07-06 23:29:30.111044+00	2025-07-06 23:29:30.111044+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
dc69870b-11a6-4daa-817d-6892cf689de7	07a74c11-bbf3-41e3-8753-c282132a0942	2025-07-06 23:29:31.375473+00	2025-07-06 23:29:31.375473+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
219752a5-8a63-4813-959a-8daf685e5270	986cfe33-942a-4052-9d5f-585ba1c58e2a	2025-07-06 23:29:32.676443+00	2025-07-06 23:29:32.676443+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
cb5131cb-603e-4080-aaae-3d3966ad2f9c	1e85df90-4c60-426a-8599-20866cd4179f	2025-07-06 23:29:34.533697+00	2025-07-06 23:29:34.533697+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
8d6dff1e-8685-4851-a6f3-cc2a441cf45b	124afc78-d787-490e-ac3b-e4c99628cb40	2025-07-06 23:29:36.477563+00	2025-07-06 23:29:36.477563+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
a5da2c85-e197-4386-8bea-3fb3f3db27b0	40329907-7532-4f20-a086-331ca748a856	2025-07-06 23:29:38.607731+00	2025-07-06 23:29:38.607731+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
756f2613-7e1c-4734-82f6-7bf465824a9d	cc83167d-aa1f-4879-a15c-41dcb608a579	2025-07-06 23:29:39.953645+00	2025-07-06 23:29:39.953645+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
2ad80b65-c494-471b-b792-4d6cea6e8a2e	5d1addd3-2819-46ba-a2e2-a556e7ab56d5	2025-07-06 23:29:41.240097+00	2025-07-06 23:29:41.240097+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
2db71b5e-714a-4288-bd17-7dbf33592583	f0832eb1-0639-4593-a7f4-83c80588ea59	2025-07-06 23:29:42.525378+00	2025-07-06 23:29:42.525378+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
2efda568-80d4-497e-a59d-2cdaa2749c14	84306c4b-ca98-4eca-824b-98ef34f9235c	2025-07-06 23:29:43.84627+00	2025-07-06 23:29:43.84627+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
5f429e59-cd15-48b4-bc8b-59d01cdb3f70	32a145f7-f290-48da-a885-cac6acb8f18a	2025-07-06 23:29:45.300211+00	2025-07-06 23:29:45.300211+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
373f9206-c331-4d3f-8676-29b6d943f8eb	8d6f5bc2-d90a-41f6-bb35-0a3eb5119495	2025-07-06 23:29:47.097135+00	2025-07-06 23:29:47.097135+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
46821fea-4478-47ea-9d1c-17e048069c0e	fa01eacd-c7bf-4039-b3b7-b61d9b2311d8	2025-07-06 23:29:48.400534+00	2025-07-06 23:29:48.400534+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
d60db3a8-a45d-4a60-90d0-7019a9ade487	9ca18835-0971-4842-be97-08186fc34251	2025-07-06 23:29:49.667369+00	2025-07-06 23:29:49.667369+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
83576323-89f0-4f0f-bfe0-7453b88668a6	4f53ba4b-2d7f-4da3-a6a8-8eede3f7c060	2025-07-06 23:29:50.990676+00	2025-07-06 23:29:50.990676+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
31764dff-4094-4be1-a203-57fb5abea8f2	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-06 23:29:52.291435+00	2025-07-06 23:29:52.291435+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
ee642004-0641-4ec9-a50a-1876b1424565	0efe3c02-f278-4ec1-9038-fad1588f1493	2025-07-06 23:29:53.55822+00	2025-07-06 23:29:53.55822+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
bfe9c634-9614-40b8-bc1a-a284efcc3966	5459b24c-84b0-45ad-8c2c-2af37595df06	2025-07-06 23:29:54.825481+00	2025-07-06 23:29:54.825481+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
6d53e14b-2338-4646-bdd2-054c7c6d4e3a	2a043cb7-c39f-4d3b-86e6-fd939f593ff6	2025-07-06 23:29:56.142336+00	2025-07-06 23:29:56.142336+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
8c15c141-ae58-48a7-a3b0-e3336dbc9c93	079446fa-9e6c-4fd1-90ff-4432ff8bfc15	2025-07-06 23:29:57.423552+00	2025-07-06 23:29:57.423552+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
54808bf4-29bf-458b-9f2d-ea9bb47e26ef	78ebb959-0002-4e3a-8a73-62477951e421	2025-07-06 23:29:58.68927+00	2025-07-06 23:29:58.68927+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
b0463435-0b0c-4054-832b-d1dc19c90837	ffcbebef-bd6a-490a-a024-6ea73c71ac44	2025-07-06 23:30:00.00825+00	2025-07-06 23:30:00.00825+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
945c2aaf-6421-425e-9cd3-23db7e517d38	2ad27174-9dc2-4dd0-9b01-73d0a0c334e1	2025-07-06 23:30:02.54709+00	2025-07-06 23:30:02.54709+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
dae8638a-2ac5-4962-9636-bb05779faf61	cfa11a9a-0de0-4e32-99a0-5df45d2f56dd	2025-07-06 23:30:03.835949+00	2025-07-06 23:30:03.835949+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
6369e92a-399e-4f60-ae6c-8159c3732eaa	fe033a35-e2e5-405c-8d74-f5c247307f0b	2025-07-06 23:30:05.173304+00	2025-07-06 23:30:05.173304+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
56cf5531-5295-46b0-a048-e2fc13ad9aee	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	2025-07-06 23:30:06.476356+00	2025-07-06 23:30:06.476356+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
7c58e2c6-741b-4a3e-b146-e9da22269405	079ca79f-f4a5-494c-ab69-6eb5d9309140	2025-07-06 23:30:07.763313+00	2025-07-06 23:30:07.763313+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
cf51983a-1142-480a-8638-2f0982c50b9a	406386d9-94e4-4c78-83fd-604ffbb2dd5a	2025-07-06 23:30:09.339257+00	2025-07-06 23:30:09.339257+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
48c6ae3d-46b5-49a7-9c69-2a55b25ee04c	4ef422bd-aba3-4280-a28f-d0ac7cc6c208	2025-07-06 23:30:10.788063+00	2025-07-06 23:30:10.788063+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
e97e70df-7eb0-4844-a982-18c10f750500	96e1680c-63d7-4902-afd1-98b74cf34645	2025-07-06 23:30:12.090508+00	2025-07-06 23:30:12.090508+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
9ce4afa4-53c2-4389-b2e1-6dfddb192e35	8ed041f9-82b9-4c46-b620-2d74d82273d6	2025-07-06 23:30:15.369221+00	2025-07-06 23:30:15.369221+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
f0b0fc79-a347-441d-93e4-2d652599a389	6d505cca-71c5-4b89-8c62-40daee2fe79c	2025-07-06 23:30:16.916664+00	2025-07-06 23:30:16.916664+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
fcb2b117-7aa7-4d10-b45f-3905099bdaa3	49817fdc-6d6c-4a5d-9e45-5498a27e8555	2025-07-06 23:30:18.178463+00	2025-07-06 23:30:18.178463+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
5f790aa5-8b47-4761-a332-8ebd7c092486	91f0d641-d8b2-47ef-b164-198f0972d313	2025-07-06 23:30:19.477803+00	2025-07-06 23:30:19.477803+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
043280c3-bc64-496a-a490-672e98df8def	e6b8ae92-b4f3-4717-9efc-d743df2bf28c	2025-07-06 23:30:20.748861+00	2025-07-06 23:30:20.748861+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
8e23e621-0309-4f93-bafa-90c06cb16418	a38f3ea2-7acd-48f4-a79f-a25eeaec2d94	2025-07-06 23:30:22.890996+00	2025-07-06 23:30:22.890996+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
9861486d-c563-4c27-ac06-f493cc0aaab6	bc6a8258-631b-4b34-8e01-61e7e4ab7f2a	2025-07-06 23:30:24.226083+00	2025-07-06 23:30:24.226083+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
1b7df1ae-f8f9-42c6-87fc-66a63ee79fb1	17566d57-1e67-435d-a236-20b0d74c6b0d	2025-07-06 23:30:25.589517+00	2025-07-06 23:30:25.589517+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
5d039c7e-640f-4136-a3d7-2b38001e2e84	f05a5bde-deea-4c06-9398-07c9960aef2c	2025-07-06 23:30:26.902426+00	2025-07-06 23:30:26.902426+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
6db947e6-7f8d-4c08-baa4-ac6bf091ed7d	07eb809c-ab0b-4235-b0d7-9d0726ae9340	2025-07-06 23:30:28.176211+00	2025-07-06 23:30:28.176211+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
a172f4cc-58f2-40f1-8816-d7bb33ece973	0e6980f9-2985-431c-b311-4e0538ee213a	2025-07-06 23:30:29.480687+00	2025-07-06 23:30:29.480687+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
cd0cced3-e5f8-4960-a101-2142d2bbe496	a17350fc-6190-4acf-ad2f-9b3539c545f4	2025-07-06 23:30:30.752606+00	2025-07-06 23:30:30.752606+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
85bb808b-6596-4b8a-93aa-ab22cc5720e8	07dc5cce-f102-4237-810f-3f20640bc6d6	2025-07-06 23:30:32.187635+00	2025-07-06 23:30:32.187635+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
7f9ea083-d927-4480-8cda-1d324f0a0f95	141223a6-6603-49a9-8f61-7caa6f12cf59	2025-07-06 23:30:33.511122+00	2025-07-06 23:30:33.511122+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
220793b5-9358-45b9-b395-4aded7d441d3	396ee654-66e0-4407-b4a5-f8757363c7ac	2025-07-06 23:30:34.800815+00	2025-07-06 23:30:34.800815+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
a6d74574-b064-4118-9929-87b04c5cdceb	63b72a63-e5d9-45be-aa99-a7c26ef5d00e	2025-07-06 23:30:36.113978+00	2025-07-06 23:30:36.113978+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
e0c1c3ec-1c77-4a5a-b3a5-72b7f434b9be	7c99c941-ab16-4b77-b0cd-e240575ee019	2025-07-06 23:30:37.393101+00	2025-07-06 23:30:37.393101+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
002b7c86-3c1f-41ee-a1de-7a7f4c8567c7	5898d819-8063-4e9e-aabf-d510dea65708	2025-07-06 23:30:38.668218+00	2025-07-06 23:30:38.668218+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
89a6cf39-f1e1-49ef-b1b4-eae9e77a0123	e7c03374-717f-4458-8f16-1d0931f87240	2025-07-06 23:30:39.932806+00	2025-07-06 23:30:39.932806+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
5da3bb73-a05e-4439-b05d-b9906c427b2e	0b08f0c8-3c0f-498a-b0f9-796a2e4d3a2a	2025-07-06 23:30:41.255051+00	2025-07-06 23:30:41.255051+00	\N	aal1	\N	\N	python-httpx/0.28.1	171.51.190.119	\N
8dbb094d-aa7d-4940-bf03-b27836c63e4f	0b08f0c8-3c0f-498a-b0f9-796a2e4d3a2a	2025-07-06 23:33:50.525287+00	2025-07-06 23:33:50.525287+00	\N	aal1	\N	\N	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36	171.51.190.119	\N
8924fa09-e9af-4c71-8f7f-73aeab358745	0b08f0c8-3c0f-498a-b0f9-796a2e4d3a2a	2025-07-06 23:35:05.593459+00	2025-07-06 23:35:05.593459+00	\N	aal1	\N	\N	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36	171.51.190.119	\N
12329c7f-87f6-4b5b-b0ba-6e82f2a320c4	359c592a-dd23-4db2-9135-bcdd5c066705	2025-07-08 19:45:02.748289+00	2025-07-08 19:45:02.748289+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.242.205	\N
264954fc-7f2d-4bea-9160-b9fa5d45880c	359c592a-dd23-4db2-9135-bcdd5c066705	2025-07-08 19:49:06.334852+00	2025-07-08 19:49:06.334852+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.242.205	\N
fd6d720d-e832-4467-9cad-d6779dd976e1	359c592a-dd23-4db2-9135-bcdd5c066705	2025-07-08 19:49:08.552683+00	2025-07-08 19:49:08.552683+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.242.205	\N
45a92eba-8240-4131-948b-1c34510adb67	359c592a-dd23-4db2-9135-bcdd5c066705	2025-07-08 19:49:34.300096+00	2025-07-08 19:49:34.300096+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.242.205	\N
c2573d4b-4d19-4ba2-80c1-2adad8b439fa	359c592a-dd23-4db2-9135-bcdd5c066705	2025-07-08 19:49:43.227048+00	2025-07-08 19:49:43.227048+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.242.205	\N
7a589885-59a7-421d-98a9-33eb3db725bf	359c592a-dd23-4db2-9135-bcdd5c066705	2025-07-08 19:50:06.814158+00	2025-07-08 19:50:06.814158+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.242.205	\N
7e10202e-f611-49ca-9d72-18f871f68d2e	359c592a-dd23-4db2-9135-bcdd5c066705	2025-07-08 19:51:06.919104+00	2025-07-08 19:51:06.919104+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.242.205	\N
e6b67609-35cd-4ee6-bf02-0f5419912646	359c592a-dd23-4db2-9135-bcdd5c066705	2025-07-08 19:52:44.269489+00	2025-07-08 19:52:44.269489+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.242.205	\N
bb5cc1a4-7b7e-4abb-949b-8f74ca395741	359c592a-dd23-4db2-9135-bcdd5c066705	2025-07-08 19:53:05.781691+00	2025-07-08 19:53:05.781691+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.242.205	\N
b9082d41-42cf-496a-bd06-b025b0b46ba6	359c592a-dd23-4db2-9135-bcdd5c066705	2025-07-08 19:53:22.899303+00	2025-07-08 19:53:22.899303+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.242.205	\N
29afafed-fa1d-4f91-8c0c-77fab4f0f416	359c592a-dd23-4db2-9135-bcdd5c066705	2025-07-08 19:55:03.137747+00	2025-07-08 19:55:03.137747+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.242.205	\N
460ec79e-15a3-404d-963b-10d63a84cd9e	359c592a-dd23-4db2-9135-bcdd5c066705	2025-07-08 19:56:07.519701+00	2025-07-08 19:56:07.519701+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.242.205	\N
f65ff8af-05b2-46a0-baa3-5678815f6f6a	359c592a-dd23-4db2-9135-bcdd5c066705	2025-07-08 20:53:18.065507+00	2025-07-08 20:53:18.065507+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.242.205	\N
f42d638b-a030-4e34-8345-5ae6c6c6dfce	4ef422bd-aba3-4280-a28f-d0ac7cc6c208	2025-07-08 21:44:26.286974+00	2025-07-08 21:44:26.286974+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.242.205	\N
eb839424-97f6-47eb-b4a0-25c0a07e77e5	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	2025-07-09 07:59:45.408332+00	2025-07-09 07:59:45.408332+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.245.186	\N
c0bdcab2-8bb7-4cae-a0fa-554a422cfa99	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	2025-07-09 07:59:45.409173+00	2025-07-09 07:59:45.409173+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.245.186	\N
a315791a-bf8f-4f6c-ac3a-103e3420c246	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	2025-07-09 08:00:46.508237+00	2025-07-09 08:00:46.508237+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.245.186	\N
0d3f8ecb-92a8-4b8b-8783-8b5fe30f4c67	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	2025-07-09 08:00:47.926148+00	2025-07-09 08:00:47.926148+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.245.186	\N
a3efb9f1-12b5-4289-981c-712f233e9970	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-09 08:03:02.720211+00	2025-07-09 08:03:02.720211+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.245.186	\N
436dc88c-96bc-4232-9396-1b357e8eda00	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-09 08:10:05.691886+00	2025-07-09 08:10:05.691886+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.245.186	\N
cba58655-1789-4b51-9830-5b0f34322325	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	2025-07-09 08:11:04.337092+00	2025-07-09 08:11:04.337092+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.245.186	\N
3dcb7ae4-f0b3-4d26-b27f-9b38683f63b7	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	2025-07-09 08:26:23.631573+00	2025-07-09 08:26:23.631573+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.245.186	\N
31e176f0-4f2d-49a7-b1f7-c52fbd9239a8	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	2025-07-09 08:26:23.774937+00	2025-07-09 08:26:23.774937+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.245.186	\N
f3247182-481a-403f-9e80-11c13e90bb6f	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-09 08:26:52.463662+00	2025-07-09 08:26:52.463662+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.245.186	\N
b68abd87-359e-41ad-913d-04d2a59fc604	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-09 10:03:46.936505+00	2025-07-09 10:03:46.936505+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.245.186	\N
51967b86-75df-448d-b63f-cd385ae469a5	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-09 10:03:47.759679+00	2025-07-09 10:03:47.759679+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.245.186	\N
c4856b3d-2302-4e42-8dce-da6da314d17a	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	2025-07-09 10:14:25.554492+00	2025-07-09 10:14:25.554492+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.245.186	\N
b02e6481-b874-4186-8110-0924bab53a7d	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	2025-07-10 16:25:02.899926+00	2025-07-10 16:25:02.899926+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.228.149.159	\N
aeed4fcb-c9b8-4365-8d28-22231fd5d0df	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	2025-07-09 13:47:09.543983+00	2025-07-09 13:47:09.543983+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.247.125	\N
c0e04e4a-84e7-4553-b303-10b90b92efb2	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	2025-07-09 13:47:11.224838+00	2025-07-09 13:47:11.224838+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.247.125	\N
dc237747-aaa5-4ffb-ba1a-8a56fbc73ac4	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	2025-07-09 13:47:27.688605+00	2025-07-09 13:47:27.688605+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.247.125	\N
93a321fc-eaf4-40c6-8584-186ae381ab5f	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	2025-07-09 13:47:27.730878+00	2025-07-09 13:47:27.730878+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.247.125	\N
dc443ad9-2f90-461a-aaf5-caaab292b40f	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	2025-07-09 13:47:29.001766+00	2025-07-09 13:47:29.001766+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.247.125	\N
6693e873-441f-444e-ae5c-36a9074f6d13	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	2025-07-09 13:47:31.286697+00	2025-07-09 13:47:31.286697+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.247.125	\N
e4c81172-1ba0-4e2a-9e88-e0ed1a37040c	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	2025-07-09 15:12:30.4229+00	2025-07-09 15:12:30.4229+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.247.125	\N
d4394681-d543-4739-ade7-33eddc29a294	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	2025-07-09 15:14:39.173766+00	2025-07-09 15:14:39.173766+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.247.125	\N
fb5a6268-8631-4e76-8a07-1b4e3dc8a752	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	2025-07-09 15:14:39.413323+00	2025-07-09 15:14:39.413323+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.247.125	\N
d80ee8fc-2b58-4422-bc0b-b56002eae811	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-09 15:14:46.836564+00	2025-07-09 15:14:46.836564+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.247.125	\N
3169def4-505d-48b6-923f-c332234a8164	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-10 16:39:38.182691+00	2025-07-10 16:39:38.182691+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.228.149.159	\N
46831c51-185b-4c33-9be1-57e4a464db17	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	2025-07-10 16:40:41.846372+00	2025-07-10 16:40:41.846372+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.228.149.159	\N
c1568700-b2ec-4a6c-878a-4090588218dd	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-09 17:27:54.508273+00	2025-07-09 17:27:54.508273+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.247.125	\N
c3f4f675-1682-47a4-8514-6280b3db3d4a	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-09 17:27:55.798893+00	2025-07-09 17:27:55.798893+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.247.125	\N
15fa3a5a-e903-4acd-a4c5-76997800b78f	1ce57413-49e4-4706-ace4-b2a3117a33c3	2025-07-09 17:28:44.558219+00	2025-07-09 17:28:44.558219+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.247.125	\N
6099d0cd-a3f3-494b-8f16-67d5d73e78bc	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	2025-07-09 17:29:58.684939+00	2025-07-09 17:29:58.684939+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.247.125	\N
1bea534c-d7e4-481f-8dc6-07d58388077d	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-10 09:06:53.236796+00	2025-07-10 09:06:53.236796+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.246.1	\N
d9216698-bdfe-44e8-9443-0260399faba5	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-10 09:06:54.04404+00	2025-07-10 09:06:54.04404+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.246.1	\N
7271dce2-f1d6-4cea-859b-62dd0b2a6a81	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	2025-07-10 09:26:40.548027+00	2025-07-10 09:26:40.548027+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.246.1	\N
20ad66b1-797a-4e58-ad15-ea4bc952bd87	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	2025-07-10 09:26:41.780603+00	2025-07-10 09:26:41.780603+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.219.246.1	\N
67f3a0dc-69db-48ee-87a9-f1eaf56ade7e	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-10 16:42:46.573124+00	2025-07-10 16:42:46.573124+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.228.149.159	\N
c3555530-b1de-4775-8139-79dc50640b9b	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-10 13:55:58.346679+00	2025-07-10 13:55:58.346679+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.228.149.159	\N
23e4ab7a-0f3a-4544-899f-48a2f938ea99	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-10 13:57:02.438583+00	2025-07-10 13:57:02.438583+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.228.149.159	\N
49490ff1-565f-4431-af17-250118550037	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-10 13:57:03.528+00	2025-07-10 15:56:46.0824+00	\N	aal1	\N	2025-07-10 15:56:46.082326	python-httpx/0.28.1	223.228.149.159	\N
7a7b9f23-3233-498b-9e4d-507c8f139f91	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-10 16:10:43.610374+00	2025-07-10 16:10:43.610374+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.228.149.159	\N
1ec9ff5a-31e0-4b47-9a9a-71d883ee808a	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-10 16:10:45.502218+00	2025-07-10 16:10:45.502218+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.228.149.159	\N
b5f78b1f-fcbe-4d41-aeef-f4cd1fb6ccd8	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-10 16:16:21.155785+00	2025-07-10 16:16:21.155785+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.228.149.159	\N
6836b3d0-0638-4350-9c28-cae015a4f2d2	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	2025-07-10 16:17:12.115252+00	2025-07-10 16:17:12.115252+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.228.149.159	\N
a7226eb0-795f-448d-ba5c-3c8c4a45883e	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-10 16:23:57.658506+00	2025-07-10 16:23:57.658506+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.228.149.159	\N
d944a68c-dde1-4e88-b7d8-f8b1deccd15f	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-10 16:44:48.262073+00	2025-07-10 18:44:30.183331+00	\N	aal1	\N	2025-07-10 18:44:30.183255	python-httpx/0.28.1	223.228.149.159	\N
99923062-0886-45e9-917d-8f420edbc4c3	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	2025-07-17 16:46:55.872102+00	2025-07-17 16:46:55.872102+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.206.206.217	\N
cc56d1f9-8110-41e0-843b-12519a8f9a35	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-17 16:47:44.293039+00	2025-07-17 16:47:44.293039+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.206.206.217	\N
42824d4d-0045-4f46-8e06-d5ece2b2bfdb	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	2025-07-17 17:33:05.035013+00	2025-07-17 17:33:05.035013+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.206.206.217	\N
202c1c86-19a1-4503-912b-9d5bd26b5fa5	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-17 17:33:47.749306+00	2025-07-17 17:33:47.749306+00	\N	aal1	\N	\N	python-httpx/0.28.1	106.206.206.217	\N
23e0dc6d-3436-4ef6-996c-ee4947042f58	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-18 10:14:09.422128+00	2025-07-18 10:14:09.422128+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.190.128.5	\N
eb57ec64-5d93-4a1e-a84b-94ef2abea842	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-18 10:47:32.514288+00	2025-07-18 10:47:32.514288+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.190.128.5	\N
65983de9-6bea-4047-b53f-d01f38b13542	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	2025-07-18 10:48:40.023247+00	2025-07-18 10:48:40.023247+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.190.128.5	\N
4d3074c9-249e-4e96-8a4b-7569bf13e385	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-17 17:35:08.657645+00	2025-07-17 20:19:42.824822+00	\N	aal1	\N	2025-07-17 20:19:42.824748	python-httpx/0.28.1	106.206.206.217	\N
85ee24ad-25fa-47c4-b1de-dd1f09cda3ee	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-18 09:28:05.683419+00	2025-07-18 09:28:05.683419+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.237.132.192	\N
68625e10-b512-4535-93ff-a528d2b1bf99	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-18 09:49:45.079443+00	2025-07-18 09:49:45.079443+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.190.128.5	\N
ba52d417-13e0-4e9e-8288-74f931cd5dad	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	2025-07-18 10:55:06.724632+00	2025-07-18 10:55:06.724632+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.190.128.5	\N
a244faf4-f567-49b5-864e-c85409cb6e65	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-18 11:46:04.525029+00	2025-07-18 11:46:04.525029+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.190.128.5	\N
36e02d51-f948-4e63-b2ec-6f23b9facc1e	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-19 04:42:42.500108+00	2025-07-19 04:42:42.500108+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.228.146.76	\N
50df0cbe-42b5-47c9-91f1-bb906cb745a7	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	2025-07-19 04:43:41.969514+00	2025-07-19 04:43:41.969514+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.228.146.76	\N
054270b2-0d77-4ee3-b94b-30d7a0209ebb	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-19 04:44:39.735371+00	2025-07-19 04:44:39.735371+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.228.146.76	\N
cea12436-5891-48e2-8523-9c84bf805df2	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	2025-07-19 04:46:33.349642+00	2025-07-19 04:46:33.349642+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.228.146.76	\N
b7ec25cc-2418-4cde-bc7b-9b202e1e5a42	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-19 04:49:38.839684+00	2025-07-19 04:49:38.839684+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.228.146.76	\N
2533aaa6-a09d-493b-86b6-bba65fe0beff	1e85df90-4c60-426a-8599-20866cd4179f	2025-07-06 23:32:18.595219+00	2025-07-19 05:03:20.527314+00	\N	aal1	\N	2025-07-19 05:03:20.527244	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0	223.228.146.76	\N
c5fba476-bedd-4ac1-90da-bc87cb85d7c4	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-19 05:05:53.763066+00	2025-07-19 05:05:53.763066+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.228.146.76	\N
570e09bc-fe94-4597-ae01-33e735f28873	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-19 05:07:01.649971+00	2025-07-19 05:07:01.649971+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.228.146.76	\N
b865fa88-16b2-418f-901d-f5182b537122	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-19 05:09:17.924525+00	2025-07-19 05:09:17.924525+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.228.146.76	\N
97549cb5-475d-4b85-abe6-122dd1364e71	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	2025-07-19 05:09:43.792895+00	2025-07-19 05:09:43.792895+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.228.146.76	\N
65eebcda-ff2a-45d0-8429-d9cb3fda4b3e	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-19 05:51:09.40613+00	2025-07-19 05:51:09.40613+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.228.146.76	\N
0ea6243c-6b92-41dc-a94f-e06ea0396fdb	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	2025-07-19 06:00:12.826818+00	2025-07-19 06:00:12.826818+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.228.146.76	\N
f7a0f3c4-5581-4163-b4d8-39afed6c8595	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-19 06:03:10.139615+00	2025-07-19 06:03:10.139615+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.228.146.76	\N
90d7c6c5-a244-4b67-8fea-c3b53cb3d104	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	2025-07-19 06:07:46.826364+00	2025-07-19 06:07:46.826364+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.228.146.76	\N
6956b137-8682-4c96-a66e-c2ac75ad33c9	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-19 06:09:43.018687+00	2025-07-19 06:09:43.018687+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.228.146.76	\N
b26bd13d-838b-4911-82d6-3a2be3b63087	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-19 06:14:34.039+00	2025-07-19 06:14:34.039+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.228.146.76	\N
2ed3069c-de53-4781-9533-d972e21d0c15	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-19 06:38:02.453899+00	2025-07-19 06:38:02.453899+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.228.146.76	\N
376f462f-b995-4749-9f9a-f7fa22200f99	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	2025-07-19 06:56:44.247617+00	2025-07-19 06:56:44.247617+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.228.146.76	\N
e083be42-3419-4602-9862-581b78e1bc0a	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-26 06:32:32.839166+00	2025-07-26 06:32:32.839166+00	\N	aal1	\N	\N	python-httpx/0.28.1	223.228.157.209	\N
de566707-2bf1-486c-a9ae-7f5acb2221b0	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	2025-07-26 06:34:17.331018+00	2025-07-26 06:34:17.331018+00	\N	aal1	\N	\N	python-httpx/0.28.1	117.99.229.113	\N
8ac8b2bf-ddcb-46b6-9523-e6bface88fb7	a2d51914-1cde-4a1d-912e-50c388430197	2025-07-26 06:35:49.370668+00	2025-07-26 08:35:27.898471+00	\N	aal1	\N	2025-07-26 08:35:27.898399	python-httpx/0.28.1	223.228.157.209	\N
\.


--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.sso_domains (id, sso_provider_id, domain, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.sso_providers (id, resource_id, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, invited_at, confirmation_token, confirmation_sent_at, recovery_token, recovery_sent_at, email_change_token_new, email_change, email_change_sent_at, last_sign_in_at, raw_app_meta_data, raw_user_meta_data, is_super_admin, created_at, updated_at, phone, phone_confirmed_at, phone_change, phone_change_token, phone_change_sent_at, email_change_token_current, email_change_confirm_status, banned_until, reauthentication_token, reauthentication_sent_at, is_sso_user, deleted_at, is_anonymous) FROM stdin;
00000000-0000-0000-0000-000000000000	f043067b-9ef4-4009-93e3-a8c2dec006e1	authenticated	authenticated	student001@example.com	$2a$10$XIVeisFlHCc9oNOagzoAke20BVxRBT.WAgGtO3NbLW8kgiOf6MZiC	2025-07-06 23:19:29.591709+00	\N		\N		\N			\N	2025-07-06 23:19:29.595622+00	{"provider": "email", "providers": ["email"]}	{"sub": "f043067b-9ef4-4009-93e3-a8c2dec006e1", "email": "student001@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:19:29.583434+00	2025-07-06 23:19:29.598897+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	00699b0c-3d9f-43f3-8585-db639cc75dab	authenticated	authenticated	abc@gmail.com	$2a$10$ee1OvH1K1l8lbklQtIk9PunNsF6zhGe4pL7fNT4ZDeGn.ToqXzbP6	2025-07-06 22:44:59.777556+00	\N		\N		\N			\N	\N	{"provider": "email", "providers": ["email"]}	{"email_verified": true}	\N	2025-07-06 22:44:59.74486+00	2025-07-06 22:44:59.780259+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	759276a4-cc74-4d53-bd9f-d7611a54e140	authenticated	authenticated	student011@example.com	$2a$10$Dwx1eICBaeWACC1A26eBDeWF/AowNuO5YSgG/91pKlTd00AqV8u2C	2025-07-06 23:19:32.929455+00	\N		\N		\N			\N	2025-07-06 23:19:32.93352+00	{"provider": "email", "providers": ["email"]}	{"sub": "759276a4-cc74-4d53-bd9f-d7611a54e140", "email": "student011@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:19:32.924831+00	2025-07-06 23:19:32.936364+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	6485a6cd-3531-4d64-8d9d-c7e497f1c618	authenticated	authenticated	student007@example.com	$2a$10$NvKLrvI/oSekcR0UEraKb.MCdcUAuAkIYAGU0Si.F4iH5FVu6HNb6	2025-07-06 23:19:31.640896+00	\N		\N		\N			\N	2025-07-06 23:19:31.644313+00	{"provider": "email", "providers": ["email"]}	{"sub": "6485a6cd-3531-4d64-8d9d-c7e497f1c618", "email": "student007@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:19:31.636128+00	2025-07-06 23:19:31.646591+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	c1f5941b-17b0-4191-bfb9-7dc67c526310	authenticated	authenticated	student004@example.com	$2a$10$aOt8mo9ZyTUJWBIUuKOt9.SySImF4KCsS4VdTIcMlnQkXEjEuapaW	2025-07-06 23:19:30.675348+00	\N		\N		\N			\N	2025-07-06 23:19:30.678962+00	{"provider": "email", "providers": ["email"]}	{"sub": "c1f5941b-17b0-4191-bfb9-7dc67c526310", "email": "student004@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:19:30.669935+00	2025-07-06 23:19:30.680675+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	00654f1b-b3e3-43af-a7b4-56f97921040b	authenticated	authenticated	student002@example.com	$2a$10$tdeDB8CFNw5uAy7hAjB1Felzk0TmK1IuC9sIg2oMYYVHW3ZEnmn7i	2025-07-06 23:19:30.035778+00	\N		\N		\N			\N	2025-07-06 23:19:30.040192+00	{"provider": "email", "providers": ["email"]}	{"sub": "00654f1b-b3e3-43af-a7b4-56f97921040b", "email": "student002@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:19:30.028908+00	2025-07-06 23:19:30.042618+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	40e670c9-3227-4adb-bac9-14930a87a782	authenticated	authenticated	angermaster@gamil.com	$2a$10$BawVaSJmhmA7iMa5pnNouuiOmuOxZfWLJTCnUui.WM6CMKB29xaqK	2025-07-06 23:03:29.260239+00	\N		\N		\N			\N	2025-07-06 23:07:00.710272+00	{"provider": "email", "providers": ["email"]}	{"sub": "40e670c9-3227-4adb-bac9-14930a87a782", "email": "angermaster@gamil.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:03:29.252569+00	2025-07-06 23:07:00.712706+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	695edbf7-687d-434f-8e37-706f38502b57	authenticated	authenticated	student012@example.com	$2a$10$PKDQqWCpa8LpOVzIFHhWXOYhBvGKrIYtQWSA6/3l62GUyvARG/Buu	2025-07-06 23:19:33.223281+00	\N		\N		\N			\N	2025-07-06 23:19:33.226246+00	{"provider": "email", "providers": ["email"]}	{"sub": "695edbf7-687d-434f-8e37-706f38502b57", "email": "student012@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:19:33.219069+00	2025-07-06 23:19:33.228421+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	4fcafc36-f358-4930-8e98-e10347b330d8	authenticated	authenticated	student006@example.com	$2a$10$xA7HCOIywN43O5PBW/hMf.J4QbaZdX9kvz42vvcNmL9n.H5iVfMlO	2025-07-06 23:19:31.319548+00	\N		\N		\N			\N	2025-07-06 23:19:31.325184+00	{"provider": "email", "providers": ["email"]}	{"sub": "4fcafc36-f358-4930-8e98-e10347b330d8", "email": "student006@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:19:31.314533+00	2025-07-06 23:19:31.32686+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	d362753f-74bf-427c-8666-6cad45b48cd0	authenticated	authenticated	student009@example.com	$2a$10$Jqjqg3oxPgQcEqiej5Hz4eG3he1NYg.cYftr4LkjdbUEEBjFeP8AS	2025-07-06 23:19:32.392364+00	\N		\N		\N			\N	2025-07-06 23:19:32.395404+00	{"provider": "email", "providers": ["email"]}	{"sub": "d362753f-74bf-427c-8666-6cad45b48cd0", "email": "student009@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:19:32.386917+00	2025-07-06 23:19:32.396915+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	36078707-91df-4b7b-8b4a-8e342bbc3e36	authenticated	authenticated	student008@example.com	$2a$10$JjyHHxMOOQge2d2zlv7mIe4MResWtjuwjM3RrgalGUG5E4BbR7jQq	2025-07-06 23:19:32.015962+00	\N		\N		\N			\N	2025-07-06 23:19:32.020369+00	{"provider": "email", "providers": ["email"]}	{"sub": "36078707-91df-4b7b-8b4a-8e342bbc3e36", "email": "student008@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:19:32.011276+00	2025-07-06 23:19:32.021938+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	359c592a-dd23-4db2-9135-bcdd5c066705	authenticated	authenticated	student003@example.com	$2a$10$mkpJJLcHGSft5Llk.Oc91.ERxBsCc6gqdXEhtwDBFcGUCvqbwWnTi	2025-07-06 23:19:30.416711+00	\N		\N		\N			\N	2025-07-08 20:53:18.065421+00	{"provider": "email", "providers": ["email"]}	{"sub": "359c592a-dd23-4db2-9135-bcdd5c066705", "email": "student003@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:19:30.411659+00	2025-07-08 20:53:18.074823+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	b2105c0e-41f7-4adc-a6d4-a3bab47ef2ee	authenticated	authenticated	student010@example.com	$2a$10$TN7zsB6S2KU.qeuMvRwpr.hkdtAVOwL16pUCWRpo1ff.wj/FSjK4.	2025-07-06 23:19:32.648612+00	\N		\N		\N			\N	2025-07-06 23:19:32.652322+00	{"provider": "email", "providers": ["email"]}	{"sub": "b2105c0e-41f7-4adc-a6d4-a3bab47ef2ee", "email": "student010@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:19:32.643406+00	2025-07-06 23:19:32.653768+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	1ce57413-49e4-4706-ace4-b2a3117a33c3	authenticated	authenticated	student005@example.com	$2a$10$BbHxcha3lCkLoxo7CsmgbeJ7c4lBti5Kwns4aqcnplHMaammwi8DW	2025-07-06 23:19:30.940735+00	\N		\N		\N			\N	2025-07-09 17:28:44.55813+00	{"provider": "email", "providers": ["email"]}	{"sub": "1ce57413-49e4-4706-ace4-b2a3117a33c3", "email": "student005@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:19:30.934973+00	2025-07-09 17:28:44.560904+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	e9f9d1f4-66be-4978-b4ab-a31c37fbc42f	authenticated	authenticated	student013@example.com	$2a$10$2TxgasRg4cthajONg3CcxOOZKWNiXFEB.F.bnzb4wolWx5HzZ24cy	2025-07-06 23:19:33.588156+00	\N		\N		\N			\N	2025-07-06 23:19:33.591292+00	{"provider": "email", "providers": ["email"]}	{"sub": "e9f9d1f4-66be-4978-b4ab-a31c37fbc42f", "email": "student013@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:19:33.58368+00	2025-07-06 23:19:33.593508+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	38a9c3a7-4faf-4053-b3ce-39b3807d1bf8	authenticated	authenticated	student025@example.com	$2a$10$U.9uEd6jqLrkBXFdq36FkeKMolh4Bt3lNpFlUzhmFk2BeFvHoW59i	2025-07-06 23:19:37.237107+00	\N		\N		\N			\N	2025-07-06 23:19:37.239988+00	{"provider": "email", "providers": ["email"]}	{"sub": "38a9c3a7-4faf-4053-b3ce-39b3807d1bf8", "email": "student025@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:19:37.232775+00	2025-07-06 23:19:37.241439+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	294edd58-3f43-4693-98c7-0912ee512a17	authenticated	authenticated	student021@example.com	$2a$10$Rrrwp/29vw.gcivJzdwWMOnjy2TV.ozmj8n5E5obRPnoda7LttYZW	2025-07-06 23:19:36.032167+00	\N		\N		\N			\N	2025-07-06 23:19:36.035316+00	{"provider": "email", "providers": ["email"]}	{"sub": "294edd58-3f43-4693-98c7-0912ee512a17", "email": "student021@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:19:36.026621+00	2025-07-06 23:19:36.037151+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	7919fd8d-0f89-40a5-baf0-12c87c32e39c	authenticated	authenticated	student016@example.com	$2a$10$5zdD5SgnPod/ln/xnZX3xedUWDmf1t.3jjJAeKr6r6M8xgcWoAkLW	2025-07-06 23:19:34.639749+00	\N		\N		\N			\N	2025-07-06 23:19:34.642727+00	{"provider": "email", "providers": ["email"]}	{"sub": "7919fd8d-0f89-40a5-baf0-12c87c32e39c", "email": "student016@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:19:34.634479+00	2025-07-06 23:19:34.644265+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	e0ce2d2b-bd66-4d34-a109-7e719aad41e2	authenticated	authenticated	student014@example.com	$2a$10$x7mJ0sRFfuMclstnzSIIIOzCNaauh/MviPvqpDuZiKNiXP8SlMrDu	2025-07-06 23:19:33.867151+00	\N		\N		\N			\N	2025-07-06 23:19:33.870068+00	{"provider": "email", "providers": ["email"]}	{"sub": "e0ce2d2b-bd66-4d34-a109-7e719aad41e2", "email": "student014@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:19:33.862521+00	2025-07-06 23:19:33.871587+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	c11b8b42-5040-4e36-a6cd-8d191d001793	authenticated	authenticated	student018@example.com	$2a$10$K.HRGAqO8cDg8dDOWi1pROZJIMdNcwttOLh0EUdeVOur7WfQ4h93i	2025-07-06 23:19:35.227063+00	\N		\N		\N			\N	2025-07-06 23:19:35.230123+00	{"provider": "email", "providers": ["email"]}	{"sub": "c11b8b42-5040-4e36-a6cd-8d191d001793", "email": "student018@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:19:35.222397+00	2025-07-06 23:19:35.231632+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	8058af23-f469-4ca8-a7c4-5182a0eef655	authenticated	authenticated	student026@example.com	$2a$10$Sd8qrxtmAC4/UFdSa4mn9.3xlynUDRjcqXanyX6vxIIwteAnosfv6	2025-07-06 23:19:37.485298+00	\N		\N		\N			\N	2025-07-06 23:19:37.488654+00	{"provider": "email", "providers": ["email"]}	{"sub": "8058af23-f469-4ca8-a7c4-5182a0eef655", "email": "student026@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:19:37.480288+00	2025-07-06 23:19:37.490431+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	d57366cd-d4e2-4731-8559-445f513c2d91	authenticated	authenticated	student017@example.com	$2a$10$OfPh/sdcvfpfz5k0UW6wP.LHKpCdEtf.pdvG4kAtZvBAsYGcDrsE2	2025-07-06 23:19:34.979566+00	\N		\N		\N			\N	2025-07-06 23:19:34.983423+00	{"provider": "email", "providers": ["email"]}	{"sub": "d57366cd-d4e2-4731-8559-445f513c2d91", "email": "student017@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:19:34.974767+00	2025-07-06 23:19:34.984964+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	13f0aceb-43a4-4120-ad57-8ce74766a078	authenticated	authenticated	student015@example.com	$2a$10$lJbbLr3yr7Kw4UMDpDWXGObnqqmtVctU36NYwYsx8Ou2SNJHVLVbS	2025-07-06 23:19:34.232043+00	\N		\N		\N			\N	2025-07-06 23:19:34.23574+00	{"provider": "email", "providers": ["email"]}	{"sub": "13f0aceb-43a4-4120-ad57-8ce74766a078", "email": "student015@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:19:34.226726+00	2025-07-06 23:19:34.237282+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	3382735c-65d6-4f3a-ac19-1da3efff8dc9	authenticated	authenticated	student020@example.com	$2a$10$egrww/rBWcKr4O14Bx0TtOIj8WzZU.RWtMv8vAzOgYKm87WgO.idq	2025-07-06 23:19:35.764575+00	\N		\N		\N			\N	2025-07-06 23:19:35.767453+00	{"provider": "email", "providers": ["email"]}	{"sub": "3382735c-65d6-4f3a-ac19-1da3efff8dc9", "email": "student020@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:19:35.759354+00	2025-07-06 23:19:35.768936+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	e2535c7d-c6d4-4e72-9a09-f28bc8ed9a7e	authenticated	authenticated	student023@example.com	$2a$10$X5rzTzEcbM20OFMFOUiCJ.GHAQTP9CDJi3SvZhVIPUQ4K6HYJ2Pg.	2025-07-06 23:19:36.706566+00	\N		\N		\N			\N	2025-07-06 23:19:36.709821+00	{"provider": "email", "providers": ["email"]}	{"sub": "e2535c7d-c6d4-4e72-9a09-f28bc8ed9a7e", "email": "student023@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:19:36.701867+00	2025-07-06 23:19:36.711439+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	de264ef1-6740-422b-bf8d-a104532e0c90	authenticated	authenticated	student022@example.com	$2a$10$pjzRMl6SxSf6Xx83RAxgXebw4pcaF8MW7sMtLBEka3rMvU8EJxBh.	2025-07-06 23:19:36.300302+00	\N		\N		\N			\N	2025-07-06 23:19:36.30346+00	{"provider": "email", "providers": ["email"]}	{"sub": "de264ef1-6740-422b-bf8d-a104532e0c90", "email": "student022@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:19:36.294952+00	2025-07-06 23:19:36.304972+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	8fbb89b6-ec73-44b9-a055-f705841efad5	authenticated	authenticated	student019@example.com	$2a$10$rR6UXS13TvKKxNAvKwEpxeEJOM/dcKHz1JYkYlJlnHDG4wUVC68FO	2025-07-06 23:19:35.507355+00	\N		\N		\N			\N	2025-07-06 23:19:35.510197+00	{"provider": "email", "providers": ["email"]}	{"sub": "8fbb89b6-ec73-44b9-a055-f705841efad5", "email": "student019@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:19:35.503093+00	2025-07-06 23:19:35.511668+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	90cd8044-d51a-4dfb-8dba-ba12538edd0b	authenticated	authenticated	student024@example.com	$2a$10$W1dChGWqHOgRNYmWZeyaZeBLiNFMYKiBB06/U9fYBnF764nNlEHgK	2025-07-06 23:19:36.959111+00	\N		\N		\N			\N	2025-07-06 23:19:36.96209+00	{"provider": "email", "providers": ["email"]}	{"sub": "90cd8044-d51a-4dfb-8dba-ba12538edd0b", "email": "student024@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:19:36.954004+00	2025-07-06 23:19:36.967914+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	cc3c89cc-118b-4779-9901-580245998f7b	authenticated	authenticated	student027@example.com	$2a$10$EnEVyKKxEBvuYtmcbUUGT.hRCLGBsknCrmBPDMpMd/RGCp74mSShO	2025-07-06 23:19:37.747397+00	\N		\N		\N			\N	2025-07-06 23:19:37.750732+00	{"provider": "email", "providers": ["email"]}	{"sub": "cc3c89cc-118b-4779-9901-580245998f7b", "email": "student027@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:19:37.742374+00	2025-07-06 23:19:37.752374+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	c5e5750f-bac1-4531-8acb-7b0e0027363a	authenticated	authenticated	student038@example.com	$2a$10$AQAgdiYxALJzIHUHFyG4pO9qjhNqoCOuooQeszZ89WYUHUZW4RG0C	2025-07-06 23:28:39.74897+00	\N		\N		\N			\N	2025-07-06 23:28:39.751985+00	{"provider": "email", "providers": ["email"]}	{"sub": "c5e5750f-bac1-4531-8acb-7b0e0027363a", "email": "student038@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:28:39.742974+00	2025-07-06 23:28:39.753543+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	f26a23b8-080f-42ec-8856-0c6629d426aa	authenticated	authenticated	student033@example.com	$2a$10$BwaRQjhf6T90MHanLhnyquRrSJRR3.bXm4DGoZiHzQT2YuuFm9CIW	2025-07-06 23:28:33.321942+00	\N		\N		\N			\N	2025-07-06 23:28:33.326019+00	{"provider": "email", "providers": ["email"]}	{"sub": "f26a23b8-080f-42ec-8856-0c6629d426aa", "email": "student033@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:28:33.315632+00	2025-07-06 23:28:33.328167+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	7baeab7d-13d6-47f5-ad82-65d9ca35c85e	authenticated	authenticated	student030@example.com	$2a$10$lrF8T2s5vcqOTbh/PV116ePZlwQdxlljlJydLcqjP.1oR4tT37che	2025-07-06 23:19:38.595632+00	\N		\N		\N			\N	2025-07-06 23:19:38.598768+00	{"provider": "email", "providers": ["email"]}	{"sub": "7baeab7d-13d6-47f5-ad82-65d9ca35c85e", "email": "student030@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:19:38.590983+00	2025-07-06 23:19:38.60102+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	5ee23e8e-b8db-4554-9d10-41a19321f817	authenticated	authenticated	student028@example.com	$2a$10$pcsoJGgDHbjKspUoAVSUfu8oz5xYNIeM3cxwhEr1G.u5fEE10yUGe	2025-07-06 23:19:38.047054+00	\N		\N		\N			\N	2025-07-06 23:19:38.050281+00	{"provider": "email", "providers": ["email"]}	{"sub": "5ee23e8e-b8db-4554-9d10-41a19321f817", "email": "student028@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:19:38.041731+00	2025-07-06 23:19:38.051865+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	945033ac-abb6-426c-88c6-926ffa615561	authenticated	authenticated	student097@example.com	$2a$10$w1qVxdWDvZtYDlwZ/jOLKuEGDkaVwnCbd3Y/1pIeArwg9s46nMZIO	2025-07-06 23:19:49.598446+00	\N		\N		\N			\N	2025-07-06 23:19:49.60278+00	{"provider": "email", "providers": ["email"]}	{"sub": "945033ac-abb6-426c-88c6-926ffa615561", "email": "student097@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:19:49.590362+00	2025-07-06 23:19:49.604923+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	09a05d58-176a-4ead-b435-167ef5b12f8b	authenticated	authenticated	student039@example.com	$2a$10$iHxbYF1zd6BdJ0MVEKg3yu729g7aOVvMIKpQR4ax.RWKo0L7gJaCm	2025-07-06 23:28:41.001851+00	\N		\N		\N			\N	2025-07-06 23:28:41.004666+00	{"provider": "email", "providers": ["email"]}	{"sub": "09a05d58-176a-4ead-b435-167ef5b12f8b", "email": "student039@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:28:40.997343+00	2025-07-06 23:28:41.006202+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	dba96981-5e2e-4b6b-af70-b1b6b4586390	authenticated	authenticated	student036@example.com	$2a$10$hVQYNHSd/FbXNHbsnCE0GO9XkdKJ.FduBMoPreTY.lvvWzi/Bakmm	2025-07-06 23:19:39.660672+00	\N		\N		\N			\N	2025-07-06 23:19:39.663544+00	{"provider": "email", "providers": ["email"]}	{"sub": "dba96981-5e2e-4b6b-af70-b1b6b4586390", "email": "student036@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:19:39.65615+00	2025-07-06 23:19:39.665098+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	01ad9937-bd54-4b32-9458-9b50c81a84d1	authenticated	authenticated	student029@example.com	$2a$10$inGtGBgfle70yJVscTtcU.22ZHGDP4/kuXagFxQj.U7xPEs7winCC	2025-07-06 23:19:38.304994+00	\N		\N		\N			\N	2025-07-06 23:19:38.308936+00	{"provider": "email", "providers": ["email"]}	{"sub": "01ad9937-bd54-4b32-9458-9b50c81a84d1", "email": "student029@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:19:38.299572+00	2025-07-06 23:19:38.31052+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	f5c1abe0-cbf4-449f-8f4c-5029070083ff	authenticated	authenticated	student032@example.com	$2a$10$ew6VSfEu9IRNZFs3pLnf8OVnkUdLUNBBza.m71zLx74a7S5llCtDu	2025-07-06 23:28:32.031703+00	\N		\N		\N			\N	2025-07-06 23:28:32.035007+00	{"provider": "email", "providers": ["email"]}	{"sub": "f5c1abe0-cbf4-449f-8f4c-5029070083ff", "email": "student032@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:28:32.026416+00	2025-07-06 23:28:32.036778+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	0552910e-f473-48bd-a631-8fd6c90b9a09	authenticated	authenticated	student035@example.com	$2a$10$oxM7G1CEhWQtXluSND07ZOfzqe00Gnddi/scUyTo32ola.c3q6mkq	2025-07-06 23:28:35.873294+00	\N		\N		\N			\N	2025-07-06 23:28:35.877717+00	{"provider": "email", "providers": ["email"]}	{"sub": "0552910e-f473-48bd-a631-8fd6c90b9a09", "email": "student035@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:28:35.867954+00	2025-07-06 23:28:35.879466+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	957b0e6b-9843-4531-8273-1878f186bdbe	authenticated	authenticated	student034@example.com	$2a$10$QvQLCRLOPJkeO/GJ0E5.r.9UpA1LOD6OmpG5cjEYL9nbQDk7mME/C	2025-07-06 23:28:34.577232+00	\N		\N		\N			\N	2025-07-06 23:28:34.580982+00	{"provider": "email", "providers": ["email"]}	{"sub": "957b0e6b-9843-4531-8273-1878f186bdbe", "email": "student034@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:28:34.572374+00	2025-07-06 23:28:34.582554+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	7279bbef-accb-49e3-af8a-1eaa1950828c	authenticated	authenticated	student031@example.com	$2a$10$aJGv92dOWJQ4ZCGbhIerPeTJ7NxZPaNjBccLo9YnOeqj7NgIx3oMi	2025-07-06 23:28:30.719799+00	\N		\N		\N			\N	2025-07-06 23:28:30.724494+00	{"provider": "email", "providers": ["email"]}	{"sub": "7279bbef-accb-49e3-af8a-1eaa1950828c", "email": "student031@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:28:30.711039+00	2025-07-06 23:28:30.729172+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	92bb1183-589a-401f-a86b-5ae11a04e9bc	authenticated	authenticated	student037@example.com	$2a$10$AiCtemwurzfpDHUwCjuDaOMxi.vT27Ic7XuXDyWNKZ6pzvU4ZRQIm	2025-07-06 23:28:38.491632+00	\N		\N		\N			\N	2025-07-06 23:28:38.495742+00	{"provider": "email", "providers": ["email"]}	{"sub": "92bb1183-589a-401f-a86b-5ae11a04e9bc", "email": "student037@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:28:38.486323+00	2025-07-06 23:28:38.497656+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	e097a9f6-36fd-4a46-87ea-2cb4f19719c8	authenticated	authenticated	student040@example.com	$2a$10$MvX9iupwcd6OuZYk2kgLSOGG.8PyuaSmEB2YjoJEz/XgTuIs7m/xy	2025-07-06 23:28:42.283717+00	\N		\N		\N			\N	2025-07-06 23:28:42.289572+00	{"provider": "email", "providers": ["email"]}	{"sub": "e097a9f6-36fd-4a46-87ea-2cb4f19719c8", "email": "student040@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:28:42.278761+00	2025-07-06 23:28:42.291215+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	4d01ad91-ce75-49ce-8f20-e99e68343a4d	authenticated	authenticated	student052@example.com	$2a$10$sdaLW.ZDrM1PJF22g6EvUerHrrXedrI.2AdirrKYJYqR4HCdzS/iS	2025-07-06 23:28:57.791178+00	\N		\N		\N			\N	2025-07-06 23:28:57.794323+00	{"provider": "email", "providers": ["email"]}	{"sub": "4d01ad91-ce75-49ce-8f20-e99e68343a4d", "email": "student052@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:28:57.786569+00	2025-07-06 23:28:57.796249+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	f2a4c1ed-57db-44a8-b062-4ce8ae9e1b98	authenticated	authenticated	student048@example.com	$2a$10$ogf0GtZXVRr4fiXAARnIyeOWJDczKKaYTi6oxezocHi6dzjwOaPRC	2025-07-06 23:28:52.617937+00	\N		\N		\N			\N	2025-07-06 23:28:52.621043+00	{"provider": "email", "providers": ["email"]}	{"sub": "f2a4c1ed-57db-44a8-b062-4ce8ae9e1b98", "email": "student048@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:28:52.613186+00	2025-07-06 23:28:52.622557+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	2ebbab6a-e0e8-4a29-9e15-9b321ded899a	authenticated	authenticated	student043@example.com	$2a$10$Vu4CIuev4p0gz6moZ5nFSuccLr7NDTuHwjPBap1bs86qfYGsr9wXC	2025-07-06 23:28:46.157336+00	\N		\N		\N			\N	2025-07-06 23:28:46.160392+00	{"provider": "email", "providers": ["email"]}	{"sub": "2ebbab6a-e0e8-4a29-9e15-9b321ded899a", "email": "student043@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:28:46.152999+00	2025-07-06 23:28:46.161987+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	55a7bdfb-ed63-4e31-beca-88314bc8cc5f	authenticated	authenticated	student041@example.com	$2a$10$wxlf.GLTGXV8qLusQuEwBePRwCxwDudu0dz7Yuoa91EoHHH0zGuwC	2025-07-06 23:28:43.567746+00	\N		\N		\N			\N	2025-07-06 23:28:43.57112+00	{"provider": "email", "providers": ["email"]}	{"sub": "55a7bdfb-ed63-4e31-beca-88314bc8cc5f", "email": "student041@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:28:43.563502+00	2025-07-06 23:28:43.572588+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	e00a142c-8a75-49a8-bed1-3d95a0f4c459	authenticated	authenticated	student045@example.com	$2a$10$4lpEqOmP.AKE6TRIDyDAgO0kzqOkLcyBcAf2BfilW2MRpdvgpCUGW	2025-07-06 23:28:48.752888+00	\N		\N		\N			\N	2025-07-06 23:28:48.755886+00	{"provider": "email", "providers": ["email"]}	{"sub": "e00a142c-8a75-49a8-bed1-3d95a0f4c459", "email": "student045@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:28:48.748279+00	2025-07-06 23:28:48.757467+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	759b543d-2173-4901-803d-dd210dbf41db	authenticated	authenticated	student053@example.com	$2a$10$2lABLmP8aNyDZCCB.ZKCDON30SdF7WjuyPf/5P/EvM4Wc2kzswpce	2025-07-06 23:28:59.138839+00	\N		\N		\N			\N	2025-07-06 23:28:59.141897+00	{"provider": "email", "providers": ["email"]}	{"sub": "759b543d-2173-4901-803d-dd210dbf41db", "email": "student053@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:28:59.134172+00	2025-07-06 23:28:59.143494+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	3ae6e2bf-60f1-4bec-936b-048b25d8f68e	authenticated	authenticated	student044@example.com	$2a$10$Gc311dSIk6DNZ8ALU79ljuz5.KBcZ4psByS8Ry/Qiu50N2uDU6QLC	2025-07-06 23:28:47.451666+00	\N		\N		\N			\N	2025-07-06 23:28:47.45449+00	{"provider": "email", "providers": ["email"]}	{"sub": "3ae6e2bf-60f1-4bec-936b-048b25d8f68e", "email": "student044@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:28:47.447309+00	2025-07-06 23:28:47.456776+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	5ec60e6d-5b8c-4fe1-8181-1fec9ec2ab86	authenticated	authenticated	student042@example.com	$2a$10$6aEE4WNN4ETyPYlEog5bx.bC53XD7WUQx2ia3lCvnb1kc3TwWmJAC	2025-07-06 23:28:44.894085+00	\N		\N		\N			\N	2025-07-06 23:28:44.898106+00	{"provider": "email", "providers": ["email"]}	{"sub": "5ec60e6d-5b8c-4fe1-8181-1fec9ec2ab86", "email": "student042@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:28:44.888632+00	2025-07-06 23:28:44.899585+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	915bdb50-deb0-49b7-8c7a-e17268258e68	authenticated	authenticated	student047@example.com	$2a$10$GzeLqvcK2oM.5fWDGFN3quWUkEkGnul8QjJmDx/viSStG/8t1/mfC	2025-07-06 23:28:51.326643+00	\N		\N		\N			\N	2025-07-06 23:28:51.330062+00	{"provider": "email", "providers": ["email"]}	{"sub": "915bdb50-deb0-49b7-8c7a-e17268258e68", "email": "student047@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:28:51.320397+00	2025-07-06 23:28:51.331818+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	56371e1b-e464-4d3d-90d3-3f025c40f398	authenticated	authenticated	student050@example.com	$2a$10$RW2oNj.Ztocfua2fYMUCseE6xwairTEjXT64lUr2AKMM/oDvm6/em	2025-07-06 23:28:55.215522+00	\N		\N		\N			\N	2025-07-06 23:28:55.218702+00	{"provider": "email", "providers": ["email"]}	{"sub": "56371e1b-e464-4d3d-90d3-3f025c40f398", "email": "student050@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:28:55.210635+00	2025-07-06 23:28:55.220516+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	e337a4dc-1832-4a9d-85f4-1d30683eb964	authenticated	authenticated	student049@example.com	$2a$10$uc2y9fA/pSzJN0iDew4XfuaHwiOSM8r558XduWaQ5fcldY6MnG2lC	2025-07-06 23:28:53.914418+00	\N		\N		\N			\N	2025-07-06 23:28:53.917552+00	{"provider": "email", "providers": ["email"]}	{"sub": "e337a4dc-1832-4a9d-85f4-1d30683eb964", "email": "student049@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:28:53.909756+00	2025-07-06 23:28:53.919204+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	a6beb2c1-97e9-4b89-87f8-c6ce608ee596	authenticated	authenticated	student046@example.com	$2a$10$ZiGUWWzH5KJ2LceMOpZjJegXpFJ2N9ZWLzpJea2fdKK0sNJXrATiq	2025-07-06 23:28:50.088855+00	\N		\N		\N			\N	2025-07-06 23:28:50.093046+00	{"provider": "email", "providers": ["email"]}	{"sub": "a6beb2c1-97e9-4b89-87f8-c6ce608ee596", "email": "student046@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:28:50.083526+00	2025-07-06 23:28:50.094823+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	cc7c1dc4-ff0b-499f-a39f-ca58a1e2cfd1	authenticated	authenticated	student051@example.com	$2a$10$zDU/DpPoJ6zxo62bxnczZ.msNY1KCwyXvJah265PrAXU.3zzz1qeq	2025-07-06 23:28:56.503981+00	\N		\N		\N			\N	2025-07-06 23:28:56.507194+00	{"provider": "email", "providers": ["email"]}	{"sub": "cc7c1dc4-ff0b-499f-a39f-ca58a1e2cfd1", "email": "student051@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:28:56.497782+00	2025-07-06 23:28:56.508812+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	fe1078bc-e494-4dbe-b8b9-5b289e505666	authenticated	authenticated	student054@example.com	$2a$10$kmVRu05xlDPHvVbLys2Ltudj9r0o4ISW0VZBO/bRVBnRJyolIBSai	2025-07-06 23:29:00.455774+00	\N		\N		\N			\N	2025-07-06 23:29:00.459873+00	{"provider": "email", "providers": ["email"]}	{"sub": "fe1078bc-e494-4dbe-b8b9-5b289e505666", "email": "student054@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:00.449679+00	2025-07-06 23:29:00.461793+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	920244f9-7510-4aba-a7f8-42819a4f56e1	authenticated	authenticated	student066@example.com	$2a$10$.LSduyyw/V24LvfE.2QoiuGhUtYoAhuCg10uUE2TIfZir6HL1IYr.	2025-07-06 23:29:17.104168+00	\N		\N		\N			\N	2025-07-06 23:29:17.107979+00	{"provider": "email", "providers": ["email"]}	{"sub": "920244f9-7510-4aba-a7f8-42819a4f56e1", "email": "student066@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:17.099327+00	2025-07-06 23:29:17.109559+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	496f4ad0-249e-41e1-857f-2cd6ae7fa1ef	authenticated	authenticated	student062@example.com	$2a$10$e9vmHqfY.dpoxzN7g9V6lOAVG4VCxbKoyZWabWBzc8AGPkndY7F8i	2025-07-06 23:29:10.704291+00	\N		\N		\N			\N	2025-07-06 23:29:10.707265+00	{"provider": "email", "providers": ["email"]}	{"sub": "496f4ad0-249e-41e1-857f-2cd6ae7fa1ef", "email": "student062@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:10.69953+00	2025-07-06 23:29:10.708749+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	bf1356fc-2359-499d-a8fa-3cf08a07254e	authenticated	authenticated	student057@example.com	$2a$10$DDFo0enH2cQolXFPJGge/.43jvsUvUGANEdsLpvmhmur08oobL8ia	2025-07-06 23:29:04.255702+00	\N		\N		\N			\N	2025-07-06 23:29:04.25885+00	{"provider": "email", "providers": ["email"]}	{"sub": "bf1356fc-2359-499d-a8fa-3cf08a07254e", "email": "student057@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:04.251136+00	2025-07-06 23:29:04.260485+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	c98b5d43-3b01-458d-a702-54d0924f8c98	authenticated	authenticated	student055@example.com	$2a$10$CCRoEe.hbucE2ur0YX6fpeZPjhkCkd2sDQ4zneCrkNTw1rnb2BmH.	2025-07-06 23:29:01.706077+00	\N		\N		\N			\N	2025-07-06 23:29:01.709948+00	{"provider": "email", "providers": ["email"]}	{"sub": "c98b5d43-3b01-458d-a702-54d0924f8c98", "email": "student055@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:01.701167+00	2025-07-06 23:29:01.711469+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	55bbe185-cda0-49e6-8f8a-cace1ba1129a	authenticated	authenticated	student059@example.com	$2a$10$2VU7FBInt7y/XuqdmpMab.bw4u1R/l9Hg6yOV5gg.sVjnI78eoity	2025-07-06 23:29:06.8355+00	\N		\N		\N			\N	2025-07-06 23:29:06.838657+00	{"provider": "email", "providers": ["email"]}	{"sub": "55bbe185-cda0-49e6-8f8a-cace1ba1129a", "email": "student059@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:06.831159+00	2025-07-06 23:29:06.840198+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	490830f3-23c6-4e39-9850-0257a84ec7ad	authenticated	authenticated	student067@example.com	$2a$10$R9NIBzG0kWtvlpe2LjhdWOYAe/U/ILx1UQUoxqonaW6HAqW8F/oaG	2025-07-06 23:29:18.378665+00	\N		\N		\N			\N	2025-07-06 23:29:18.381748+00	{"provider": "email", "providers": ["email"]}	{"sub": "490830f3-23c6-4e39-9850-0257a84ec7ad", "email": "student067@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:18.372964+00	2025-07-06 23:29:18.383601+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	cd234ac4-69fa-4a9f-8c5a-7544555a229f	authenticated	authenticated	student058@example.com	$2a$10$JlDbyYdw2nwiC2dbU1iUc.9CkFgovVtoF/p74DMmviU/41GjWXaZ6	2025-07-06 23:29:05.560892+00	\N		\N		\N			\N	2025-07-06 23:29:05.563884+00	{"provider": "email", "providers": ["email"]}	{"sub": "cd234ac4-69fa-4a9f-8c5a-7544555a229f", "email": "student058@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:05.556309+00	2025-07-06 23:29:05.565414+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	03b6eecb-379b-4083-b4a5-32583ab0fda1	authenticated	authenticated	student056@example.com	$2a$10$lXWfWc23R8KSP0NCEZnNk.YSkzYhQ0UeITCM/JMYKiBxeT2zJZGjK	2025-07-06 23:29:02.967915+00	\N		\N		\N			\N	2025-07-06 23:29:02.971136+00	{"provider": "email", "providers": ["email"]}	{"sub": "03b6eecb-379b-4083-b4a5-32583ab0fda1", "email": "student056@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:02.963208+00	2025-07-06 23:29:02.972757+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	34de1333-884a-4bb8-bfe8-9f618568973c	authenticated	authenticated	student061@example.com	$2a$10$lp3LiX1VQhbbYipqdv9hK.KIim4A7TvBQAaS6wRVEtxxjLIXxfM42	2025-07-06 23:29:09.397146+00	\N		\N		\N			\N	2025-07-06 23:29:09.400104+00	{"provider": "email", "providers": ["email"]}	{"sub": "34de1333-884a-4bb8-bfe8-9f618568973c", "email": "student061@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:09.392447+00	2025-07-06 23:29:09.401744+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	ad781a50-10b1-40ce-87a0-e22f98502cf7	authenticated	authenticated	student064@example.com	$2a$10$225rGjDRTRZVPw85lhuJv.qQ05GpEdXiNGY7MiUeQ7X1acXd7v0b2	2025-07-06 23:29:13.332753+00	\N		\N		\N			\N	2025-07-06 23:29:13.335926+00	{"provider": "email", "providers": ["email"]}	{"sub": "ad781a50-10b1-40ce-87a0-e22f98502cf7", "email": "student064@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:13.325743+00	2025-07-06 23:29:13.337581+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	4c2a2cec-2745-4073-85f9-04ad472b017d	authenticated	authenticated	student063@example.com	$2a$10$9FBPaSW4pzRLeq0Jz0PPwO9tACoZfpCoq9cakqmZxxp9cJC2sICG6	2025-07-06 23:29:12.019642+00	\N		\N		\N			\N	2025-07-06 23:29:12.022649+00	{"provider": "email", "providers": ["email"]}	{"sub": "4c2a2cec-2745-4073-85f9-04ad472b017d", "email": "student063@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:12.01512+00	2025-07-06 23:29:12.024215+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	5f8ff2f1-18d7-4627-b4f2-d42fbe9f132a	authenticated	authenticated	student060@example.com	$2a$10$t3kpSEBfbR0r51sSU28TAehsUwTc5kAtoJ2XJu8ibxeqaF277VQZG	2025-07-06 23:29:08.142513+00	\N		\N		\N			\N	2025-07-06 23:29:08.146255+00	{"provider": "email", "providers": ["email"]}	{"sub": "5f8ff2f1-18d7-4627-b4f2-d42fbe9f132a", "email": "student060@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:08.137479+00	2025-07-06 23:29:08.147649+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	f234be03-5a87-4dc5-bb74-280676f90bbb	authenticated	authenticated	student065@example.com	$2a$10$8mKDEweK/8H4iqNyKUnB3ekp2uCigzuaRL.w63gL6ytAWB0iZPaby	2025-07-06 23:29:14.62802+00	\N		\N		\N			\N	2025-07-06 23:29:14.631031+00	{"provider": "email", "providers": ["email"]}	{"sub": "f234be03-5a87-4dc5-bb74-280676f90bbb", "email": "student065@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:14.6224+00	2025-07-06 23:29:14.632503+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	3615deed-9a1e-490a-b344-b664262f5cc4	authenticated	authenticated	student068@example.com	$2a$10$Os1Uyu1wHFsSZLIVllRSUOmyz.0WJyISECUxCjis4DxVlNUqTQCqG	2025-07-06 23:29:19.689018+00	\N		\N		\N			\N	2025-07-06 23:29:19.692283+00	{"provider": "email", "providers": ["email"]}	{"sub": "3615deed-9a1e-490a-b344-b664262f5cc4", "email": "student068@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:19.683955+00	2025-07-06 23:29:19.694812+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	40329907-7532-4f20-a086-331ca748a856	authenticated	authenticated	student080@example.com	$2a$10$LyNyu/VTnnNIBOTK7hJ1Jexinb8sc8Lr36o1LvhHiHJumjErR/Ar6	2025-07-06 23:29:38.60434+00	\N		\N		\N			\N	2025-07-06 23:29:38.607651+00	{"provider": "email", "providers": ["email"]}	{"sub": "40329907-7532-4f20-a086-331ca748a856", "email": "student080@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:38.599587+00	2025-07-06 23:29:38.609347+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	07a74c11-bbf3-41e3-8753-c282132a0942	authenticated	authenticated	student076@example.com	$2a$10$q6V7TcNTeohxvySKXXrW7.NIw83AShiiEEC2QnYhmXVU5Jrcm5mcy	2025-07-06 23:29:31.372199+00	\N		\N		\N			\N	2025-07-06 23:29:31.375392+00	{"provider": "email", "providers": ["email"]}	{"sub": "07a74c11-bbf3-41e3-8753-c282132a0942", "email": "student076@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:31.367817+00	2025-07-06 23:29:31.37698+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	23c1aeb2-602e-4076-9d13-4615c742f916	authenticated	authenticated	student071@example.com	$2a$10$r4ICr7oXYveQCEKILYJsiu8S8ji8Ce2khCocqgc6EpvNYd1JV98hS	2025-07-06 23:29:24.910251+00	\N		\N		\N			\N	2025-07-06 23:29:24.913315+00	{"provider": "email", "providers": ["email"]}	{"sub": "23c1aeb2-602e-4076-9d13-4615c742f916", "email": "student071@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:24.906016+00	2025-07-06 23:29:24.914772+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	19a34652-2e3a-4551-bf66-10c32fefdcb9	authenticated	authenticated	student069@example.com	$2a$10$zUhYTDkb4ZVnT.KNN6P9g.Orhv8O5Y9HxieLHI/M0.rtoR/yHvtWu	2025-07-06 23:29:21.612633+00	\N		\N		\N			\N	2025-07-06 23:29:21.615631+00	{"provider": "email", "providers": ["email"]}	{"sub": "19a34652-2e3a-4551-bf66-10c32fefdcb9", "email": "student069@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:21.608167+00	2025-07-06 23:29:21.617162+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	07fd0355-c715-45f2-98ae-90b292d77d41	authenticated	authenticated	student073@example.com	$2a$10$gU1rT5VxonOLvgKwVdTBeeKxjwbL8Rcvb8Rj/4tqwPYMiIfvhjXdW	2025-07-06 23:29:27.489318+00	\N		\N		\N			\N	2025-07-06 23:29:27.492566+00	{"provider": "email", "providers": ["email"]}	{"sub": "07fd0355-c715-45f2-98ae-90b292d77d41", "email": "student073@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:27.483721+00	2025-07-06 23:29:27.494171+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	cc83167d-aa1f-4879-a15c-41dcb608a579	authenticated	authenticated	student081@example.com	$2a$10$HxyTcHawCkf/0lXgt/BGEu6jKwTNAfvAKk6mtacbjC7yavvJKAQwC	2025-07-06 23:29:39.950446+00	\N		\N		\N			\N	2025-07-06 23:29:39.953564+00	{"provider": "email", "providers": ["email"]}	{"sub": "cc83167d-aa1f-4879-a15c-41dcb608a579", "email": "student081@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:39.946081+00	2025-07-06 23:29:39.955014+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	42055b75-3473-48f0-9f12-a4abba8714ea	authenticated	authenticated	student072@example.com	$2a$10$AuA97EVyqq1S/ebNnDrkeOxlUkOGxL8ZysyPAIUlYgSkbr5G8IEYW	2025-07-06 23:29:26.177214+00	\N		\N		\N			\N	2025-07-06 23:29:26.180402+00	{"provider": "email", "providers": ["email"]}	{"sub": "42055b75-3473-48f0-9f12-a4abba8714ea", "email": "student072@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:26.172446+00	2025-07-06 23:29:26.182461+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	e9a10fb2-e0b7-4115-ab40-d9002738486a	authenticated	authenticated	student070@example.com	$2a$10$LuA68X3nx2IPwr5ZgVTVR.G.IjAtRId7AWb158qKdRCPMAukRHsr6	2025-07-06 23:29:23.188153+00	\N		\N		\N			\N	2025-07-06 23:29:23.191248+00	{"provider": "email", "providers": ["email"]}	{"sub": "e9a10fb2-e0b7-4115-ab40-d9002738486a", "email": "student070@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:23.183555+00	2025-07-06 23:29:23.193035+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	55dac851-ecfc-4b93-9da7-1efe6be19fa0	authenticated	authenticated	student075@example.com	$2a$10$cnU1VugNxklDBh5IP7J8P.FyPyI1BwRot9qoylH9IQUGhz6HHz4Sa	2025-07-06 23:29:30.107846+00	\N		\N		\N			\N	2025-07-06 23:29:30.110971+00	{"provider": "email", "providers": ["email"]}	{"sub": "55dac851-ecfc-4b93-9da7-1efe6be19fa0", "email": "student075@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:30.101792+00	2025-07-06 23:29:30.112607+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	986cfe33-942a-4052-9d5f-585ba1c58e2a	authenticated	authenticated	student077@example.com	$2a$10$oxaXXfxZrs4K3E9MiAs8NOKYrv1UjrHYTqTo0EzABwWVBDZBaEjS.	2025-07-06 23:29:32.672475+00	\N		\N		\N			\N	2025-07-06 23:29:32.676366+00	{"provider": "email", "providers": ["email"]}	{"sub": "986cfe33-942a-4052-9d5f-585ba1c58e2a", "email": "student077@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:32.667098+00	2025-07-06 23:29:32.677962+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	91db900d-0bef-4f07-90e5-bac9f72e08aa	authenticated	authenticated	student074@example.com	$2a$10$Iuj/S/m9LXGfuU/zUH2WKuj770UwoIEoX6jHio5nQqqt0U1iji2Um	2025-07-06 23:29:28.812163+00	\N		\N		\N			\N	2025-07-06 23:29:28.815186+00	{"provider": "email", "providers": ["email"]}	{"sub": "91db900d-0bef-4f07-90e5-bac9f72e08aa", "email": "student074@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:28.80765+00	2025-07-06 23:29:28.816724+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	124afc78-d787-490e-ac3b-e4c99628cb40	authenticated	authenticated	student079@example.com	$2a$10$8pZu0PFwzqv8nL8SwDH9z.UmaEEOh9rHrgQJwj/wfkpeJm3gGaMZK	2025-07-06 23:29:36.474587+00	\N		\N		\N			\N	2025-07-06 23:29:36.47749+00	{"provider": "email", "providers": ["email"]}	{"sub": "124afc78-d787-490e-ac3b-e4c99628cb40", "email": "student079@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:36.469941+00	2025-07-06 23:29:36.478944+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	5d1addd3-2819-46ba-a2e2-a556e7ab56d5	authenticated	authenticated	student082@example.com	$2a$10$j3gtdAGwDStUAqyY5muk4uOIrZyR.mvytPn/zEsHHHU4QM9W7PZ8.	2025-07-06 23:29:41.236835+00	\N		\N		\N			\N	2025-07-06 23:29:41.240027+00	{"provider": "email", "providers": ["email"]}	{"sub": "5d1addd3-2819-46ba-a2e2-a556e7ab56d5", "email": "student082@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:41.232535+00	2025-07-06 23:29:41.241466+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	079446fa-9e6c-4fd1-90ff-4432ff8bfc15	authenticated	authenticated	student094@example.com	$2a$10$2B1JTMHfysVEMYNuiaD2Mur8smPuw9qpv9.IyNmdhByynI57agQJu	2025-07-06 23:29:57.420508+00	\N		\N		\N			\N	2025-07-06 23:29:57.423484+00	{"provider": "email", "providers": ["email"]}	{"sub": "079446fa-9e6c-4fd1-90ff-4432ff8bfc15", "email": "student094@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:57.415897+00	2025-07-06 23:29:57.425203+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	32a145f7-f290-48da-a885-cac6acb8f18a	authenticated	authenticated	student085@example.com	$2a$10$rbRCdZ6mnRYkvVW3qTtmzeBIAwCGXF1H8b81JjbDp3YKtIt2spIMK	2025-07-06 23:29:45.295821+00	\N		\N		\N			\N	2025-07-06 23:29:45.300044+00	{"provider": "email", "providers": ["email"]}	{"sub": "32a145f7-f290-48da-a885-cac6acb8f18a", "email": "student085@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:45.289776+00	2025-07-06 23:29:45.302372+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	f0832eb1-0639-4593-a7f4-83c80588ea59	authenticated	authenticated	student083@example.com	$2a$10$kASSvt2qHHxTys1SSJ9IruWroi4.hhLYj6zTdUtYT.akMNVwcVbKi	2025-07-06 23:29:42.522213+00	\N		\N		\N			\N	2025-07-06 23:29:42.525299+00	{"provider": "email", "providers": ["email"]}	{"sub": "f0832eb1-0639-4593-a7f4-83c80588ea59", "email": "student083@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:42.51778+00	2025-07-06 23:29:42.526932+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	fa01eacd-c7bf-4039-b3b7-b61d9b2311d8	authenticated	authenticated	student087@example.com	$2a$10$.J4NZC5TqmTEZuGOi0rPFuIAr6b5CIrAwUsnTeRoMe9VaN2Wq7dzq	2025-07-06 23:29:48.397319+00	\N		\N		\N			\N	2025-07-06 23:29:48.400463+00	{"provider": "email", "providers": ["email"]}	{"sub": "fa01eacd-c7bf-4039-b3b7-b61d9b2311d8", "email": "student087@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:48.392854+00	2025-07-06 23:29:48.402066+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	1e85df90-4c60-426a-8599-20866cd4179f	authenticated	authenticated	student078@example.com	$2a$10$tEhq/X/KwaH76.iQClqCKuWe6JN3EL.k.w2U.MAENZhX5NcGbzJrq	2025-07-06 23:29:34.530606+00	\N		\N		\N			\N	2025-07-06 23:32:18.59514+00	{"provider": "email", "providers": ["email"]}	{"sub": "1e85df90-4c60-426a-8599-20866cd4179f", "email": "student078@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:34.526093+00	2025-07-19 05:03:20.525282+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	78ebb959-0002-4e3a-8a73-62477951e421	authenticated	authenticated	student095@example.com	$2a$10$bU8D61hoaVntc/MCQB/DfO3B5OW/hKWnm2sqxzQWPGTWLWO0WIGZm	2025-07-06 23:29:58.685958+00	\N		\N		\N			\N	2025-07-06 23:29:58.689158+00	{"provider": "email", "providers": ["email"]}	{"sub": "78ebb959-0002-4e3a-8a73-62477951e421", "email": "student095@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:58.681441+00	2025-07-06 23:29:58.691259+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	8d6f5bc2-d90a-41f6-bb35-0a3eb5119495	authenticated	authenticated	student086@example.com	$2a$10$lO2JO5JkeciIwgzWY6H/TuIJKTvzzVToR7KrhuXxDag7IMguViWGO	2025-07-06 23:29:47.094399+00	\N		\N		\N			\N	2025-07-06 23:29:47.097065+00	{"provider": "email", "providers": ["email"]}	{"sub": "8d6f5bc2-d90a-41f6-bb35-0a3eb5119495", "email": "student086@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:47.088322+00	2025-07-06 23:29:47.098431+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	84306c4b-ca98-4eca-824b-98ef34f9235c	authenticated	authenticated	student084@example.com	$2a$10$xmrhNjXFAhoSJ22HM6Ws3u60vejKJMiCxbLXxXOr34WhCCTU9jMHO	2025-07-06 23:29:43.842665+00	\N		\N		\N			\N	2025-07-06 23:29:43.846198+00	{"provider": "email", "providers": ["email"]}	{"sub": "84306c4b-ca98-4eca-824b-98ef34f9235c", "email": "student084@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:43.837386+00	2025-07-06 23:29:43.848607+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	4f53ba4b-2d7f-4da3-a6a8-8eede3f7c060	authenticated	authenticated	student089@example.com	$2a$10$iQFx5qjLNuvT5S7j173FMeIEqlMgx4KYZV2FZCV82FQLEXot5FDYG	2025-07-06 23:29:50.987433+00	\N		\N		\N			\N	2025-07-06 23:29:50.990605+00	{"provider": "email", "providers": ["email"]}	{"sub": "4f53ba4b-2d7f-4da3-a6a8-8eede3f7c060", "email": "student089@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:50.982671+00	2025-07-06 23:29:50.992218+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	5459b24c-84b0-45ad-8c2c-2af37595df06	authenticated	authenticated	student092@example.com	$2a$10$oGtfts8cjBZpr5V7Sit1zeC7e5oGUSS5fFtfJ38I.FHkAef3oOuM6	2025-07-06 23:29:54.822006+00	\N		\N		\N			\N	2025-07-06 23:29:54.82539+00	{"provider": "email", "providers": ["email"]}	{"sub": "5459b24c-84b0-45ad-8c2c-2af37595df06", "email": "student092@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:54.817341+00	2025-07-06 23:29:54.827163+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	0efe3c02-f278-4ec1-9038-fad1588f1493	authenticated	authenticated	student091@example.com	$2a$10$w13wEl410KgWjDMR1R6FGOZABN76zvFPcj3TvmDNs7CkaitUsaDhm	2025-07-06 23:29:53.555047+00	\N		\N		\N			\N	2025-07-06 23:29:53.558148+00	{"provider": "email", "providers": ["email"]}	{"sub": "0efe3c02-f278-4ec1-9038-fad1588f1493", "email": "student091@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:53.550361+00	2025-07-06 23:29:53.559855+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	9ca18835-0971-4842-be97-08186fc34251	authenticated	authenticated	student088@example.com	$2a$10$AkdMpxR7C9ec.JylXgfbGOh/0IsYIzODTpkgmyjf7woI9DBM.GmCC	2025-07-06 23:29:49.664096+00	\N		\N		\N			\N	2025-07-06 23:29:49.66729+00	{"provider": "email", "providers": ["email"]}	{"sub": "9ca18835-0971-4842-be97-08186fc34251", "email": "student088@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:49.659526+00	2025-07-06 23:29:49.668831+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	2a043cb7-c39f-4d3b-86e6-fd939f593ff6	authenticated	authenticated	student093@example.com	$2a$10$lzIE9XnCKeT73720gQk5oOh4/DTO3fnw7913uEDAT45XH3wxz9g3S	2025-07-06 23:29:56.138898+00	\N		\N		\N			\N	2025-07-06 23:29:56.142253+00	{"provider": "email", "providers": ["email"]}	{"sub": "2a043cb7-c39f-4d3b-86e6-fd939f593ff6", "email": "student093@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:56.134314+00	2025-07-06 23:29:56.144144+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	ffcbebef-bd6a-490a-a024-6ea73c71ac44	authenticated	authenticated	student096@example.com	$2a$10$R1I90pI81vovanJcL9k4o.K/MLXJJsdaLL1K1TNR4tJApeQfKbLNG	2025-07-06 23:30:00.005124+00	\N		\N		\N			\N	2025-07-06 23:30:00.008177+00	{"provider": "email", "providers": ["email"]}	{"sub": "ffcbebef-bd6a-490a-a024-6ea73c71ac44", "email": "student096@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:30:00.000656+00	2025-07-06 23:30:00.018295+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	91f0d641-d8b2-47ef-b164-198f0972d313	authenticated	authenticated	staff009@example.com	$2a$10$Wp7sidmkixQjdVXm2p2r6eI2hVRvmp1r3ZMEeEm.wzPMgOjrHsXGS	2025-07-06 23:30:19.474468+00	\N		\N		\N			\N	2025-07-06 23:30:19.477726+00	{"provider": "email", "providers": ["email"]}	{"sub": "91f0d641-d8b2-47ef-b164-198f0972d313", "email": "staff009@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:30:19.469757+00	2025-07-06 23:30:19.479477+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	96e1680c-63d7-4902-afd1-98b74cf34645	authenticated	authenticated	staff005@example.com	$2a$10$3sqngvBC7tFrqHvqkpQm2OO9zRuWgO/9tSxjdq.lrJgcqs.NQFcIO	2025-07-06 23:30:12.087116+00	\N		\N		\N			\N	2025-07-06 23:30:12.090425+00	{"provider": "email", "providers": ["email"]}	{"sub": "96e1680c-63d7-4902-afd1-98b74cf34645", "email": "staff005@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:30:12.081984+00	2025-07-06 23:30:12.092188+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	fe033a35-e2e5-405c-8d74-f5c247307f0b	authenticated	authenticated	student100@example.com	$2a$10$rR9begZq22UQRdXnAhWYtOAGG/FndjrEQc0sCCWNrZrUAKDlqGYjS	2025-07-06 23:30:05.17011+00	\N		\N		\N			\N	2025-07-06 23:30:05.173226+00	{"provider": "email", "providers": ["email"]}	{"sub": "fe033a35-e2e5-405c-8d74-f5c247307f0b", "email": "student100@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:30:05.165445+00	2025-07-06 23:30:05.174785+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	2ad27174-9dc2-4dd0-9b01-73d0a0c334e1	authenticated	authenticated	student098@example.com	$2a$10$n8gh1DTMe/DsZbwyiW6TquVdYUIQermDKp0lq9xaXnjq1bTqUqgau	2025-07-06 23:30:02.542898+00	\N		\N		\N			\N	2025-07-06 23:30:02.547015+00	{"provider": "email", "providers": ["email"]}	{"sub": "2ad27174-9dc2-4dd0-9b01-73d0a0c334e1", "email": "student098@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:30:02.538089+00	2025-07-06 23:30:02.548517+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	079ca79f-f4a5-494c-ab69-6eb5d9309140	authenticated	authenticated	staff002@example.com	$2a$10$eubLGxGwPz2IzFn1fiRvI.47PYoKKdZCRckA813XUWgJGq7a7tjDC	2025-07-06 23:30:07.760193+00	\N		\N		\N			\N	2025-07-06 23:30:07.763216+00	{"provider": "email", "providers": ["email"]}	{"sub": "079ca79f-f4a5-494c-ab69-6eb5d9309140", "email": "staff002@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:30:07.755367+00	2025-07-06 23:30:07.76479+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	e6b8ae92-b4f3-4717-9efc-d743df2bf28c	authenticated	authenticated	staff010@example.com	$2a$10$y8sXdpzmZxNKZNPufCIq7OmXP2ZpkU5U.LsDxmxB1yJAgoLQ1zCxS	2025-07-06 23:30:20.745766+00	\N		\N		\N			\N	2025-07-06 23:30:20.74879+00	{"provider": "email", "providers": ["email"]}	{"sub": "e6b8ae92-b4f3-4717-9efc-d743df2bf28c", "email": "staff010@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:30:20.741356+00	2025-07-06 23:30:20.750288+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	cfa11a9a-0de0-4e32-99a0-5df45d2f56dd	authenticated	authenticated	student099@example.com	$2a$10$MM8isaZHR5vIi7afz6Wol.MVn46IoZdbS3OtpbMEbr5R4.OAkDJ5u	2025-07-06 23:30:03.832947+00	\N		\N		\N			\N	2025-07-06 23:30:03.835877+00	{"provider": "email", "providers": ["email"]}	{"sub": "cfa11a9a-0de0-4e32-99a0-5df45d2f56dd", "email": "student099@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:30:03.828599+00	2025-07-06 23:30:03.838029+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	6d505cca-71c5-4b89-8c62-40daee2fe79c	authenticated	authenticated	staff007@example.com	$2a$10$WmEe1C2Fat0sjCcO6zkRn.TJevbos8y62v7TdKCFSn1AAAOlWYlqG	2025-07-06 23:30:16.912551+00	\N		\N		\N			\N	2025-07-06 23:30:16.916591+00	{"provider": "email", "providers": ["email"]}	{"sub": "6d505cca-71c5-4b89-8c62-40daee2fe79c", "email": "staff007@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:30:16.908059+00	2025-07-06 23:30:16.918222+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	8ed041f9-82b9-4c46-b620-2d74d82273d6	authenticated	authenticated	staff006@example.com	$2a$10$fZg7NG0PEhlwEOpdkzegGO0mLNyz8P5.30vHATrmoAPWWynjW2tSi	2025-07-06 23:30:15.366013+00	\N		\N		\N			\N	2025-07-06 23:30:15.369136+00	{"provider": "email", "providers": ["email"]}	{"sub": "8ed041f9-82b9-4c46-b620-2d74d82273d6", "email": "staff006@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:30:15.361088+00	2025-07-06 23:30:15.370867+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	406386d9-94e4-4c78-83fd-604ffbb2dd5a	authenticated	authenticated	staff003@example.com	$2a$10$Qm/uH9a1DGv7Y8.GCBgtFO88hkiryYF.RMoqjRNY8iUr9MRWOjJ6e	2025-07-06 23:30:09.336076+00	\N		\N		\N			\N	2025-07-06 23:30:09.339176+00	{"provider": "email", "providers": ["email"]}	{"sub": "406386d9-94e4-4c78-83fd-604ffbb2dd5a", "email": "staff003@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:30:09.331187+00	2025-07-06 23:30:09.340904+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	4ef422bd-aba3-4280-a28f-d0ac7cc6c208	authenticated	authenticated	staff004@example.com	$2a$10$QDnxvBx8c0FAPscWDHBI6.bGnwOjLrMvZq7lfjWn57D0S3PF.N83a	2025-07-06 23:30:10.785021+00	\N		\N		\N			\N	2025-07-08 21:44:26.286898+00	{"provider": "email", "providers": ["email"]}	{"sub": "4ef422bd-aba3-4280-a28f-d0ac7cc6c208", "email": "staff004@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:30:10.779252+00	2025-07-08 21:44:26.298916+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	49817fdc-6d6c-4a5d-9e45-5498a27e8555	authenticated	authenticated	staff008@example.com	$2a$10$rBfwR/vgDzjIAUtirawZ7.cgreB6O5HIfP03yMORAvuHKDn1HK7U2	2025-07-06 23:30:18.175545+00	\N		\N		\N			\N	2025-07-06 23:30:18.178388+00	{"provider": "email", "providers": ["email"]}	{"sub": "49817fdc-6d6c-4a5d-9e45-5498a27e8555", "email": "staff008@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:30:18.169813+00	2025-07-06 23:30:18.180112+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	a38f3ea2-7acd-48f4-a79f-a25eeaec2d94	authenticated	authenticated	staff011@example.com	$2a$10$zqXloQpI1zxPCAPQ11xwyuT9UEpZJvdo6LRRRPLXGbIfouEQa2S3W	2025-07-06 23:30:22.887656+00	\N		\N		\N			\N	2025-07-06 23:30:22.890911+00	{"provider": "email", "providers": ["email"]}	{"sub": "a38f3ea2-7acd-48f4-a79f-a25eeaec2d94", "email": "staff011@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:30:22.883201+00	2025-07-06 23:30:22.892538+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	5898d819-8063-4e9e-aabf-d510dea65708	authenticated	authenticated	staff023@example.com	$2a$10$zI0GQNhRrlncxn3T8jA5KeH5dkW6QkcGjjKs/w4CBgaTdF5JDcagO	2025-07-06 23:30:38.664861+00	\N		\N		\N			\N	2025-07-06 23:30:38.668137+00	{"provider": "email", "providers": ["email"]}	{"sub": "5898d819-8063-4e9e-aabf-d510dea65708", "email": "staff023@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:30:38.660169+00	2025-07-06 23:30:38.669713+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	141223a6-6603-49a9-8f61-7caa6f12cf59	authenticated	authenticated	staff019@example.com	$2a$10$fbWA3Le4p2D.Viqj4cYb9OAst2TkR8o5h9exiWKMBuk5oRfBJAkH2	2025-07-06 23:30:33.507906+00	\N		\N		\N			\N	2025-07-06 23:30:33.511046+00	{"provider": "email", "providers": ["email"]}	{"sub": "141223a6-6603-49a9-8f61-7caa6f12cf59", "email": "staff019@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:30:33.50343+00	2025-07-06 23:30:33.512802+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	f05a5bde-deea-4c06-9398-07c9960aef2c	authenticated	authenticated	staff014@example.com	$2a$10$caDUtkz8ahCPmqwcW0aOuOx1GJeGYeOUYl8vpE05kbxmaiVYD7qLy	2025-07-06 23:30:26.899235+00	\N		\N		\N			\N	2025-07-06 23:30:26.90235+00	{"provider": "email", "providers": ["email"]}	{"sub": "f05a5bde-deea-4c06-9398-07c9960aef2c", "email": "staff014@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:30:26.894488+00	2025-07-06 23:30:26.903904+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	bc6a8258-631b-4b34-8e01-61e7e4ab7f2a	authenticated	authenticated	staff012@example.com	$2a$10$pt4/urj2ipH.iv9MaRSmnOWi5kuQleQM4WaVfxcL4WkxkF5/4bsYW	2025-07-06 23:30:24.222982+00	\N		\N		\N			\N	2025-07-06 23:30:24.226014+00	{"provider": "email", "providers": ["email"]}	{"sub": "bc6a8258-631b-4b34-8e01-61e7e4ab7f2a", "email": "staff012@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:30:24.218196+00	2025-07-06 23:30:24.228572+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	0e6980f9-2985-431c-b311-4e0538ee213a	authenticated	authenticated	staff016@example.com	$2a$10$6yXBtNWpFHHHYBHdqSmlJ.NIrLau9k10DsqWN5dwtul720U5aNV8q	2025-07-06 23:30:29.477539+00	\N		\N		\N			\N	2025-07-06 23:30:29.480602+00	{"provider": "email", "providers": ["email"]}	{"sub": "0e6980f9-2985-431c-b311-4e0538ee213a", "email": "staff016@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:30:29.473057+00	2025-07-06 23:30:29.482254+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	e7c03374-717f-4458-8f16-1d0931f87240	authenticated	authenticated	staff024@example.com	$2a$10$43qULOBmYMsZFMMMFsKSs.DRlEwi6BBmwDEqtCOZ4NqnNzgK99kb.	2025-07-06 23:30:39.929725+00	\N		\N		\N			\N	2025-07-06 23:30:39.932733+00	{"provider": "email", "providers": ["email"]}	{"sub": "e7c03374-717f-4458-8f16-1d0931f87240", "email": "staff024@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:30:39.925242+00	2025-07-06 23:30:39.934226+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	07eb809c-ab0b-4235-b0d7-9d0726ae9340	authenticated	authenticated	staff015@example.com	$2a$10$Z9bVVHIeGwbCGWIEQC9CneZjDgTNHpWz36dm2VSyVVECjmUyjdsxe	2025-07-06 23:30:28.173135+00	\N		\N		\N			\N	2025-07-06 23:30:28.176137+00	{"provider": "email", "providers": ["email"]}	{"sub": "07eb809c-ab0b-4235-b0d7-9d0726ae9340", "email": "staff015@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:30:28.168409+00	2025-07-06 23:30:28.177704+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	17566d57-1e67-435d-a236-20b0d74c6b0d	authenticated	authenticated	staff013@example.com	$2a$10$H97FueV3Zdz0wkQ5qf0qduMYjBqtnjbABNlW/9zbfYlrbe2hDA.Rm	2025-07-06 23:30:25.58629+00	\N		\N		\N			\N	2025-07-06 23:30:25.58944+00	{"provider": "email", "providers": ["email"]}	{"sub": "17566d57-1e67-435d-a236-20b0d74c6b0d", "email": "staff013@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:30:25.581745+00	2025-07-06 23:30:25.591078+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	07dc5cce-f102-4237-810f-3f20640bc6d6	authenticated	authenticated	staff018@example.com	$2a$10$.6vDXQI1p.zWf6hjvTxHi.0yYdZBozMO9IA5mI3PgenQpENQ2NPOa	2025-07-06 23:30:32.184606+00	\N		\N		\N			\N	2025-07-06 23:30:32.187532+00	{"provider": "email", "providers": ["email"]}	{"sub": "07dc5cce-f102-4237-810f-3f20640bc6d6", "email": "staff018@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:30:32.179714+00	2025-07-06 23:30:32.189096+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	63b72a63-e5d9-45be-aa99-a7c26ef5d00e	authenticated	authenticated	staff021@example.com	$2a$10$cytZhumxE/kQHbdlQ9ZIbeoCwzs4SCrhdWn./lTZ39K2ERK6jTSqe	2025-07-06 23:30:36.111066+00	\N		\N		\N			\N	2025-07-06 23:30:36.113906+00	{"provider": "email", "providers": ["email"]}	{"sub": "63b72a63-e5d9-45be-aa99-a7c26ef5d00e", "email": "staff021@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:30:36.104693+00	2025-07-06 23:30:36.115393+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	396ee654-66e0-4407-b4a5-f8757363c7ac	authenticated	authenticated	staff020@example.com	$2a$10$Hx3o.Tk6ZGkuHYKBh.FkEe92ncjtTIGL7wwTlzKaADGxyX/P5J7m6	2025-07-06 23:30:34.797801+00	\N		\N		\N			\N	2025-07-06 23:30:34.80074+00	{"provider": "email", "providers": ["email"]}	{"sub": "396ee654-66e0-4407-b4a5-f8757363c7ac", "email": "staff020@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:30:34.793191+00	2025-07-06 23:30:34.802538+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	a17350fc-6190-4acf-ad2f-9b3539c545f4	authenticated	authenticated	staff017@example.com	$2a$10$Mc2.u0O39oIb9dwfeOeMqeVrDuvcm0d5UKvUiSBeD0IJNdQ.O6lDe	2025-07-06 23:30:30.749251+00	\N		\N		\N			\N	2025-07-06 23:30:30.752527+00	{"provider": "email", "providers": ["email"]}	{"sub": "a17350fc-6190-4acf-ad2f-9b3539c545f4", "email": "staff017@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:30:30.744505+00	2025-07-06 23:30:30.754033+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	7c99c941-ab16-4b77-b0cd-e240575ee019	authenticated	authenticated	staff022@example.com	$2a$10$pHss6b7dXozgqy5TfwGUzOGaiyxrzEetgv3rmCr2lXR1zD4PzZ0/O	2025-07-06 23:30:37.38983+00	\N		\N		\N			\N	2025-07-06 23:30:37.393028+00	{"provider": "email", "providers": ["email"]}	{"sub": "7c99c941-ab16-4b77-b0cd-e240575ee019", "email": "staff022@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:30:37.385315+00	2025-07-06 23:30:37.394582+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	0b08f0c8-3c0f-498a-b0f9-796a2e4d3a2a	authenticated	authenticated	staff025@example.com	$2a$10$C5eBhT4lo6R0JEJVSxQ3vuQtXOFBkqPSU4u6eVlIXntCMK8neywua	2025-07-06 23:30:41.251711+00	\N		\N		\N			\N	2025-07-06 23:35:05.593377+00	{"provider": "email", "providers": ["email"]}	{"sub": "0b08f0c8-3c0f-498a-b0f9-796a2e4d3a2a", "email": "staff025@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:30:41.246097+00	2025-07-06 23:35:05.601051+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a	authenticated	authenticated	staff001@example.com	$2a$10$w6JOgzc4z44lepR4PxtFgOUZ63RzPcE6idVJSVF1X/3maYzOG.OzK	2025-07-06 23:30:06.473187+00	\N		\N		\N			\N	2025-07-26 06:34:17.330933+00	{"provider": "email", "providers": ["email"]}	{"sub": "cb6cca9c-9b78-48ac-aec7-6d3dafbbdd8a", "email": "staff001@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:30:06.4685+00	2025-07-26 06:34:17.334952+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	a2d51914-1cde-4a1d-912e-50c388430197	authenticated	authenticated	student090@example.com	$2a$10$4V34cleJsKNnlDIHQokCb.qwAHi/0f8XyqEy3PbGx88Flq5fS6SYC	2025-07-06 23:29:52.28731+00	\N		\N		\N			\N	2025-07-26 06:35:49.370593+00	{"provider": "email", "providers": ["email"]}	{"sub": "a2d51914-1cde-4a1d-912e-50c388430197", "email": "student090@example.com", "email_verified": true, "phone_verified": false}	\N	2025-07-06 23:29:52.28165+00	2025-07-26 08:35:27.897507+00	\N	\N			\N		0	\N		\N	f	\N	f
\.


--
-- Data for Name: attendance; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.attendance (attendance_id, student_id, subject_id, date, status) FROM stdin;
1	1	9	2025-07-06	absent
2	2	9	2025-07-06	present
3	3	9	2025-07-06	present
4	4	9	2025-07-06	present
5	5	9	2025-07-06	present
6	6	9	2025-07-06	present
7	7	9	2025-07-06	present
8	8	9	2025-07-06	present
9	9	9	2025-07-06	present
10	10	9	2025-07-06	present
11	11	9	2025-07-06	present
12	12	9	2025-07-06	present
13	13	9	2025-07-06	present
14	14	9	2025-07-06	present
15	15	9	2025-07-06	present
16	16	9	2025-07-06	present
17	17	9	2025-07-06	present
18	18	9	2025-07-06	present
19	19	9	2025-07-06	present
20	20	9	2025-07-06	present
21	21	9	2025-07-06	present
22	22	9	2025-07-06	present
23	23	9	2025-07-06	present
24	24	9	2025-07-06	present
25	25	9	2025-07-06	present
26	26	9	2025-07-06	present
27	27	9	2025-07-06	present
28	28	9	2025-07-06	present
29	29	9	2025-07-06	present
30	30	9	2025-07-06	present
31	31	9	2025-07-06	present
32	32	9	2025-07-06	present
33	33	9	2025-07-06	present
34	34	9	2025-07-06	present
35	35	9	2025-07-06	present
36	36	9	2025-07-06	present
37	37	9	2025-07-06	present
38	38	9	2025-07-06	present
39	39	9	2025-07-06	absent
40	40	9	2025-07-06	present
41	41	9	2025-07-06	present
42	42	9	2025-07-06	present
43	43	9	2025-07-06	present
44	44	9	2025-07-06	present
45	45	9	2025-07-06	present
46	46	9	2025-07-06	present
47	47	9	2025-07-06	present
48	48	9	2025-07-06	present
49	49	9	2025-07-06	present
50	50	9	2025-07-06	absent
51	51	9	2025-07-06	present
52	52	9	2025-07-06	present
53	53	9	2025-07-06	present
54	54	9	2025-07-06	present
55	55	9	2025-07-06	present
56	56	9	2025-07-06	present
57	57	9	2025-07-06	present
58	58	9	2025-07-06	present
59	59	9	2025-07-06	present
60	60	9	2025-07-06	present
61	61	9	2025-07-06	present
62	62	9	2025-07-06	present
63	63	9	2025-07-06	present
64	64	9	2025-07-06	present
65	65	9	2025-07-06	present
66	66	9	2025-07-06	present
67	67	9	2025-07-06	absent
68	68	9	2025-07-06	present
69	69	9	2025-07-06	present
70	70	9	2025-07-06	present
71	71	9	2025-07-06	present
72	72	9	2025-07-06	present
73	73	9	2025-07-06	present
74	74	9	2025-07-06	present
75	75	9	2025-07-06	present
76	76	9	2025-07-06	present
77	77	9	2025-07-06	present
78	78	9	2025-07-06	present
79	79	9	2025-07-06	present
80	80	9	2025-07-06	absent
81	81	9	2025-07-06	present
82	82	9	2025-07-06	present
83	83	9	2025-07-06	present
84	84	9	2025-07-06	present
85	85	9	2025-07-06	present
86	86	9	2025-07-06	present
87	87	9	2025-07-06	present
88	88	9	2025-07-06	present
89	89	9	2025-07-06	present
90	90	9	2025-07-06	present
91	91	9	2025-07-06	present
92	92	9	2025-07-06	present
93	93	9	2025-07-06	present
94	94	9	2025-07-06	absent
95	95	9	2025-07-06	present
96	96	9	2025-07-06	present
97	97	9	2025-07-06	present
98	98	9	2025-07-06	present
99	99	9	2025-07-06	present
100	100	9	2025-07-06	present
103	1	2	2025-07-06	present
104	2	2	2025-07-06	present
105	3	2	2025-07-06	present
106	4	2	2025-07-06	present
107	5	2	2025-07-06	present
108	6	2	2025-07-06	present
109	7	2	2025-07-06	present
110	8	2	2025-07-06	present
111	9	2	2025-07-06	present
112	10	2	2025-07-06	present
113	11	2	2025-07-06	present
114	12	2	2025-07-06	present
115	13	2	2025-07-06	present
116	14	2	2025-07-06	present
117	15	2	2025-07-06	present
118	16	2	2025-07-06	present
119	17	2	2025-07-06	present
120	18	2	2025-07-06	present
121	19	2	2025-07-06	present
122	20	2	2025-07-06	present
123	21	2	2025-07-06	present
124	22	2	2025-07-06	present
125	23	2	2025-07-06	present
126	24	2	2025-07-06	present
127	25	2	2025-07-06	present
128	26	2	2025-07-06	present
129	27	2	2025-07-06	present
130	28	2	2025-07-06	present
131	29	2	2025-07-06	present
132	30	2	2025-07-06	present
133	31	2	2025-07-06	present
134	32	2	2025-07-06	present
135	33	2	2025-07-06	present
136	34	2	2025-07-06	present
137	35	2	2025-07-06	present
138	36	2	2025-07-06	present
139	37	2	2025-07-06	present
140	38	2	2025-07-06	present
141	39	2	2025-07-06	present
142	40	2	2025-07-06	present
143	41	2	2025-07-06	present
144	42	2	2025-07-06	present
145	43	2	2025-07-06	present
146	44	2	2025-07-06	present
147	45	2	2025-07-06	present
148	46	2	2025-07-06	present
149	47	2	2025-07-06	present
150	48	2	2025-07-06	present
151	49	2	2025-07-06	present
152	50	2	2025-07-06	present
153	51	2	2025-07-06	present
154	52	2	2025-07-06	present
155	53	2	2025-07-06	present
156	54	2	2025-07-06	present
157	55	2	2025-07-06	present
158	56	2	2025-07-06	present
159	57	2	2025-07-06	present
160	58	2	2025-07-06	present
161	59	2	2025-07-06	present
162	60	2	2025-07-06	present
163	61	2	2025-07-06	present
164	62	2	2025-07-06	present
165	63	2	2025-07-06	present
166	64	2	2025-07-06	present
167	65	2	2025-07-06	present
168	66	2	2025-07-06	present
169	67	2	2025-07-06	present
170	68	2	2025-07-06	present
171	69	2	2025-07-06	present
172	70	2	2025-07-06	present
173	71	2	2025-07-06	present
174	72	2	2025-07-06	present
175	73	2	2025-07-06	present
176	74	2	2025-07-06	present
177	75	2	2025-07-06	present
178	76	2	2025-07-06	present
179	77	2	2025-07-06	present
180	78	2	2025-07-06	present
181	79	2	2025-07-06	present
182	80	2	2025-07-06	present
183	81	2	2025-07-06	present
184	82	2	2025-07-06	present
185	83	2	2025-07-06	present
186	84	2	2025-07-06	present
187	85	2	2025-07-06	present
188	86	2	2025-07-06	present
189	87	2	2025-07-06	present
190	88	2	2025-07-06	present
191	89	2	2025-07-06	present
192	90	2	2025-07-06	present
193	91	2	2025-07-06	present
194	92	2	2025-07-06	present
195	93	2	2025-07-06	present
196	94	2	2025-07-06	present
197	95	2	2025-07-06	present
198	96	2	2025-07-06	present
199	97	2	2025-07-06	present
200	98	2	2025-07-06	present
201	99	2	2025-07-06	present
202	100	2	2025-07-06	present
203	1	2	2025-07-07	present
204	2	2	2025-07-07	present
205	3	2	2025-07-07	present
206	4	2	2025-07-07	present
207	5	2	2025-07-07	present
208	6	2	2025-07-07	present
209	7	2	2025-07-07	present
210	8	2	2025-07-07	present
211	9	2	2025-07-07	present
212	10	2	2025-07-07	present
213	11	2	2025-07-07	present
214	12	2	2025-07-07	present
215	13	2	2025-07-07	present
216	14	2	2025-07-07	present
217	15	2	2025-07-07	present
218	16	2	2025-07-07	present
219	17	2	2025-07-07	present
220	18	2	2025-07-07	present
221	19	2	2025-07-07	present
222	20	2	2025-07-07	present
223	21	2	2025-07-07	present
224	22	2	2025-07-07	present
225	23	2	2025-07-07	present
226	24	2	2025-07-07	present
227	25	2	2025-07-07	present
228	26	2	2025-07-07	present
229	27	2	2025-07-07	present
230	28	2	2025-07-07	present
231	29	2	2025-07-07	present
232	30	2	2025-07-07	present
233	31	2	2025-07-07	present
234	32	2	2025-07-07	present
235	33	2	2025-07-07	present
236	34	2	2025-07-07	present
237	35	2	2025-07-07	present
238	36	2	2025-07-07	present
239	37	2	2025-07-07	present
240	38	2	2025-07-07	present
241	39	2	2025-07-07	present
242	40	2	2025-07-07	present
243	41	2	2025-07-07	present
244	42	2	2025-07-07	present
245	43	2	2025-07-07	present
246	44	2	2025-07-07	present
247	45	2	2025-07-07	present
248	46	2	2025-07-07	present
249	47	2	2025-07-07	present
250	48	2	2025-07-07	present
251	49	2	2025-07-07	present
252	50	2	2025-07-07	present
253	51	2	2025-07-07	present
254	52	2	2025-07-07	present
255	53	2	2025-07-07	present
256	54	2	2025-07-07	present
257	55	2	2025-07-07	present
258	56	2	2025-07-07	present
259	57	2	2025-07-07	present
260	58	2	2025-07-07	present
261	59	2	2025-07-07	present
262	60	2	2025-07-07	present
263	61	2	2025-07-07	present
264	62	2	2025-07-07	present
265	63	2	2025-07-07	present
266	64	2	2025-07-07	present
267	65	2	2025-07-07	present
268	66	2	2025-07-07	present
269	67	2	2025-07-07	present
270	68	2	2025-07-07	present
271	69	2	2025-07-07	present
272	70	2	2025-07-07	present
273	71	2	2025-07-07	present
274	72	2	2025-07-07	present
275	73	2	2025-07-07	present
276	74	2	2025-07-07	present
277	75	2	2025-07-07	present
278	76	2	2025-07-07	present
279	77	2	2025-07-07	present
280	78	2	2025-07-07	present
281	79	2	2025-07-07	present
282	80	2	2025-07-07	present
283	81	2	2025-07-07	present
284	82	2	2025-07-07	present
285	83	2	2025-07-07	present
286	84	2	2025-07-07	present
287	85	2	2025-07-07	present
288	86	2	2025-07-07	present
289	87	2	2025-07-07	present
290	88	2	2025-07-07	present
291	89	2	2025-07-07	present
292	90	2	2025-07-07	present
293	91	2	2025-07-07	present
294	92	2	2025-07-07	present
295	93	2	2025-07-07	present
296	94	2	2025-07-07	present
297	95	2	2025-07-07	present
298	96	2	2025-07-07	present
299	97	2	2025-07-07	present
300	98	2	2025-07-07	present
301	99	2	2025-07-07	present
302	100	2	2025-07-07	present
303	1	2	2025-07-08	present
304	2	2	2025-07-08	absent
305	3	2	2025-07-08	present
306	4	2	2025-07-08	present
307	5	2	2025-07-08	present
308	6	2	2025-07-08	present
309	7	2	2025-07-08	present
310	8	2	2025-07-08	present
311	9	2	2025-07-08	present
312	10	2	2025-07-08	present
313	11	2	2025-07-08	present
314	12	2	2025-07-08	present
315	13	2	2025-07-08	present
316	14	2	2025-07-08	present
317	15	2	2025-07-08	present
318	16	2	2025-07-08	present
319	17	2	2025-07-08	present
320	18	2	2025-07-08	present
321	19	2	2025-07-08	present
322	20	2	2025-07-08	present
323	21	2	2025-07-08	present
324	22	2	2025-07-08	present
325	23	2	2025-07-08	present
326	24	2	2025-07-08	present
327	25	2	2025-07-08	present
328	26	2	2025-07-08	present
329	27	2	2025-07-08	present
330	28	2	2025-07-08	present
331	29	2	2025-07-08	present
332	30	2	2025-07-08	present
333	31	2	2025-07-08	present
334	32	2	2025-07-08	present
335	33	2	2025-07-08	present
336	34	2	2025-07-08	present
337	35	2	2025-07-08	present
338	36	2	2025-07-08	present
339	37	2	2025-07-08	present
340	38	2	2025-07-08	present
341	39	2	2025-07-08	present
342	40	2	2025-07-08	present
343	41	2	2025-07-08	present
344	42	2	2025-07-08	present
345	43	2	2025-07-08	present
346	44	2	2025-07-08	present
347	45	2	2025-07-08	present
348	46	2	2025-07-08	present
349	47	2	2025-07-08	present
350	48	2	2025-07-08	present
351	49	2	2025-07-08	present
352	50	2	2025-07-08	present
353	51	2	2025-07-08	present
354	52	2	2025-07-08	present
355	53	2	2025-07-08	present
356	54	2	2025-07-08	present
357	55	2	2025-07-08	present
358	56	2	2025-07-08	present
359	57	2	2025-07-08	present
360	58	2	2025-07-08	present
361	59	2	2025-07-08	present
362	60	2	2025-07-08	present
363	61	2	2025-07-08	present
364	62	2	2025-07-08	present
365	63	2	2025-07-08	present
366	64	2	2025-07-08	present
367	65	2	2025-07-08	present
368	66	2	2025-07-08	present
369	67	2	2025-07-08	present
370	68	2	2025-07-08	present
371	69	2	2025-07-08	present
372	70	2	2025-07-08	present
373	71	2	2025-07-08	present
374	72	2	2025-07-08	present
375	73	2	2025-07-08	present
376	74	2	2025-07-08	present
377	75	2	2025-07-08	present
378	76	2	2025-07-08	present
379	77	2	2025-07-08	present
380	78	2	2025-07-08	present
381	79	2	2025-07-08	present
382	80	2	2025-07-08	present
383	81	2	2025-07-08	present
384	82	2	2025-07-08	present
385	83	2	2025-07-08	present
386	84	2	2025-07-08	present
387	85	2	2025-07-08	present
388	86	2	2025-07-08	present
389	87	2	2025-07-08	present
390	88	2	2025-07-08	present
391	89	2	2025-07-08	present
392	90	2	2025-07-08	present
393	91	2	2025-07-08	present
394	92	2	2025-07-08	present
395	93	2	2025-07-08	present
396	94	2	2025-07-08	present
397	95	2	2025-07-08	present
398	96	2	2025-07-08	present
399	97	2	2025-07-08	present
400	98	2	2025-07-08	present
401	99	2	2025-07-08	present
402	100	2	2025-07-08	present
403	1	8	2025-07-06	present
404	2	8	2025-07-06	present
405	3	8	2025-07-06	present
406	4	8	2025-07-06	present
407	5	8	2025-07-06	present
408	6	8	2025-07-06	present
409	7	8	2025-07-06	present
410	8	8	2025-07-06	present
411	9	8	2025-07-06	present
412	10	8	2025-07-06	present
413	11	8	2025-07-06	present
414	12	8	2025-07-06	present
415	13	8	2025-07-06	present
416	14	8	2025-07-06	present
417	15	8	2025-07-06	present
418	16	8	2025-07-06	present
419	17	8	2025-07-06	present
420	18	8	2025-07-06	present
421	19	8	2025-07-06	present
422	20	8	2025-07-06	present
423	21	8	2025-07-06	present
424	22	8	2025-07-06	present
425	23	8	2025-07-06	present
426	24	8	2025-07-06	present
427	25	8	2025-07-06	present
428	26	8	2025-07-06	present
429	27	8	2025-07-06	present
430	28	8	2025-07-06	present
431	29	8	2025-07-06	present
432	30	8	2025-07-06	present
433	31	8	2025-07-06	present
434	32	8	2025-07-06	present
435	33	8	2025-07-06	present
436	34	8	2025-07-06	present
437	35	8	2025-07-06	present
438	36	8	2025-07-06	present
439	37	8	2025-07-06	present
440	38	8	2025-07-06	present
441	39	8	2025-07-06	present
442	40	8	2025-07-06	present
443	41	8	2025-07-06	present
444	42	8	2025-07-06	present
445	43	8	2025-07-06	present
446	44	8	2025-07-06	present
447	45	8	2025-07-06	present
448	46	8	2025-07-06	present
449	47	8	2025-07-06	present
450	48	8	2025-07-06	present
451	49	8	2025-07-06	present
452	50	8	2025-07-06	present
453	51	8	2025-07-06	present
454	52	8	2025-07-06	present
455	53	8	2025-07-06	present
456	54	8	2025-07-06	present
457	55	8	2025-07-06	present
458	56	8	2025-07-06	present
459	57	8	2025-07-06	present
460	58	8	2025-07-06	present
461	59	8	2025-07-06	present
462	60	8	2025-07-06	present
463	61	8	2025-07-06	present
464	62	8	2025-07-06	present
465	63	8	2025-07-06	present
466	64	8	2025-07-06	present
467	65	8	2025-07-06	present
468	66	8	2025-07-06	present
469	67	8	2025-07-06	present
470	68	8	2025-07-06	present
471	69	8	2025-07-06	present
472	70	8	2025-07-06	present
473	71	8	2025-07-06	present
474	72	8	2025-07-06	present
475	73	8	2025-07-06	present
476	74	8	2025-07-06	present
477	75	8	2025-07-06	present
478	76	8	2025-07-06	present
479	77	8	2025-07-06	present
480	78	8	2025-07-06	present
481	79	8	2025-07-06	present
482	80	8	2025-07-06	present
483	81	8	2025-07-06	present
484	82	8	2025-07-06	present
485	83	8	2025-07-06	present
486	84	8	2025-07-06	present
487	85	8	2025-07-06	present
488	86	8	2025-07-06	present
489	87	8	2025-07-06	present
490	88	8	2025-07-06	present
491	89	8	2025-07-06	present
492	90	8	2025-07-06	present
493	91	8	2025-07-06	present
494	92	8	2025-07-06	present
495	93	8	2025-07-06	present
496	94	8	2025-07-06	present
497	95	8	2025-07-06	present
498	96	8	2025-07-06	present
499	97	8	2025-07-06	present
500	98	8	2025-07-06	present
501	99	8	2025-07-06	present
502	100	8	2025-07-06	present
506	1	2	2025-07-07	present
507	2	2	2025-07-07	present
508	3	2	2025-07-07	present
509	4	2	2025-07-07	present
510	5	2	2025-07-07	absent
511	6	2	2025-07-07	absent
512	7	2	2025-07-07	absent
513	8	2	2025-07-07	present
514	9	2	2025-07-07	present
515	10	2	2025-07-07	present
516	11	2	2025-07-07	present
517	12	2	2025-07-07	present
518	13	2	2025-07-07	present
519	14	2	2025-07-07	present
520	15	2	2025-07-07	present
521	16	2	2025-07-07	present
522	17	2	2025-07-07	present
523	18	2	2025-07-07	present
524	19	2	2025-07-07	present
525	20	2	2025-07-07	present
526	21	2	2025-07-07	present
527	22	2	2025-07-07	present
528	23	2	2025-07-07	present
529	24	2	2025-07-07	present
530	25	2	2025-07-07	present
531	26	2	2025-07-07	present
532	27	2	2025-07-07	present
533	28	2	2025-07-07	present
534	29	2	2025-07-07	present
535	30	2	2025-07-07	present
536	31	2	2025-07-07	present
537	32	2	2025-07-07	present
538	33	2	2025-07-07	present
539	34	2	2025-07-07	present
540	35	2	2025-07-07	present
541	36	2	2025-07-07	present
542	37	2	2025-07-07	present
543	38	2	2025-07-07	present
544	39	2	2025-07-07	present
545	40	2	2025-07-07	present
546	41	2	2025-07-07	present
547	42	2	2025-07-07	present
548	43	2	2025-07-07	present
549	44	2	2025-07-07	present
550	45	2	2025-07-07	present
551	46	2	2025-07-07	present
552	47	2	2025-07-07	present
553	48	2	2025-07-07	present
554	49	2	2025-07-07	present
555	50	2	2025-07-07	present
556	51	2	2025-07-07	present
557	52	2	2025-07-07	present
558	53	2	2025-07-07	present
559	54	2	2025-07-07	present
560	55	2	2025-07-07	present
561	56	2	2025-07-07	present
562	57	2	2025-07-07	present
563	58	2	2025-07-07	present
564	59	2	2025-07-07	present
565	60	2	2025-07-07	present
566	61	2	2025-07-07	present
567	62	2	2025-07-07	present
568	63	2	2025-07-07	present
569	64	2	2025-07-07	present
570	65	2	2025-07-07	present
571	66	2	2025-07-07	present
572	67	2	2025-07-07	present
573	68	2	2025-07-07	present
574	69	2	2025-07-07	present
575	70	2	2025-07-07	present
576	71	2	2025-07-07	present
577	72	2	2025-07-07	present
578	73	2	2025-07-07	present
579	74	2	2025-07-07	present
580	75	2	2025-07-07	present
581	76	2	2025-07-07	present
582	77	2	2025-07-07	present
583	78	2	2025-07-07	present
584	79	2	2025-07-07	present
585	80	2	2025-07-07	present
586	81	2	2025-07-07	present
587	82	2	2025-07-07	present
588	83	2	2025-07-07	present
589	84	2	2025-07-07	present
590	85	2	2025-07-07	present
591	86	2	2025-07-07	present
592	87	2	2025-07-07	present
593	88	2	2025-07-07	present
594	89	2	2025-07-07	present
595	90	2	2025-07-07	present
596	91	2	2025-07-07	present
597	92	2	2025-07-07	present
598	93	2	2025-07-07	present
599	94	2	2025-07-07	present
600	95	2	2025-07-07	present
601	96	2	2025-07-07	present
602	97	2	2025-07-07	present
603	98	2	2025-07-07	present
604	99	2	2025-07-07	present
605	100	2	2025-07-07	present
606	1	3	2025-07-07	present
607	2	3	2025-07-07	present
608	3	3	2025-07-07	present
609	4	3	2025-07-07	present
610	5	3	2025-07-07	absent
611	6	3	2025-07-07	absent
612	7	3	2025-07-07	absent
613	8	3	2025-07-07	present
614	9	3	2025-07-07	present
615	10	3	2025-07-07	present
616	11	3	2025-07-07	present
617	12	3	2025-07-07	present
618	13	3	2025-07-07	present
619	14	3	2025-07-07	present
620	15	3	2025-07-07	present
621	16	3	2025-07-07	present
622	17	3	2025-07-07	present
623	18	3	2025-07-07	present
624	19	3	2025-07-07	present
625	20	3	2025-07-07	present
626	21	3	2025-07-07	present
627	22	3	2025-07-07	present
628	23	3	2025-07-07	present
629	24	3	2025-07-07	present
630	25	3	2025-07-07	present
631	26	3	2025-07-07	present
632	27	3	2025-07-07	present
633	28	3	2025-07-07	present
634	29	3	2025-07-07	present
635	30	3	2025-07-07	present
636	31	3	2025-07-07	present
637	32	3	2025-07-07	present
638	33	3	2025-07-07	present
639	34	3	2025-07-07	present
640	35	3	2025-07-07	present
641	36	3	2025-07-07	present
642	37	3	2025-07-07	present
643	38	3	2025-07-07	present
644	39	3	2025-07-07	present
645	40	3	2025-07-07	present
646	41	3	2025-07-07	present
647	42	3	2025-07-07	present
648	43	3	2025-07-07	present
649	44	3	2025-07-07	present
650	45	3	2025-07-07	present
651	46	3	2025-07-07	present
652	47	3	2025-07-07	present
653	48	3	2025-07-07	present
654	49	3	2025-07-07	present
655	50	3	2025-07-07	present
656	51	3	2025-07-07	present
657	52	3	2025-07-07	present
658	53	3	2025-07-07	present
659	54	3	2025-07-07	present
660	55	3	2025-07-07	present
661	56	3	2025-07-07	present
662	57	3	2025-07-07	present
663	58	3	2025-07-07	present
664	59	3	2025-07-07	present
665	60	3	2025-07-07	present
666	61	3	2025-07-07	present
667	62	3	2025-07-07	present
668	63	3	2025-07-07	present
669	64	3	2025-07-07	present
670	65	3	2025-07-07	present
671	66	3	2025-07-07	present
672	67	3	2025-07-07	present
673	68	3	2025-07-07	present
674	69	3	2025-07-07	present
675	70	3	2025-07-07	present
676	71	3	2025-07-07	present
677	72	3	2025-07-07	present
678	73	3	2025-07-07	present
679	74	3	2025-07-07	present
680	75	3	2025-07-07	present
681	76	3	2025-07-07	present
682	77	3	2025-07-07	present
683	78	3	2025-07-07	present
684	79	3	2025-07-07	present
685	80	3	2025-07-07	present
686	81	3	2025-07-07	present
687	82	3	2025-07-07	present
688	83	3	2025-07-07	present
689	84	3	2025-07-07	present
690	85	3	2025-07-07	present
691	86	3	2025-07-07	present
692	87	3	2025-07-07	present
693	88	3	2025-07-07	present
694	89	3	2025-07-07	present
695	90	3	2025-07-07	present
696	91	3	2025-07-07	present
697	92	3	2025-07-07	present
698	93	3	2025-07-07	present
699	94	3	2025-07-07	present
700	95	3	2025-07-07	present
701	96	3	2025-07-07	present
702	97	3	2025-07-07	present
703	98	3	2025-07-07	present
704	99	3	2025-07-07	present
705	100	3	2025-07-07	present
706	1	12	2025-07-07	present
707	2	12	2025-07-07	present
708	3	12	2025-07-07	present
709	4	12	2025-07-07	present
710	5	12	2025-07-07	absent
711	6	12	2025-07-07	absent
712	7	12	2025-07-07	absent
713	8	12	2025-07-07	present
714	9	12	2025-07-07	present
715	10	12	2025-07-07	present
716	11	12	2025-07-07	present
717	12	12	2025-07-07	present
718	13	12	2025-07-07	present
719	14	12	2025-07-07	present
720	15	12	2025-07-07	present
721	16	12	2025-07-07	present
722	17	12	2025-07-07	present
723	18	12	2025-07-07	present
724	19	12	2025-07-07	present
725	20	12	2025-07-07	present
726	21	12	2025-07-07	present
727	22	12	2025-07-07	present
728	23	12	2025-07-07	present
729	24	12	2025-07-07	present
730	25	12	2025-07-07	present
731	26	12	2025-07-07	present
732	27	12	2025-07-07	present
733	28	12	2025-07-07	present
734	29	12	2025-07-07	present
735	30	12	2025-07-07	present
736	31	12	2025-07-07	present
737	32	12	2025-07-07	present
738	33	12	2025-07-07	present
739	34	12	2025-07-07	present
740	35	12	2025-07-07	present
741	36	12	2025-07-07	present
742	37	12	2025-07-07	present
743	38	12	2025-07-07	present
744	39	12	2025-07-07	present
745	40	12	2025-07-07	present
746	41	12	2025-07-07	present
747	42	12	2025-07-07	present
748	43	12	2025-07-07	present
749	44	12	2025-07-07	present
750	45	12	2025-07-07	present
751	46	12	2025-07-07	present
752	47	12	2025-07-07	present
753	48	12	2025-07-07	present
754	49	12	2025-07-07	present
755	50	12	2025-07-07	present
756	51	12	2025-07-07	present
757	52	12	2025-07-07	present
758	53	12	2025-07-07	present
759	54	12	2025-07-07	present
760	55	12	2025-07-07	present
761	56	12	2025-07-07	present
762	57	12	2025-07-07	present
763	58	12	2025-07-07	present
764	59	12	2025-07-07	present
765	60	12	2025-07-07	present
766	61	12	2025-07-07	present
767	62	12	2025-07-07	present
768	63	12	2025-07-07	present
769	64	12	2025-07-07	present
770	65	12	2025-07-07	present
771	66	12	2025-07-07	present
772	67	12	2025-07-07	present
773	68	12	2025-07-07	present
774	69	12	2025-07-07	present
775	70	12	2025-07-07	present
776	71	12	2025-07-07	present
777	72	12	2025-07-07	present
778	73	12	2025-07-07	present
779	74	12	2025-07-07	present
780	75	12	2025-07-07	present
781	76	12	2025-07-07	present
782	77	12	2025-07-07	present
783	78	12	2025-07-07	present
784	79	12	2025-07-07	present
785	80	12	2025-07-07	present
786	81	12	2025-07-07	present
787	82	12	2025-07-07	present
788	83	12	2025-07-07	present
789	84	12	2025-07-07	present
790	85	12	2025-07-07	present
791	86	12	2025-07-07	present
792	87	12	2025-07-07	present
793	88	12	2025-07-07	present
794	89	12	2025-07-07	present
795	90	12	2025-07-07	present
796	91	12	2025-07-07	present
797	92	12	2025-07-07	present
798	93	12	2025-07-07	present
799	94	12	2025-07-07	present
800	95	12	2025-07-07	present
801	96	12	2025-07-07	present
802	97	12	2025-07-07	present
803	98	12	2025-07-07	present
804	99	12	2025-07-07	present
805	100	12	2025-07-07	present
806	1	13	2025-07-07	present
807	2	13	2025-07-07	present
808	3	13	2025-07-07	present
809	4	13	2025-07-07	present
810	5	13	2025-07-07	absent
811	6	13	2025-07-07	absent
812	7	13	2025-07-07	absent
813	8	13	2025-07-07	present
814	9	13	2025-07-07	present
815	10	13	2025-07-07	present
816	11	13	2025-07-07	present
817	12	13	2025-07-07	present
818	13	13	2025-07-07	present
819	14	13	2025-07-07	present
820	15	13	2025-07-07	present
821	16	13	2025-07-07	present
822	17	13	2025-07-07	present
823	18	13	2025-07-07	present
824	19	13	2025-07-07	present
825	20	13	2025-07-07	present
826	21	13	2025-07-07	present
827	22	13	2025-07-07	present
828	23	13	2025-07-07	present
829	24	13	2025-07-07	present
830	25	13	2025-07-07	present
831	26	13	2025-07-07	present
832	27	13	2025-07-07	present
833	28	13	2025-07-07	present
834	29	13	2025-07-07	present
835	30	13	2025-07-07	present
836	31	13	2025-07-07	present
837	32	13	2025-07-07	present
838	33	13	2025-07-07	present
839	34	13	2025-07-07	present
840	35	13	2025-07-07	present
841	36	13	2025-07-07	present
842	37	13	2025-07-07	present
843	38	13	2025-07-07	present
844	39	13	2025-07-07	present
845	40	13	2025-07-07	present
846	41	13	2025-07-07	present
847	42	13	2025-07-07	present
848	43	13	2025-07-07	present
849	44	13	2025-07-07	present
850	45	13	2025-07-07	present
851	46	13	2025-07-07	present
852	47	13	2025-07-07	present
853	48	13	2025-07-07	present
854	49	13	2025-07-07	present
855	50	13	2025-07-07	present
856	51	13	2025-07-07	present
857	52	13	2025-07-07	present
858	53	13	2025-07-07	present
859	54	13	2025-07-07	present
860	55	13	2025-07-07	present
861	56	13	2025-07-07	present
862	57	13	2025-07-07	present
863	58	13	2025-07-07	present
864	59	13	2025-07-07	present
865	60	13	2025-07-07	present
866	61	13	2025-07-07	present
867	62	13	2025-07-07	present
868	63	13	2025-07-07	present
869	64	13	2025-07-07	present
870	65	13	2025-07-07	present
871	66	13	2025-07-07	present
872	67	13	2025-07-07	present
873	68	13	2025-07-07	present
874	69	13	2025-07-07	present
875	70	13	2025-07-07	present
876	71	13	2025-07-07	present
877	72	13	2025-07-07	present
878	73	13	2025-07-07	present
879	74	13	2025-07-07	present
880	75	13	2025-07-07	present
881	76	13	2025-07-07	present
882	77	13	2025-07-07	present
883	78	13	2025-07-07	present
884	79	13	2025-07-07	present
885	80	13	2025-07-07	present
886	81	13	2025-07-07	present
887	82	13	2025-07-07	present
888	83	13	2025-07-07	present
889	84	13	2025-07-07	present
890	85	13	2025-07-07	present
891	86	13	2025-07-07	present
892	87	13	2025-07-07	present
893	88	13	2025-07-07	present
894	89	13	2025-07-07	present
895	90	13	2025-07-07	present
896	91	13	2025-07-07	present
897	92	13	2025-07-07	present
898	93	13	2025-07-07	present
899	94	13	2025-07-07	present
900	95	13	2025-07-07	present
901	96	13	2025-07-07	present
902	97	13	2025-07-07	present
903	98	13	2025-07-07	present
904	99	13	2025-07-07	present
905	100	13	2025-07-07	present
906	1	1	2025-07-09	present
907	2	1	2025-07-09	present
908	3	1	2025-07-09	present
909	4	1	2025-07-09	absent
910	5	1	2025-07-09	absent
911	6	1	2025-07-09	absent
912	7	1	2025-07-09	present
913	8	1	2025-07-09	present
914	9	1	2025-07-09	present
915	10	1	2025-07-09	present
916	11	1	2025-07-09	present
917	12	1	2025-07-09	present
918	13	1	2025-07-09	present
919	14	1	2025-07-09	present
920	15	1	2025-07-09	present
921	16	1	2025-07-09	present
922	17	1	2025-07-09	present
923	18	1	2025-07-09	present
924	19	1	2025-07-09	present
925	20	1	2025-07-09	present
926	21	1	2025-07-09	present
927	22	1	2025-07-09	present
928	23	1	2025-07-09	present
929	24	1	2025-07-09	present
930	25	1	2025-07-09	present
931	26	1	2025-07-09	present
932	27	1	2025-07-09	present
933	28	1	2025-07-09	present
934	29	1	2025-07-09	present
935	30	1	2025-07-09	present
936	31	1	2025-07-09	present
937	32	1	2025-07-09	present
938	33	1	2025-07-09	present
939	34	1	2025-07-09	present
940	35	1	2025-07-09	present
941	36	1	2025-07-09	present
942	37	1	2025-07-09	present
943	38	1	2025-07-09	present
944	39	1	2025-07-09	present
945	40	1	2025-07-09	present
946	41	1	2025-07-09	present
947	42	1	2025-07-09	present
948	43	1	2025-07-09	present
949	44	1	2025-07-09	present
950	45	1	2025-07-09	present
951	46	1	2025-07-09	present
952	47	1	2025-07-09	present
953	48	1	2025-07-09	present
954	49	1	2025-07-09	present
955	50	1	2025-07-09	present
956	51	1	2025-07-09	present
957	52	1	2025-07-09	present
958	53	1	2025-07-09	present
959	54	1	2025-07-09	present
960	55	1	2025-07-09	present
961	56	1	2025-07-09	present
962	57	1	2025-07-09	present
963	58	1	2025-07-09	present
964	59	1	2025-07-09	present
965	60	1	2025-07-09	present
966	61	1	2025-07-09	present
967	62	1	2025-07-09	present
968	63	1	2025-07-09	present
969	64	1	2025-07-09	present
970	65	1	2025-07-09	present
971	66	1	2025-07-09	present
972	67	1	2025-07-09	present
973	68	1	2025-07-09	present
974	69	1	2025-07-09	present
975	70	1	2025-07-09	present
976	71	1	2025-07-09	present
977	72	1	2025-07-09	present
978	73	1	2025-07-09	present
979	74	1	2025-07-09	present
980	75	1	2025-07-09	present
981	76	1	2025-07-09	present
982	77	1	2025-07-09	present
983	78	1	2025-07-09	present
984	79	1	2025-07-09	present
985	80	1	2025-07-09	present
986	81	1	2025-07-09	present
987	82	1	2025-07-09	present
988	83	1	2025-07-09	present
989	84	1	2025-07-09	present
990	85	1	2025-07-09	present
991	86	1	2025-07-09	present
992	87	1	2025-07-09	present
993	88	1	2025-07-09	present
994	89	1	2025-07-09	present
995	90	1	2025-07-09	present
996	91	1	2025-07-09	present
997	92	1	2025-07-09	present
998	93	1	2025-07-09	present
999	94	1	2025-07-09	present
1000	95	1	2025-07-09	present
1001	96	1	2025-07-09	present
1002	97	1	2025-07-09	present
1003	98	1	2025-07-09	present
1004	99	1	2025-07-09	present
1005	100	1	2025-07-09	present
1006	1	7	2025-07-09	present
1007	2	7	2025-07-09	present
1008	3	7	2025-07-09	present
1009	4	7	2025-07-09	present
1010	5	7	2025-07-09	present
1011	6	7	2025-07-09	present
1012	7	7	2025-07-09	present
1013	8	7	2025-07-09	present
1014	9	7	2025-07-09	present
1015	10	7	2025-07-09	present
1016	11	7	2025-07-09	present
1017	12	7	2025-07-09	present
1018	13	7	2025-07-09	present
1019	14	7	2025-07-09	present
1020	15	7	2025-07-09	present
1021	16	7	2025-07-09	present
1022	17	7	2025-07-09	present
1023	18	7	2025-07-09	present
1024	19	7	2025-07-09	present
1025	20	7	2025-07-09	present
1026	21	7	2025-07-09	present
1027	22	7	2025-07-09	present
1028	23	7	2025-07-09	present
1029	24	7	2025-07-09	present
1030	25	7	2025-07-09	present
1031	26	7	2025-07-09	present
1032	27	7	2025-07-09	present
1033	28	7	2025-07-09	present
1034	29	7	2025-07-09	present
1035	30	7	2025-07-09	present
1036	31	7	2025-07-09	present
1037	32	7	2025-07-09	present
1038	33	7	2025-07-09	present
1039	34	7	2025-07-09	present
1040	35	7	2025-07-09	present
1041	36	7	2025-07-09	present
1042	37	7	2025-07-09	present
1043	38	7	2025-07-09	present
1044	39	7	2025-07-09	present
1045	40	7	2025-07-09	present
1046	41	7	2025-07-09	present
1047	42	7	2025-07-09	present
1048	43	7	2025-07-09	present
1049	44	7	2025-07-09	present
1050	45	7	2025-07-09	present
1051	46	7	2025-07-09	present
1052	47	7	2025-07-09	present
1053	48	7	2025-07-09	present
1054	49	7	2025-07-09	present
1055	50	7	2025-07-09	present
1056	51	7	2025-07-09	present
1057	52	7	2025-07-09	present
1058	53	7	2025-07-09	present
1059	54	7	2025-07-09	present
1060	55	7	2025-07-09	present
1061	56	7	2025-07-09	present
1062	57	7	2025-07-09	present
1063	58	7	2025-07-09	present
1064	59	7	2025-07-09	present
1065	60	7	2025-07-09	present
1066	61	7	2025-07-09	present
1067	62	7	2025-07-09	present
1068	63	7	2025-07-09	present
1069	64	7	2025-07-09	present
1070	65	7	2025-07-09	present
1071	66	7	2025-07-09	present
1072	67	7	2025-07-09	present
1073	68	7	2025-07-09	present
1074	69	7	2025-07-09	present
1075	70	7	2025-07-09	present
1076	71	7	2025-07-09	present
1077	72	7	2025-07-09	present
1078	73	7	2025-07-09	present
1079	74	7	2025-07-09	present
1080	75	7	2025-07-09	present
1081	76	7	2025-07-09	present
1082	77	7	2025-07-09	present
1083	78	7	2025-07-09	present
1084	79	7	2025-07-09	present
1085	80	7	2025-07-09	present
1086	81	7	2025-07-09	present
1087	82	7	2025-07-09	present
1088	83	7	2025-07-09	present
1089	84	7	2025-07-09	present
1090	85	7	2025-07-09	present
1091	86	7	2025-07-09	present
1092	87	7	2025-07-09	present
1093	88	7	2025-07-09	present
1094	89	7	2025-07-09	present
1095	90	7	2025-07-09	present
1096	91	7	2025-07-09	present
1097	92	7	2025-07-09	present
1098	93	7	2025-07-09	present
1099	94	7	2025-07-09	present
1100	95	7	2025-07-09	present
1101	96	7	2025-07-09	present
1102	97	7	2025-07-09	present
1103	98	7	2025-07-09	present
1104	99	7	2025-07-09	present
1105	100	7	2025-07-09	present
1106	1	11	2025-07-09	present
1107	2	11	2025-07-09	present
1108	3	11	2025-07-09	present
1109	4	11	2025-07-09	present
1110	5	11	2025-07-09	present
1111	6	11	2025-07-09	present
1112	7	11	2025-07-09	present
1113	8	11	2025-07-09	present
1114	9	11	2025-07-09	present
1115	10	11	2025-07-09	present
1116	11	11	2025-07-09	present
1117	12	11	2025-07-09	present
1118	13	11	2025-07-09	present
1119	14	11	2025-07-09	present
1120	15	11	2025-07-09	present
1121	16	11	2025-07-09	present
1122	17	11	2025-07-09	present
1123	18	11	2025-07-09	present
1124	19	11	2025-07-09	present
1125	20	11	2025-07-09	present
1126	21	11	2025-07-09	present
1127	22	11	2025-07-09	present
1128	23	11	2025-07-09	present
1129	24	11	2025-07-09	present
1130	25	11	2025-07-09	present
1131	26	11	2025-07-09	present
1132	27	11	2025-07-09	present
1133	28	11	2025-07-09	present
1134	29	11	2025-07-09	present
1135	30	11	2025-07-09	present
1136	31	11	2025-07-09	present
1137	32	11	2025-07-09	present
1138	33	11	2025-07-09	present
1139	34	11	2025-07-09	present
1140	35	11	2025-07-09	present
1141	36	11	2025-07-09	present
1142	37	11	2025-07-09	present
1143	38	11	2025-07-09	present
1144	39	11	2025-07-09	present
1145	40	11	2025-07-09	present
1146	41	11	2025-07-09	present
1147	42	11	2025-07-09	present
1148	43	11	2025-07-09	present
1149	44	11	2025-07-09	present
1150	45	11	2025-07-09	present
1151	46	11	2025-07-09	present
1152	47	11	2025-07-09	present
1153	48	11	2025-07-09	present
1154	49	11	2025-07-09	present
1155	50	11	2025-07-09	present
1156	51	11	2025-07-09	present
1157	52	11	2025-07-09	present
1158	53	11	2025-07-09	present
1159	54	11	2025-07-09	present
1160	55	11	2025-07-09	present
1161	56	11	2025-07-09	present
1162	57	11	2025-07-09	present
1163	58	11	2025-07-09	present
1164	59	11	2025-07-09	present
1165	60	11	2025-07-09	present
1166	61	11	2025-07-09	present
1167	62	11	2025-07-09	present
1168	63	11	2025-07-09	present
1169	64	11	2025-07-09	present
1170	65	11	2025-07-09	present
1171	66	11	2025-07-09	present
1172	67	11	2025-07-09	present
1173	68	11	2025-07-09	present
1174	69	11	2025-07-09	present
1175	70	11	2025-07-09	present
1176	71	11	2025-07-09	present
1177	72	11	2025-07-09	present
1178	73	11	2025-07-09	present
1179	74	11	2025-07-09	present
1180	75	11	2025-07-09	present
1181	76	11	2025-07-09	present
1182	77	11	2025-07-09	present
1183	78	11	2025-07-09	present
1184	79	11	2025-07-09	present
1185	80	11	2025-07-09	present
1186	81	11	2025-07-09	present
1187	82	11	2025-07-09	present
1188	83	11	2025-07-09	present
1189	84	11	2025-07-09	present
1190	85	11	2025-07-09	present
1191	86	11	2025-07-09	present
1192	87	11	2025-07-09	present
1193	88	11	2025-07-09	present
1194	89	11	2025-07-09	present
1195	90	11	2025-07-09	present
1196	91	11	2025-07-09	present
1197	92	11	2025-07-09	present
1198	93	11	2025-07-09	present
1199	94	11	2025-07-09	present
1200	95	11	2025-07-09	present
1201	96	11	2025-07-09	present
1202	97	11	2025-07-09	present
1203	98	11	2025-07-09	present
1204	99	11	2025-07-09	present
1205	100	11	2025-07-09	present
1206	1	3	2025-07-09	absent
1207	2	3	2025-07-09	absent
1208	3	3	2025-07-09	present
1209	4	3	2025-07-09	present
1210	5	3	2025-07-09	present
1211	6	3	2025-07-09	present
1212	7	3	2025-07-09	present
1213	8	3	2025-07-09	present
1214	9	3	2025-07-09	present
1215	10	3	2025-07-09	present
1216	11	3	2025-07-09	present
1217	12	3	2025-07-09	present
1218	13	3	2025-07-09	present
1219	14	3	2025-07-09	present
1220	15	3	2025-07-09	present
1221	16	3	2025-07-09	present
1222	17	3	2025-07-09	present
1223	18	3	2025-07-09	present
1224	19	3	2025-07-09	present
1225	20	3	2025-07-09	present
1226	21	3	2025-07-09	present
1227	22	3	2025-07-09	present
1228	23	3	2025-07-09	present
1229	24	3	2025-07-09	present
1230	25	3	2025-07-09	present
1231	26	3	2025-07-09	present
1232	27	3	2025-07-09	present
1233	28	3	2025-07-09	present
1234	29	3	2025-07-09	present
1235	30	3	2025-07-09	present
1236	31	3	2025-07-09	present
1237	32	3	2025-07-09	present
1238	33	3	2025-07-09	present
1239	34	3	2025-07-09	present
1240	35	3	2025-07-09	present
1241	36	3	2025-07-09	present
1242	37	3	2025-07-09	present
1243	38	3	2025-07-09	present
1244	39	3	2025-07-09	present
1245	40	3	2025-07-09	present
1246	41	3	2025-07-09	present
1247	42	3	2025-07-09	present
1248	43	3	2025-07-09	present
1249	44	3	2025-07-09	present
1250	45	3	2025-07-09	present
1251	46	3	2025-07-09	present
1252	47	3	2025-07-09	present
1253	48	3	2025-07-09	present
1254	49	3	2025-07-09	present
1255	50	3	2025-07-09	present
1256	51	3	2025-07-09	present
1257	52	3	2025-07-09	present
1258	53	3	2025-07-09	present
1259	54	3	2025-07-09	present
1260	55	3	2025-07-09	present
1261	56	3	2025-07-09	present
1262	57	3	2025-07-09	present
1263	58	3	2025-07-09	present
1264	59	3	2025-07-09	present
1265	60	3	2025-07-09	present
1266	61	3	2025-07-09	present
1267	62	3	2025-07-09	present
1268	63	3	2025-07-09	present
1269	64	3	2025-07-09	present
1270	65	3	2025-07-09	present
1271	66	3	2025-07-09	present
1272	67	3	2025-07-09	present
1273	68	3	2025-07-09	present
1274	69	3	2025-07-09	present
1275	70	3	2025-07-09	present
1276	71	3	2025-07-09	present
1277	72	3	2025-07-09	present
1278	73	3	2025-07-09	present
1279	74	3	2025-07-09	present
1280	75	3	2025-07-09	present
1281	76	3	2025-07-09	present
1282	77	3	2025-07-09	present
1283	78	3	2025-07-09	present
1284	79	3	2025-07-09	present
1285	80	3	2025-07-09	present
1286	81	3	2025-07-09	present
1287	82	3	2025-07-09	present
1288	83	3	2025-07-09	present
1289	84	3	2025-07-09	present
1290	85	3	2025-07-09	present
1291	86	3	2025-07-09	present
1292	87	3	2025-07-09	present
1293	88	3	2025-07-09	present
1294	89	3	2025-07-09	present
1295	90	3	2025-07-09	present
1296	91	3	2025-07-09	present
1297	92	3	2025-07-09	present
1298	93	3	2025-07-09	present
1299	94	3	2025-07-09	present
1300	95	3	2025-07-09	present
1301	96	3	2025-07-09	present
1302	97	3	2025-07-09	present
1303	98	3	2025-07-09	present
1304	99	3	2025-07-09	present
1305	100	3	2025-07-09	present
1306	1	1	2025-07-10	present
1307	2	1	2025-07-10	present
1308	3	1	2025-07-10	present
1309	4	1	2025-07-10	present
1310	5	1	2025-07-10	present
1311	6	1	2025-07-10	present
1312	7	1	2025-07-10	present
1313	8	1	2025-07-10	present
1314	9	1	2025-07-10	present
1315	10	1	2025-07-10	present
1316	11	1	2025-07-10	present
1317	12	1	2025-07-10	present
1318	13	1	2025-07-10	present
1319	14	1	2025-07-10	present
1320	15	1	2025-07-10	present
1321	16	1	2025-07-10	present
1322	17	1	2025-07-10	present
1323	18	1	2025-07-10	present
1324	19	1	2025-07-10	present
1325	20	1	2025-07-10	present
1326	21	1	2025-07-10	present
1327	22	1	2025-07-10	present
1328	23	1	2025-07-10	present
1329	24	1	2025-07-10	present
1330	25	1	2025-07-10	present
1331	26	1	2025-07-10	present
1332	27	1	2025-07-10	present
1333	28	1	2025-07-10	present
1334	29	1	2025-07-10	present
1335	30	1	2025-07-10	present
1336	31	1	2025-07-10	present
1337	32	1	2025-07-10	present
1338	33	1	2025-07-10	present
1339	34	1	2025-07-10	present
1340	35	1	2025-07-10	present
1341	36	1	2025-07-10	present
1342	37	1	2025-07-10	present
1343	38	1	2025-07-10	present
1344	39	1	2025-07-10	present
1345	40	1	2025-07-10	present
1346	41	1	2025-07-10	present
1347	42	1	2025-07-10	present
1348	43	1	2025-07-10	present
1349	44	1	2025-07-10	present
1350	45	1	2025-07-10	present
1351	46	1	2025-07-10	present
1352	47	1	2025-07-10	present
1353	48	1	2025-07-10	present
1354	49	1	2025-07-10	present
1355	50	1	2025-07-10	present
1356	51	1	2025-07-10	present
1357	52	1	2025-07-10	present
1358	53	1	2025-07-10	present
1359	54	1	2025-07-10	present
1360	55	1	2025-07-10	present
1361	56	1	2025-07-10	present
1362	57	1	2025-07-10	present
1363	58	1	2025-07-10	present
1364	59	1	2025-07-10	present
1365	60	1	2025-07-10	present
1366	61	1	2025-07-10	present
1367	62	1	2025-07-10	present
1368	63	1	2025-07-10	present
1369	64	1	2025-07-10	present
1370	65	1	2025-07-10	present
1371	66	1	2025-07-10	present
1372	67	1	2025-07-10	present
1373	68	1	2025-07-10	present
1374	69	1	2025-07-10	present
1375	70	1	2025-07-10	present
1376	71	1	2025-07-10	present
1377	72	1	2025-07-10	present
1378	73	1	2025-07-10	present
1379	74	1	2025-07-10	present
1380	75	1	2025-07-10	present
1381	76	1	2025-07-10	present
1382	77	1	2025-07-10	present
1383	78	1	2025-07-10	present
1384	79	1	2025-07-10	present
1385	80	1	2025-07-10	present
1386	81	1	2025-07-10	present
1387	82	1	2025-07-10	present
1388	83	1	2025-07-10	present
1389	84	1	2025-07-10	present
1390	85	1	2025-07-10	present
1391	86	1	2025-07-10	present
1392	87	1	2025-07-10	present
1393	88	1	2025-07-10	present
1394	89	1	2025-07-10	present
1395	90	1	2025-07-10	absent
1396	91	1	2025-07-10	present
1397	92	1	2025-07-10	absent
1398	93	1	2025-07-10	present
1399	94	1	2025-07-10	present
1400	95	1	2025-07-10	present
1401	96	1	2025-07-10	present
1402	97	1	2025-07-10	present
1403	98	1	2025-07-10	present
1404	99	1	2025-07-10	absent
1405	100	1	2025-07-10	present
1406	1	1	2025-07-10	present
1407	2	1	2025-07-10	present
1408	3	1	2025-07-10	present
1409	4	1	2025-07-10	present
1410	5	1	2025-07-10	present
1411	6	1	2025-07-10	present
1412	7	1	2025-07-10	present
1413	8	1	2025-07-10	present
1414	9	1	2025-07-10	present
1415	10	1	2025-07-10	present
1416	11	1	2025-07-10	present
1417	12	1	2025-07-10	present
1418	13	1	2025-07-10	present
1419	14	1	2025-07-10	present
1420	15	1	2025-07-10	present
1421	16	1	2025-07-10	present
1422	17	1	2025-07-10	present
1423	18	1	2025-07-10	present
1424	19	1	2025-07-10	present
1425	20	1	2025-07-10	present
1426	21	1	2025-07-10	present
1427	22	1	2025-07-10	present
1428	23	1	2025-07-10	present
1429	24	1	2025-07-10	present
1430	25	1	2025-07-10	present
1431	26	1	2025-07-10	present
1432	27	1	2025-07-10	present
1433	28	1	2025-07-10	present
1434	29	1	2025-07-10	present
1435	30	1	2025-07-10	present
1436	31	1	2025-07-10	present
1437	32	1	2025-07-10	present
1438	33	1	2025-07-10	present
1439	34	1	2025-07-10	present
1440	35	1	2025-07-10	present
1441	36	1	2025-07-10	present
1442	37	1	2025-07-10	present
1443	38	1	2025-07-10	present
1444	39	1	2025-07-10	present
1445	40	1	2025-07-10	present
1446	41	1	2025-07-10	present
1447	42	1	2025-07-10	present
1448	43	1	2025-07-10	present
1449	44	1	2025-07-10	present
1450	45	1	2025-07-10	present
1451	46	1	2025-07-10	present
1452	47	1	2025-07-10	present
1453	48	1	2025-07-10	present
1454	49	1	2025-07-10	present
1455	50	1	2025-07-10	present
1456	51	1	2025-07-10	present
1457	52	1	2025-07-10	present
1458	53	1	2025-07-10	present
1459	54	1	2025-07-10	present
1460	55	1	2025-07-10	present
1461	56	1	2025-07-10	present
1462	57	1	2025-07-10	present
1463	58	1	2025-07-10	present
1464	59	1	2025-07-10	present
1465	60	1	2025-07-10	present
1466	61	1	2025-07-10	present
1467	62	1	2025-07-10	present
1468	63	1	2025-07-10	present
1469	64	1	2025-07-10	present
1470	65	1	2025-07-10	present
1471	66	1	2025-07-10	present
1472	67	1	2025-07-10	present
1473	68	1	2025-07-10	present
1474	69	1	2025-07-10	present
1475	70	1	2025-07-10	present
1476	71	1	2025-07-10	present
1477	72	1	2025-07-10	present
1478	73	1	2025-07-10	present
1479	74	1	2025-07-10	present
1480	75	1	2025-07-10	present
1481	76	1	2025-07-10	present
1482	77	1	2025-07-10	present
1483	78	1	2025-07-10	present
1484	79	1	2025-07-10	present
1485	80	1	2025-07-10	present
1486	81	1	2025-07-10	present
1487	82	1	2025-07-10	present
1488	83	1	2025-07-10	present
1489	84	1	2025-07-10	present
1490	85	1	2025-07-10	present
1491	86	1	2025-07-10	present
1492	87	1	2025-07-10	present
1493	88	1	2025-07-10	present
1494	89	1	2025-07-10	present
1495	90	1	2025-07-10	absent
1496	91	1	2025-07-10	absent
1497	92	1	2025-07-10	absent
1498	93	1	2025-07-10	present
1499	94	1	2025-07-10	present
1500	95	1	2025-07-10	absent
1501	96	1	2025-07-10	present
1502	97	1	2025-07-10	present
1503	98	1	2025-07-10	present
1504	99	1	2025-07-10	present
1505	100	1	2025-07-10	present
1506	1	5	2025-07-10	present
1507	2	5	2025-07-10	present
1508	3	5	2025-07-10	present
1509	4	5	2025-07-10	present
1510	5	5	2025-07-10	present
1511	6	5	2025-07-10	present
1512	7	5	2025-07-10	present
1513	8	5	2025-07-10	present
1514	9	5	2025-07-10	present
1515	10	5	2025-07-10	present
1516	11	5	2025-07-10	present
1517	12	5	2025-07-10	present
1518	13	5	2025-07-10	present
1519	14	5	2025-07-10	present
1520	15	5	2025-07-10	present
1521	16	5	2025-07-10	present
1522	17	5	2025-07-10	present
1523	18	5	2025-07-10	present
1524	19	5	2025-07-10	present
1525	20	5	2025-07-10	present
1526	21	5	2025-07-10	present
1527	22	5	2025-07-10	present
1528	23	5	2025-07-10	present
1529	24	5	2025-07-10	present
1530	25	5	2025-07-10	present
1531	26	5	2025-07-10	present
1532	27	5	2025-07-10	present
1533	28	5	2025-07-10	present
1534	29	5	2025-07-10	present
1535	30	5	2025-07-10	present
1536	31	5	2025-07-10	present
1537	32	5	2025-07-10	present
1538	33	5	2025-07-10	absent
1539	34	5	2025-07-10	present
1540	35	5	2025-07-10	absent
1541	36	5	2025-07-10	present
1542	37	5	2025-07-10	present
1543	38	5	2025-07-10	present
1544	39	5	2025-07-10	present
1545	40	5	2025-07-10	present
1546	41	5	2025-07-10	present
1547	42	5	2025-07-10	present
1548	43	5	2025-07-10	present
1549	44	5	2025-07-10	present
1550	45	5	2025-07-10	present
1551	46	5	2025-07-10	present
1552	47	5	2025-07-10	present
1553	48	5	2025-07-10	present
1554	49	5	2025-07-10	present
1555	50	5	2025-07-10	present
1556	51	5	2025-07-10	present
1557	52	5	2025-07-10	present
1558	53	5	2025-07-10	present
1559	54	5	2025-07-10	present
1560	55	5	2025-07-10	present
1561	56	5	2025-07-10	present
1562	57	5	2025-07-10	present
1563	58	5	2025-07-10	present
1564	59	5	2025-07-10	present
1565	60	5	2025-07-10	present
1566	61	5	2025-07-10	present
1567	62	5	2025-07-10	present
1568	63	5	2025-07-10	present
1569	64	5	2025-07-10	present
1570	65	5	2025-07-10	present
1571	66	5	2025-07-10	present
1572	67	5	2025-07-10	present
1573	68	5	2025-07-10	present
1574	69	5	2025-07-10	present
1575	70	5	2025-07-10	present
1576	71	5	2025-07-10	present
1577	72	5	2025-07-10	present
1578	73	5	2025-07-10	present
1579	74	5	2025-07-10	present
1580	75	5	2025-07-10	present
1581	76	5	2025-07-10	present
1582	77	5	2025-07-10	present
1583	78	5	2025-07-10	present
1584	79	5	2025-07-10	present
1585	80	5	2025-07-10	present
1586	81	5	2025-07-10	present
1587	82	5	2025-07-10	present
1588	83	5	2025-07-10	present
1589	84	5	2025-07-10	present
1590	85	5	2025-07-10	present
1591	86	5	2025-07-10	present
1592	87	5	2025-07-10	present
1593	88	5	2025-07-10	present
1594	89	5	2025-07-10	present
1595	90	5	2025-07-10	absent
1596	91	5	2025-07-10	present
1597	92	5	2025-07-10	present
1598	93	5	2025-07-10	present
1599	94	5	2025-07-10	present
1600	95	5	2025-07-10	present
1601	96	5	2025-07-10	present
1602	97	5	2025-07-10	present
1603	98	5	2025-07-10	present
1604	99	5	2025-07-10	present
1605	100	5	2025-07-10	present
1606	1	11	2025-07-18	present
1607	2	11	2025-07-18	present
1608	3	11	2025-07-18	present
1609	4	11	2025-07-18	present
1610	5	11	2025-07-18	present
1611	6	11	2025-07-18	present
1612	7	11	2025-07-18	present
1613	8	11	2025-07-18	present
1614	9	11	2025-07-18	present
1615	10	11	2025-07-18	present
1616	11	11	2025-07-18	present
1617	12	11	2025-07-18	present
1618	13	11	2025-07-18	present
1619	14	11	2025-07-18	present
1620	15	11	2025-07-18	present
1621	16	11	2025-07-18	present
1622	17	11	2025-07-18	present
1623	18	11	2025-07-18	present
1624	19	11	2025-07-18	present
1625	20	11	2025-07-18	present
1626	21	11	2025-07-18	present
1627	22	11	2025-07-18	present
1628	23	11	2025-07-18	present
1629	24	11	2025-07-18	present
1630	25	11	2025-07-18	present
1631	26	11	2025-07-18	present
1632	27	11	2025-07-18	present
1633	28	11	2025-07-18	present
1634	29	11	2025-07-18	present
1635	30	11	2025-07-18	present
1636	31	11	2025-07-18	present
1637	32	11	2025-07-18	present
1638	33	11	2025-07-18	present
1639	34	11	2025-07-18	present
1640	35	11	2025-07-18	present
1641	36	11	2025-07-18	present
1642	37	11	2025-07-18	present
1643	38	11	2025-07-18	present
1644	39	11	2025-07-18	present
1645	40	11	2025-07-18	present
1646	41	11	2025-07-18	present
1647	42	11	2025-07-18	present
1648	43	11	2025-07-18	present
1649	44	11	2025-07-18	present
1650	45	11	2025-07-18	present
1651	46	11	2025-07-18	present
1652	47	11	2025-07-18	present
1653	48	11	2025-07-18	present
1654	49	11	2025-07-18	present
1655	50	11	2025-07-18	present
1656	51	11	2025-07-18	present
1657	52	11	2025-07-18	present
1658	53	11	2025-07-18	present
1659	54	11	2025-07-18	present
1660	55	11	2025-07-18	present
1661	56	11	2025-07-18	present
1662	57	11	2025-07-18	present
1663	58	11	2025-07-18	present
1664	59	11	2025-07-18	present
1665	60	11	2025-07-18	present
1666	61	11	2025-07-18	present
1667	62	11	2025-07-18	present
1668	63	11	2025-07-18	present
1669	64	11	2025-07-18	present
1670	65	11	2025-07-18	present
1671	66	11	2025-07-18	present
1672	67	11	2025-07-18	present
1673	68	11	2025-07-18	present
1674	69	11	2025-07-18	present
1675	70	11	2025-07-18	present
1676	71	11	2025-07-18	present
1677	72	11	2025-07-18	present
1678	73	11	2025-07-18	present
1679	74	11	2025-07-18	present
1680	75	11	2025-07-18	present
1681	76	11	2025-07-18	present
1682	77	11	2025-07-18	present
1683	78	11	2025-07-18	present
1684	79	11	2025-07-18	present
1685	80	11	2025-07-18	present
1686	81	11	2025-07-18	present
1687	82	11	2025-07-18	present
1688	83	11	2025-07-18	present
1689	84	11	2025-07-18	present
1690	85	11	2025-07-18	present
1691	86	11	2025-07-18	present
1692	87	11	2025-07-18	present
1693	88	11	2025-07-18	present
1694	89	11	2025-07-18	present
1695	90	11	2025-07-18	present
1696	91	11	2025-07-18	present
1697	92	11	2025-07-18	present
1698	93	11	2025-07-18	present
1699	94	11	2025-07-18	present
1700	95	11	2025-07-18	present
1701	96	11	2025-07-18	present
1702	97	11	2025-07-18	present
1703	98	11	2025-07-18	present
1704	99	11	2025-07-18	present
1705	100	11	2025-07-18	present
1706	1	11	2025-07-18	present
1707	2	11	2025-07-18	present
1708	3	11	2025-07-18	present
1709	4	11	2025-07-18	present
1710	5	11	2025-07-18	absent
1711	6	11	2025-07-18	absent
1712	7	11	2025-07-18	present
1713	8	11	2025-07-18	present
1714	9	11	2025-07-18	present
1715	10	11	2025-07-18	present
1716	11	11	2025-07-18	present
1717	12	11	2025-07-18	present
1718	13	11	2025-07-18	present
1719	14	11	2025-07-18	present
1720	15	11	2025-07-18	present
1721	16	11	2025-07-18	present
1722	17	11	2025-07-18	present
1723	18	11	2025-07-18	present
1724	19	11	2025-07-18	present
1725	20	11	2025-07-18	present
1726	21	11	2025-07-18	present
1727	22	11	2025-07-18	present
1728	23	11	2025-07-18	present
1729	24	11	2025-07-18	present
1730	25	11	2025-07-18	present
1731	26	11	2025-07-18	present
1732	27	11	2025-07-18	present
1733	28	11	2025-07-18	present
1734	29	11	2025-07-18	present
1735	30	11	2025-07-18	present
1736	31	11	2025-07-18	present
1737	32	11	2025-07-18	present
1738	33	11	2025-07-18	present
1739	34	11	2025-07-18	present
1740	35	11	2025-07-18	present
1741	36	11	2025-07-18	present
1742	37	11	2025-07-18	present
1743	38	11	2025-07-18	present
1744	39	11	2025-07-18	present
1745	40	11	2025-07-18	present
1746	41	11	2025-07-18	present
1747	42	11	2025-07-18	present
1748	43	11	2025-07-18	present
1749	44	11	2025-07-18	present
1750	45	11	2025-07-18	present
1751	46	11	2025-07-18	present
1752	47	11	2025-07-18	present
1753	48	11	2025-07-18	present
1754	49	11	2025-07-18	present
1755	50	11	2025-07-18	present
1756	51	11	2025-07-18	present
1757	52	11	2025-07-18	present
1758	53	11	2025-07-18	present
1759	54	11	2025-07-18	present
1760	55	11	2025-07-18	present
1761	56	11	2025-07-18	present
1762	57	11	2025-07-18	present
1763	58	11	2025-07-18	present
1764	59	11	2025-07-18	present
1765	60	11	2025-07-18	present
1766	61	11	2025-07-18	present
1767	62	11	2025-07-18	present
1768	63	11	2025-07-18	present
1769	64	11	2025-07-18	present
1770	65	11	2025-07-18	present
1771	66	11	2025-07-18	present
1772	67	11	2025-07-18	present
1773	68	11	2025-07-18	present
1774	69	11	2025-07-18	present
1775	70	11	2025-07-18	present
1776	71	11	2025-07-18	present
1777	72	11	2025-07-18	present
1778	73	11	2025-07-18	present
1779	74	11	2025-07-18	present
1780	75	11	2025-07-18	present
1781	76	11	2025-07-18	present
1782	77	11	2025-07-18	present
1783	78	11	2025-07-18	present
1784	79	11	2025-07-18	present
1785	80	11	2025-07-18	present
1786	81	11	2025-07-18	present
1787	82	11	2025-07-18	present
1788	83	11	2025-07-18	present
1789	84	11	2025-07-18	present
1790	85	11	2025-07-18	present
1791	86	11	2025-07-18	present
1792	87	11	2025-07-18	present
1793	88	11	2025-07-18	present
1794	89	11	2025-07-18	present
1795	90	11	2025-07-18	absent
1796	91	11	2025-07-18	present
1797	92	11	2025-07-18	present
1798	93	11	2025-07-18	present
1799	94	11	2025-07-18	present
1800	95	11	2025-07-18	present
1801	96	11	2025-07-18	present
1802	97	11	2025-07-18	present
1803	98	11	2025-07-18	present
1804	99	11	2025-07-18	present
1805	100	11	2025-07-18	present
1806	1	1	2025-07-19	present
1807	2	1	2025-07-19	present
1808	3	1	2025-07-19	present
1809	4	1	2025-07-19	present
1810	5	1	2025-07-19	absent
1811	6	1	2025-07-19	absent
1812	7	1	2025-07-19	present
1813	8	1	2025-07-19	present
1814	9	1	2025-07-19	present
1815	10	1	2025-07-19	present
1816	11	1	2025-07-19	present
1817	12	1	2025-07-19	present
1818	13	1	2025-07-19	present
1819	14	1	2025-07-19	present
1820	15	1	2025-07-19	present
1821	16	1	2025-07-19	present
1822	17	1	2025-07-19	present
1823	18	1	2025-07-19	present
1824	19	1	2025-07-19	present
1825	20	1	2025-07-19	present
1826	21	1	2025-07-19	present
1827	22	1	2025-07-19	present
1828	23	1	2025-07-19	present
1829	24	1	2025-07-19	present
1830	25	1	2025-07-19	present
1831	26	1	2025-07-19	present
1832	27	1	2025-07-19	present
1833	28	1	2025-07-19	present
1834	29	1	2025-07-19	present
1835	30	1	2025-07-19	present
1836	31	1	2025-07-19	present
1837	32	1	2025-07-19	present
1838	33	1	2025-07-19	present
1839	34	1	2025-07-19	present
1840	35	1	2025-07-19	present
1841	36	1	2025-07-19	present
1842	37	1	2025-07-19	present
1843	38	1	2025-07-19	present
1844	39	1	2025-07-19	present
1845	40	1	2025-07-19	present
1846	41	1	2025-07-19	present
1847	42	1	2025-07-19	present
1848	43	1	2025-07-19	present
1849	44	1	2025-07-19	present
1850	45	1	2025-07-19	present
1851	46	1	2025-07-19	present
1852	47	1	2025-07-19	present
1853	48	1	2025-07-19	present
1854	49	1	2025-07-19	present
1855	50	1	2025-07-19	present
1856	51	1	2025-07-19	present
1857	52	1	2025-07-19	present
1858	53	1	2025-07-19	present
1859	54	1	2025-07-19	present
1860	55	1	2025-07-19	present
1861	56	1	2025-07-19	present
1862	57	1	2025-07-19	present
1863	58	1	2025-07-19	present
1864	59	1	2025-07-19	present
1865	60	1	2025-07-19	present
1866	61	1	2025-07-19	present
1867	62	1	2025-07-19	present
1868	63	1	2025-07-19	present
1869	64	1	2025-07-19	present
1870	65	1	2025-07-19	present
1871	66	1	2025-07-19	present
1872	67	1	2025-07-19	present
1873	68	1	2025-07-19	present
1874	69	1	2025-07-19	present
1875	70	1	2025-07-19	present
1876	71	1	2025-07-19	present
1877	72	1	2025-07-19	present
1878	73	1	2025-07-19	present
1879	74	1	2025-07-19	present
1880	75	1	2025-07-19	present
1881	76	1	2025-07-19	present
1882	77	1	2025-07-19	present
1883	78	1	2025-07-19	present
1884	79	1	2025-07-19	present
1885	80	1	2025-07-19	present
1886	81	1	2025-07-19	present
1887	82	1	2025-07-19	present
1888	83	1	2025-07-19	present
1889	84	1	2025-07-19	present
1890	85	1	2025-07-19	present
1891	86	1	2025-07-19	present
1892	87	1	2025-07-19	present
1893	88	1	2025-07-19	present
1894	89	1	2025-07-19	present
1895	90	1	2025-07-19	absent
1896	91	1	2025-07-19	present
1897	92	1	2025-07-19	present
1898	93	1	2025-07-19	present
1899	94	1	2025-07-19	present
1900	95	1	2025-07-19	present
1901	96	1	2025-07-19	present
1902	97	1	2025-07-19	present
1903	98	1	2025-07-19	present
1904	99	1	2025-07-19	present
1905	100	1	2025-07-19	present
1906	1	6	2025-07-19	present
1907	2	6	2025-07-19	present
1908	3	6	2025-07-19	present
1909	4	6	2025-07-19	present
1910	5	6	2025-07-19	absent
1911	6	6	2025-07-19	absent
1912	7	6	2025-07-19	absent
1913	8	6	2025-07-19	present
1914	9	6	2025-07-19	present
1915	10	6	2025-07-19	present
1916	11	6	2025-07-19	present
1917	12	6	2025-07-19	present
1918	13	6	2025-07-19	present
1919	14	6	2025-07-19	present
1920	15	6	2025-07-19	present
1921	16	6	2025-07-19	present
1922	17	6	2025-07-19	present
1923	18	6	2025-07-19	present
1924	19	6	2025-07-19	present
1925	20	6	2025-07-19	present
1926	21	6	2025-07-19	present
1927	22	6	2025-07-19	present
1928	23	6	2025-07-19	present
1929	24	6	2025-07-19	present
1930	25	6	2025-07-19	present
1931	26	6	2025-07-19	present
1932	27	6	2025-07-19	present
1933	28	6	2025-07-19	present
1934	29	6	2025-07-19	present
1935	30	6	2025-07-19	present
1936	31	6	2025-07-19	present
1937	32	6	2025-07-19	present
1938	33	6	2025-07-19	present
1939	34	6	2025-07-19	present
1940	35	6	2025-07-19	present
1941	36	6	2025-07-19	present
1942	37	6	2025-07-19	present
1943	38	6	2025-07-19	present
1944	39	6	2025-07-19	present
1945	40	6	2025-07-19	present
1946	41	6	2025-07-19	present
1947	42	6	2025-07-19	present
1948	43	6	2025-07-19	present
1949	44	6	2025-07-19	present
1950	45	6	2025-07-19	present
1951	46	6	2025-07-19	present
1952	47	6	2025-07-19	present
1953	48	6	2025-07-19	present
1954	49	6	2025-07-19	present
1955	50	6	2025-07-19	present
1956	51	6	2025-07-19	present
1957	52	6	2025-07-19	present
1958	53	6	2025-07-19	present
1959	54	6	2025-07-19	present
1960	55	6	2025-07-19	present
1961	56	6	2025-07-19	present
1962	57	6	2025-07-19	present
1963	58	6	2025-07-19	present
1964	59	6	2025-07-19	present
1965	60	6	2025-07-19	present
1966	61	6	2025-07-19	present
1967	62	6	2025-07-19	present
1968	63	6	2025-07-19	present
1969	64	6	2025-07-19	present
1970	65	6	2025-07-19	present
1971	66	6	2025-07-19	present
1972	67	6	2025-07-19	present
1973	68	6	2025-07-19	present
1974	69	6	2025-07-19	present
1975	70	6	2025-07-19	present
1976	71	6	2025-07-19	present
1977	72	6	2025-07-19	present
1978	73	6	2025-07-19	present
1979	74	6	2025-07-19	present
1980	75	6	2025-07-19	present
1981	76	6	2025-07-19	present
1982	77	6	2025-07-19	present
1983	78	6	2025-07-19	present
1984	79	6	2025-07-19	present
1985	80	6	2025-07-19	present
1986	81	6	2025-07-19	present
1987	82	6	2025-07-19	present
1988	83	6	2025-07-19	present
1989	84	6	2025-07-19	present
1990	85	6	2025-07-19	present
1991	86	6	2025-07-19	present
1992	87	6	2025-07-19	present
1993	88	6	2025-07-19	present
1994	89	6	2025-07-19	present
1995	90	6	2025-07-19	present
1996	91	6	2025-07-19	present
1997	92	6	2025-07-19	present
1998	93	6	2025-07-19	present
1999	94	6	2025-07-19	present
2000	95	6	2025-07-19	present
2001	96	6	2025-07-19	present
2002	97	6	2025-07-19	present
2003	98	6	2025-07-19	present
2004	99	6	2025-07-19	present
2005	100	6	2025-07-19	present
2006	1	7	2025-07-19	absent
2007	2	7	2025-07-19	absent
2008	3	7	2025-07-19	absent
2009	4	7	2025-07-19	present
2010	5	7	2025-07-19	present
2011	6	7	2025-07-19	present
2012	7	7	2025-07-19	present
2013	8	7	2025-07-19	present
2014	9	7	2025-07-19	present
2015	10	7	2025-07-19	present
2016	11	7	2025-07-19	present
2017	12	7	2025-07-19	present
2018	13	7	2025-07-19	present
2019	14	7	2025-07-19	present
2020	15	7	2025-07-19	present
2021	16	7	2025-07-19	present
2022	17	7	2025-07-19	present
2023	18	7	2025-07-19	present
2024	19	7	2025-07-19	present
2025	20	7	2025-07-19	present
2026	21	7	2025-07-19	present
2027	22	7	2025-07-19	present
2028	23	7	2025-07-19	present
2029	24	7	2025-07-19	present
2030	25	7	2025-07-19	present
2031	26	7	2025-07-19	present
2032	27	7	2025-07-19	present
2033	28	7	2025-07-19	present
2034	29	7	2025-07-19	present
2035	30	7	2025-07-19	present
2036	31	7	2025-07-19	present
2037	32	7	2025-07-19	present
2038	33	7	2025-07-19	present
2039	34	7	2025-07-19	present
2040	35	7	2025-07-19	present
2041	36	7	2025-07-19	present
2042	37	7	2025-07-19	present
2043	38	7	2025-07-19	present
2044	39	7	2025-07-19	present
2045	40	7	2025-07-19	present
2046	41	7	2025-07-19	present
2047	42	7	2025-07-19	present
2048	43	7	2025-07-19	present
2049	44	7	2025-07-19	present
2050	45	7	2025-07-19	present
2051	46	7	2025-07-19	present
2052	47	7	2025-07-19	present
2053	48	7	2025-07-19	present
2054	49	7	2025-07-19	present
2055	50	7	2025-07-19	present
2056	51	7	2025-07-19	present
2057	52	7	2025-07-19	present
2058	53	7	2025-07-19	present
2059	54	7	2025-07-19	present
2060	55	7	2025-07-19	present
2061	56	7	2025-07-19	present
2062	57	7	2025-07-19	present
2063	58	7	2025-07-19	present
2064	59	7	2025-07-19	present
2065	60	7	2025-07-19	present
2066	61	7	2025-07-19	present
2067	62	7	2025-07-19	present
2068	63	7	2025-07-19	present
2069	64	7	2025-07-19	present
2070	65	7	2025-07-19	present
2071	66	7	2025-07-19	present
2072	67	7	2025-07-19	present
2073	68	7	2025-07-19	present
2074	69	7	2025-07-19	present
2075	70	7	2025-07-19	present
2076	71	7	2025-07-19	present
2077	72	7	2025-07-19	present
2078	73	7	2025-07-19	present
2079	74	7	2025-07-19	present
2080	75	7	2025-07-19	present
2081	76	7	2025-07-19	present
2082	77	7	2025-07-19	present
2083	78	7	2025-07-19	present
2084	79	7	2025-07-19	present
2085	80	7	2025-07-19	present
2086	81	7	2025-07-19	present
2087	82	7	2025-07-19	present
2088	83	7	2025-07-19	present
2089	84	7	2025-07-19	present
2090	85	7	2025-07-19	present
2091	86	7	2025-07-19	present
2092	87	7	2025-07-19	present
2093	88	7	2025-07-19	present
2094	89	7	2025-07-19	present
2095	90	7	2025-07-19	present
2096	91	7	2025-07-19	present
2097	92	7	2025-07-19	present
2098	93	7	2025-07-19	present
2099	94	7	2025-07-19	present
2100	95	7	2025-07-19	present
2101	96	7	2025-07-19	present
2102	97	7	2025-07-19	present
2103	98	7	2025-07-19	present
2104	99	7	2025-07-19	present
2105	100	7	2025-07-19	present
2106	1	5	2025-07-26	present
2107	2	5	2025-07-26	present
2108	3	5	2025-07-26	present
2109	4	5	2025-07-26	present
2110	5	5	2025-07-26	absent
2111	6	5	2025-07-26	absent
2112	7	5	2025-07-26	present
2113	8	5	2025-07-26	present
2114	9	5	2025-07-26	present
2115	10	5	2025-07-26	present
2116	11	5	2025-07-26	present
2117	12	5	2025-07-26	present
2118	13	5	2025-07-26	present
2119	14	5	2025-07-26	present
2120	15	5	2025-07-26	present
2121	16	5	2025-07-26	present
2122	17	5	2025-07-26	present
2123	18	5	2025-07-26	present
2124	19	5	2025-07-26	present
2125	20	5	2025-07-26	present
2126	21	5	2025-07-26	present
2127	22	5	2025-07-26	present
2128	23	5	2025-07-26	present
2129	24	5	2025-07-26	present
2130	25	5	2025-07-26	present
2131	26	5	2025-07-26	present
2132	27	5	2025-07-26	present
2133	28	5	2025-07-26	present
2134	29	5	2025-07-26	present
2135	30	5	2025-07-26	present
2136	31	5	2025-07-26	present
2137	32	5	2025-07-26	present
2138	33	5	2025-07-26	present
2139	34	5	2025-07-26	present
2140	35	5	2025-07-26	present
2141	36	5	2025-07-26	present
2142	37	5	2025-07-26	present
2143	38	5	2025-07-26	present
2144	39	5	2025-07-26	present
2145	40	5	2025-07-26	present
2146	41	5	2025-07-26	present
2147	42	5	2025-07-26	present
2148	43	5	2025-07-26	present
2149	44	5	2025-07-26	present
2150	45	5	2025-07-26	present
2151	46	5	2025-07-26	present
2152	47	5	2025-07-26	present
2153	48	5	2025-07-26	present
2154	49	5	2025-07-26	present
2155	50	5	2025-07-26	present
2156	51	5	2025-07-26	present
2157	52	5	2025-07-26	present
2158	53	5	2025-07-26	present
2159	54	5	2025-07-26	present
2160	55	5	2025-07-26	present
2161	56	5	2025-07-26	present
2162	57	5	2025-07-26	present
2163	58	5	2025-07-26	present
2164	59	5	2025-07-26	present
2165	60	5	2025-07-26	present
2166	61	5	2025-07-26	present
2167	62	5	2025-07-26	present
2168	63	5	2025-07-26	present
2169	64	5	2025-07-26	present
2170	65	5	2025-07-26	present
2171	66	5	2025-07-26	present
2172	67	5	2025-07-26	present
2173	68	5	2025-07-26	present
2174	69	5	2025-07-26	present
2175	70	5	2025-07-26	present
2176	71	5	2025-07-26	present
2177	72	5	2025-07-26	present
2178	73	5	2025-07-26	present
2179	74	5	2025-07-26	present
2180	75	5	2025-07-26	present
2181	76	5	2025-07-26	present
2182	77	5	2025-07-26	present
2183	78	5	2025-07-26	present
2184	79	5	2025-07-26	present
2185	80	5	2025-07-26	present
2186	81	5	2025-07-26	present
2187	82	5	2025-07-26	present
2188	83	5	2025-07-26	present
2189	84	5	2025-07-26	present
2190	85	5	2025-07-26	present
2191	86	5	2025-07-26	present
2192	87	5	2025-07-26	present
2193	88	5	2025-07-26	present
2194	89	5	2025-07-26	present
2195	90	5	2025-07-26	absent
2196	91	5	2025-07-26	present
2197	92	5	2025-07-26	present
2198	93	5	2025-07-26	present
2199	94	5	2025-07-26	present
2200	95	5	2025-07-26	present
2201	96	5	2025-07-26	present
2202	97	5	2025-07-26	present
2203	98	5	2025-07-26	present
2204	99	5	2025-07-26	present
2205	100	5	2025-07-26	present
\.


--
-- Data for Name: classes_schedule; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.classes_schedule (schedule_id, subject_id, date, "time", room_no, block) FROM stdin;
25	1	2025-07-19	16:00:00	606	AB5
26	6	2025-07-19	13:00:00	606	AB5
27	5	2025-07-26	17:00:00	404	AB4
\.


--
-- Data for Name: notice; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.notice (notice_id, topic, description, staff_id, date, "time") FROM stdin;
32	Weekend Notice	Tomorrow is a weekend, go and play.	2	2025-07-10	22:12:26
33	Class Suspension Notice	Tomorrow's class is suspended due to rain.	2	2025-07-19	10:18:19
34	Company Update	We are developing into a big company.	2	2025-07-19	10:45:29
35	Company Update	We are developing into a big company.	2	2025-07-19	10:45:48
36	Class Suspension Notice	Classes are suspended due to ongoing placements.	2	2025-07-19	10:46:28
37	Growth Notice	We are growing.	2	2025-07-19	10:50:56
38	Interview Notice	We are ready for interview.	2	2025-07-19	10:55:56
45	Class Cancellation	Tomorrow's class is cancelled due to war.	2	2025-07-19	11:31:10
46	Holiday Notice	Tomorrow is a holiday.	2	2025-07-19	12:30:01
47	Holiday Notice	Tomorrow is a holiday due to rain.	2	2025-07-26	12:05:38
\.


--
-- Data for Name: results; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.results (result_id, subject_id, user_id, mid_term_score, end_term_score) FROM stdin;
1	2	2	20	50
2	8	2	50	45
3	1	55	30	50
4	5	5	50	50
5	3	5	20	50
6	6	90	40	50
7	3	90	30	50
8	1	90	50	50
9	7	90	10	10
10	8	90	20	50
\.


--
-- Data for Name: staff_subjects; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.staff_subjects (id, staff_id, subject_id) FROM stdin;
1	101	1
2	102	2
3	103	3
4	104	4
5	105	5
6	106	6
7	107	7
8	108	8
9	109	9
10	110	10
11	111	11
12	112	12
13	113	13
14	114	14
15	115	15
16	116	16
17	117	17
18	118	18
19	119	19
20	120	20
\.


--
-- Data for Name: subjects; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.subjects (subject_id, subject_name, subject_code) FROM stdin;
1	Data Structures	CS200
2	Operating Systems	CS210
3	Database Systems	CS220
4	Computer Networks	CS230
5	Artificial Intelligence	CS240
6	Machine Learning	CS250
7	Software Engineering	CS260
8	Computer Architecture	CS270
9	Discrete Mathematics	CS280
10	Compiler Design	CS290
11	Web Technologies	CS300
12	Cloud Computing	CS310
13	Cyber Security	CS320
14	Big Data Analytics	CS330
15	Human-Computer Interaction	CS340
16	Mobile App Development	CS350
17	Natural Language Processing	CS360
18	Blockchain Technology	CS370
19	IoT Fundamentals	CS380
20	Digital Image Processing	CS390
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (user_id, username, password, role, name, email, phone, branch, section, year, course_year, semester, department, designation, experience_years) FROM stdin;
1	student001	password123	student	Lori Coleman	student001@example.com	001-717-769-3668	Computer Science	1A	1	4	1	\N	\N	\N
2	student002	password123	student	Carrie Mccormick	student002@example.com	013-840-3420x7820	Computer Science	1A	1	4	1	\N	\N	\N
3	student003	password123	student	Erin Sparks	student003@example.com	021-059-8211x174	Computer Science	1A	1	4	1	\N	\N	\N
4	student004	password123	student	Amy Sherman	student004@example.com	3447089793	Computer Science	1A	1	4	1	\N	\N	\N
5	student005	password123	student	Evan Carpenter	student005@example.com	714.212.3953x4019	Computer Science	1A	1	4	1	\N	\N	\N
6	student006	password123	student	Michelle Hogan	student006@example.com	882-110-7949	Computer Science	1A	1	4	1	\N	\N	\N
7	student007	password123	student	Hector Patterson	student007@example.com	(699)855-8137	Computer Science	1A	1	4	1	\N	\N	\N
8	student008	password123	student	Rebekah Morrison	student008@example.com	+1-842-860-1377	Computer Science	1A	1	4	1	\N	\N	\N
9	student009	password123	student	Kendra Perez	student009@example.com	001-702-191-8128x826	Computer Science	1A	1	4	1	\N	\N	\N
10	student010	password123	student	Jose Brown	student010@example.com	628-775-0443	Computer Science	1A	1	4	1	\N	\N	\N
11	student011	password123	student	James Brown	student011@example.com	+1-444-844-5781x8114	Computer Science	1A	1	4	1	\N	\N	\N
12	student012	password123	student	Terry Garcia	student012@example.com	953.256.9372x16549	Computer Science	1A	1	4	1	\N	\N	\N
13	student013	password123	student	Brett Robinson	student013@example.com	(345)871-4029x6915	Computer Science	1A	1	4	1	\N	\N	\N
14	student014	password123	student	Donald Williams	student014@example.com	001-711-568-4928x12671	Computer Science	1A	1	4	1	\N	\N	\N
15	student015	password123	student	Anne Francis	student015@example.com	001-236-463-9172x061	Computer Science	1A	1	4	1	\N	\N	\N
16	student016	password123	student	Carla House	student016@example.com	(488)771-3953	Computer Science	1A	1	4	1	\N	\N	\N
17	student017	password123	student	Brian Thompson	student017@example.com	(056)758-6693	Computer Science	1A	1	4	1	\N	\N	\N
18	student018	password123	student	David Smith	student018@example.com	(777)686-9054x8376	Computer Science	1A	1	4	1	\N	\N	\N
19	student019	password123	student	Leslie Hardin	student019@example.com	268.742.8421	Computer Science	1A	1	4	1	\N	\N	\N
20	student020	password123	student	Kari Ford	student020@example.com	001-952-361-9175x828	Computer Science	1A	1	4	1	\N	\N	\N
21	student021	password123	student	Christopher Taylor	student021@example.com	7357163458	Computer Science	1A	1	4	1	\N	\N	\N
22	student022	password123	student	Karen Donaldson	student022@example.com	+1-508-012-1935x657	Computer Science	1A	1	4	1	\N	\N	\N
23	student023	password123	student	Jo Cook	student023@example.com	(557)239-8671x318	Computer Science	1A	1	4	1	\N	\N	\N
24	student024	password123	student	John West	student024@example.com	004-170-3653x220	Computer Science	1A	1	4	1	\N	\N	\N
25	student025	password123	student	Michelle Perez	student025@example.com	001-897-785-4288x48682	Computer Science	1A	1	4	1	\N	\N	\N
26	student026	password123	student	Patrick Davis	student026@example.com	(023)173-8364x2391	Computer Science	1A	1	4	1	\N	\N	\N
27	student027	password123	student	Stephen Flowers	student027@example.com	+1-926-142-2285x33209	Computer Science	1A	1	4	1	\N	\N	\N
28	student028	password123	student	Bonnie Rodriguez	student028@example.com	213.510.1393x40289	Computer Science	1A	1	4	1	\N	\N	\N
29	student029	password123	student	George Alvarado	student029@example.com	+1-875-866-1409x71946	Computer Science	1A	1	4	1	\N	\N	\N
30	student030	password123	student	Crystal Brown	student030@example.com	001-136-173-6415x1344	Computer Science	1A	1	4	1	\N	\N	\N
31	student031	password123	student	Kathryn Melendez	student031@example.com	001-722-298-8012x300	Computer Science	1A	1	4	1	\N	\N	\N
32	student032	password123	student	Kristin Torres	student032@example.com	211.020.6982x71858	Computer Science	1A	1	4	1	\N	\N	\N
33	student033	password123	student	Judith Smith DVM	student033@example.com	+1-051-709-5251	Computer Science	1A	1	4	1	\N	\N	\N
34	student034	password123	student	Carla Holloway	student034@example.com	289-993-9995x773	Computer Science	1A	1	4	1	\N	\N	\N
35	student035	password123	student	Kayla Howard	student035@example.com	122.125.1003	Computer Science	1A	1	4	1	\N	\N	\N
36	student036	password123	student	Juan Lewis	student036@example.com	048.521.9284x11473	Computer Science	1A	1	4	1	\N	\N	\N
37	student037	password123	student	James Mason	student037@example.com	(571)046-6456x4775	Computer Science	1A	1	4	1	\N	\N	\N
38	student038	password123	student	Michelle Shelton	student038@example.com	001-480-194-7235x42730	Computer Science	1A	1	4	1	\N	\N	\N
39	student039	password123	student	Sarah Lindsey	student039@example.com	944.580.3999	Computer Science	1A	1	4	1	\N	\N	\N
40	student040	password123	student	Adam Calderon	student040@example.com	001-910-549-4231x877	Computer Science	1A	1	4	1	\N	\N	\N
41	student041	password123	student	Mr. Robert Thompson	student041@example.com	610-477-4590x81322	Computer Science	1A	1	4	1	\N	\N	\N
42	student042	password123	student	Sandra Morales	student042@example.com	(034)767-7599x0600	Computer Science	1A	1	4	1	\N	\N	\N
43	student043	password123	student	Tonya Robbins	student043@example.com	363-406-0351	Computer Science	1A	1	4	1	\N	\N	\N
44	student044	password123	student	Amber Evans	student044@example.com	0261544758	Computer Science	1A	1	4	1	\N	\N	\N
45	student045	password123	student	Sara Wong	student045@example.com	001-234-829-5163x4272	Computer Science	1A	1	4	1	\N	\N	\N
46	student046	password123	student	Matthew Anderson	student046@example.com	9123927311	Computer Science	1A	1	4	1	\N	\N	\N
47	student047	password123	student	James Parker	student047@example.com	4109460552	Computer Science	1A	1	4	1	\N	\N	\N
48	student048	password123	student	Rebecca Garcia	student048@example.com	035.166.3438x2538	Computer Science	1A	1	4	1	\N	\N	\N
49	student049	password123	student	Vanessa Wood	student049@example.com	289.353.1252x0776	Computer Science	1A	1	4	1	\N	\N	\N
50	student050	password123	student	Isaac Warren	student050@example.com	+1-591-898-3732x4418	Computer Science	1A	1	4	1	\N	\N	\N
51	student051	password123	student	Crystal Gutierrez	student051@example.com	207-136-9269x133	Computer Science	1A	1	4	1	\N	\N	\N
52	student052	password123	student	Pamela Smith	student052@example.com	943.778.9509x835	Computer Science	1A	1	4	1	\N	\N	\N
53	student053	password123	student	Jon Jackson Jr.	student053@example.com	7474915207	Computer Science	1A	1	4	1	\N	\N	\N
54	student054	password123	student	Sarah Johnson	student054@example.com	001-444-331-0133x0437	Computer Science	1A	1	4	1	\N	\N	\N
55	student055	password123	student	Juan Holmes	student055@example.com	381.626.4433x31915	Computer Science	1A	1	4	1	\N	\N	\N
56	student056	password123	student	Derrick Small	student056@example.com	7376843904	Computer Science	1A	1	4	1	\N	\N	\N
57	student057	password123	student	Tiffany Turner	student057@example.com	(380)964-5783	Computer Science	1A	1	4	1	\N	\N	\N
58	student058	password123	student	Brooke Mitchell	student058@example.com	001-761-297-4427x480	Computer Science	1A	1	4	1	\N	\N	\N
59	student059	password123	student	Nathaniel Lopez	student059@example.com	+1-684-351-0282x20883	Computer Science	1A	1	4	1	\N	\N	\N
60	student060	password123	student	Christopher Stevens	student060@example.com	523-394-5411	Computer Science	1A	1	4	1	\N	\N	\N
61	student061	password123	student	Jay Vasquez	student061@example.com	+1-280-111-3631x476	Computer Science	1A	1	4	1	\N	\N	\N
62	student062	password123	student	Michael Chandler	student062@example.com	+1-082-023-2863	Computer Science	1A	1	4	1	\N	\N	\N
63	student063	password123	student	Peter Lucas	student063@example.com	(344)991-0156x722	Computer Science	1A	1	4	1	\N	\N	\N
64	student064	password123	student	Mary Richardson	student064@example.com	845.682.1528x8689	Computer Science	1A	1	4	1	\N	\N	\N
65	student065	password123	student	Alfred Small	student065@example.com	1110424032	Computer Science	1A	1	4	1	\N	\N	\N
66	student066	password123	student	Michelle Gilmore	student066@example.com	342-834-0973x3494	Computer Science	1A	1	4	1	\N	\N	\N
67	student067	password123	student	Steven Marshall	student067@example.com	4987736291	Computer Science	1A	1	4	1	\N	\N	\N
68	student068	password123	student	Benjamin Smith	student068@example.com	8526855213	Computer Science	1A	1	4	1	\N	\N	\N
69	student069	password123	student	Zachary Malone	student069@example.com	397-310-5531x50352	Computer Science	1A	1	4	1	\N	\N	\N
70	student070	password123	student	Dustin Martin	student070@example.com	936-800-0125x4449	Computer Science	1A	1	4	1	\N	\N	\N
71	student071	password123	student	James Richards	student071@example.com	+1-204-755-9735x191	Computer Science	1A	1	4	1	\N	\N	\N
72	student072	password123	student	Tonya Williams	student072@example.com	1760656932	Computer Science	1A	1	4	1	\N	\N	\N
73	student073	password123	student	Ethan Wallace	student073@example.com	001-253-369-9144x42398	Computer Science	1A	1	4	1	\N	\N	\N
74	student074	password123	student	Jermaine Edwards MD	student074@example.com	2707155671	Computer Science	1A	1	4	1	\N	\N	\N
75	student075	password123	student	Connie Lang	student075@example.com	(523)808-5886x206	Computer Science	1A	1	4	1	\N	\N	\N
76	student076	password123	student	Adam Torres	student076@example.com	001-281-523-9512x420	Computer Science	1A	1	4	1	\N	\N	\N
77	student077	password123	student	Carl Jimenez	student077@example.com	+1-336-740-5297x96115	Computer Science	1A	1	4	1	\N	\N	\N
78	student078	password123	student	Ashley Reese	student078@example.com	(093)985-8804x390	Computer Science	1A	1	4	1	\N	\N	\N
79	student079	password123	student	Frank Watson	student079@example.com	(851)325-9500x98186	Computer Science	1A	1	4	1	\N	\N	\N
80	student080	password123	student	Monica Delgado	student080@example.com	091.186.1149x662	Computer Science	1A	1	4	1	\N	\N	\N
81	student081	password123	student	Miss Brandi Calhoun	student081@example.com	001-958-667-8687x463	Computer Science	1A	1	4	1	\N	\N	\N
82	student082	password123	student	Mackenzie Frank	student082@example.com	(692)524-3122x33155	Computer Science	1A	1	4	1	\N	\N	\N
83	student083	password123	student	Colleen Martin	student083@example.com	939.619.4617	Computer Science	1A	1	4	1	\N	\N	\N
84	student084	password123	student	Diana Lawrence	student084@example.com	651-190-7666	Computer Science	1A	1	4	1	\N	\N	\N
85	student085	password123	student	Christopher Alvarez	student085@example.com	(649)105-5990x5990	Computer Science	1A	1	4	1	\N	\N	\N
86	student086	password123	student	Antonio Hanson	student086@example.com	814.889.6126	Computer Science	1A	1	4	1	\N	\N	\N
87	student087	password123	student	Daniel Haynes	student087@example.com	410.729.7037x7003	Computer Science	1A	1	4	1	\N	\N	\N
88	student088	password123	student	Natasha Ryan	student088@example.com	548.758.7787x132	Computer Science	1A	1	4	1	\N	\N	\N
89	student089	password123	student	Sean Adams	student089@example.com	146.393.7681x963	Computer Science	1A	1	4	1	\N	\N	\N
90	student090	password123	student	Timothy Brady	student090@example.com	(484)692-7726	Computer Science	1A	1	4	1	\N	\N	\N
91	student091	password123	student	Adam Knight	student091@example.com	001-513-579-9014	Computer Science	1A	1	4	1	\N	\N	\N
92	student092	password123	student	Stacy Horne	student092@example.com	(799)274-4531x2590	Computer Science	1A	1	4	1	\N	\N	\N
93	student093	password123	student	Michael Burke	student093@example.com	249-523-2198x2946	Computer Science	1A	1	4	1	\N	\N	\N
94	student094	password123	student	Sandra Allen	student094@example.com	+1-660-874-1535x5056	Computer Science	1A	1	4	1	\N	\N	\N
95	student095	password123	student	Glenn Moore	student095@example.com	+1-080-804-1801	Computer Science	1A	1	4	1	\N	\N	\N
96	student096	password123	student	Jessica Russell	student096@example.com	(419)058-8926x854	Computer Science	1A	1	4	1	\N	\N	\N
97	student097	password123	student	Crystal Lee	student097@example.com	7982028615	Computer Science	1A	1	4	1	\N	\N	\N
98	student098	password123	student	Gregory Boyer	student098@example.com	(047)342-9354x7213	Computer Science	1A	1	4	1	\N	\N	\N
99	student099	password123	student	Dawn Morgan	student099@example.com	+1-182-700-9937x07609	Computer Science	1A	1	4	1	\N	\N	\N
100	student100	password123	student	Timothy Armstrong	student100@example.com	875-964-0883x595	Computer Science	1A	1	4	1	\N	\N	\N
101	staff001	password123	staff	Ashley Huff	staff001@example.com	857-810-0062x644	\N	\N	\N	\N	\N	Computer Science	Professor	11
102	staff002	password123	staff	Tiffany Melton	staff002@example.com	8170929835	\N	\N	\N	\N	\N	Computer Science	Professor	9
103	staff003	password123	staff	Bianca Moore	staff003@example.com	+1-132-151-3209x062	\N	\N	\N	\N	\N	Computer Science	Professor	30
104	staff004	password123	staff	Kristin Porter	staff004@example.com	+1-340-744-9793x444	\N	\N	\N	\N	\N	Computer Science	Professor	5
105	staff005	password123	staff	Tiffany Fisher	staff005@example.com	858.910.1447x06816	\N	\N	\N	\N	\N	Computer Science	Professor	16
106	staff006	password123	staff	Rachel White	staff006@example.com	001-561-817-1178x2552	\N	\N	\N	\N	\N	Computer Science	Professor	20
107	staff007	password123	staff	James Cole	staff007@example.com	(526)059-4078	\N	\N	\N	\N	\N	Computer Science	Professor	11
108	staff008	password123	staff	Elizabeth Scott	staff008@example.com	165.502.1992x3589	\N	\N	\N	\N	\N	Computer Science	Professor	21
109	staff009	password123	staff	Katherine Smith	staff009@example.com	(932)000-8871	\N	\N	\N	\N	\N	Computer Science	Professor	23
110	staff010	password123	staff	Katherine Ashley	staff010@example.com	(566)801-7551x05310	\N	\N	\N	\N	\N	Computer Science	Professor	3
111	staff011	password123	staff	Victor Reed	staff011@example.com	(442)841-5214	\N	\N	\N	\N	\N	Computer Science	Professor	29
112	staff012	password123	staff	Rebecca Scott	staff012@example.com	(399)821-1386x22900	\N	\N	\N	\N	\N	Computer Science	Professor	1
113	staff013	password123	staff	Charles Velazquez	staff013@example.com	380.433.4269	\N	\N	\N	\N	\N	Computer Science	Professor	7
114	staff014	password123	staff	Mrs. Megan Miles	staff014@example.com	183.478.0589x0766	\N	\N	\N	\N	\N	Computer Science	Professor	7
115	staff015	password123	staff	Jamie Warren	staff015@example.com	(952)649-3335x063	\N	\N	\N	\N	\N	Computer Science	Professor	8
116	staff016	password123	staff	Mary Huynh	staff016@example.com	0829157618	\N	\N	\N	\N	\N	Computer Science	Professor	18
117	staff017	password123	staff	Eric Baker	staff017@example.com	777-429-8925	\N	\N	\N	\N	\N	Computer Science	Professor	20
118	staff018	password123	staff	Miranda Mcclain	staff018@example.com	448-880-8451	\N	\N	\N	\N	\N	Computer Science	Professor	26
119	staff019	password123	staff	Stephen Wang	staff019@example.com	954.179.9385	\N	\N	\N	\N	\N	Computer Science	Professor	29
120	staff020	password123	staff	Julie Hoffman	staff020@example.com	001-657-850-8427	\N	\N	\N	\N	\N	Computer Science	Professor	11
121	staff021	password123	staff	Tonya Watson	staff021@example.com	(691)861-7912x3132	\N	\N	\N	\N	\N	Computer Science	Professor	8
122	staff022	password123	staff	Randy Smith	staff022@example.com	347-909-0432x87622	\N	\N	\N	\N	\N	Computer Science	Professor	13
123	staff023	password123	staff	Jason Smith	staff023@example.com	(871)442-3958x8935	\N	\N	\N	\N	\N	Computer Science	Professor	7
124	staff024	password123	staff	Cynthia Knight	staff024@example.com	+1-878-779-3927x35064	\N	\N	\N	\N	\N	Computer Science	Professor	4
125	staff025	password123	staff	Michael Robinson	staff025@example.com	279-876-9030	\N	\N	\N	\N	\N	Computer Science	Professor	14
\.


--
-- Data for Name: schema_migrations; Type: TABLE DATA; Schema: realtime; Owner: supabase_admin
--

COPY realtime.schema_migrations (version, inserted_at) FROM stdin;
20211116024918	2025-07-05 18:34:26
20211116045059	2025-07-05 18:34:26
20211116050929	2025-07-05 18:34:26
20211116051442	2025-07-05 18:34:26
20211116212300	2025-07-05 18:34:26
20211116213355	2025-07-05 18:34:26
20211116213934	2025-07-05 18:34:26
20211116214523	2025-07-05 18:34:26
20211122062447	2025-07-05 18:34:26
20211124070109	2025-07-05 18:34:26
20211202204204	2025-07-05 18:34:26
20211202204605	2025-07-05 18:34:26
20211210212804	2025-07-05 18:34:26
20211228014915	2025-07-05 18:34:26
20220107221237	2025-07-05 18:34:26
20220228202821	2025-07-05 18:34:26
20220312004840	2025-07-05 18:34:26
20220603231003	2025-07-05 18:34:26
20220603232444	2025-07-05 18:34:26
20220615214548	2025-07-05 18:34:26
20220712093339	2025-07-05 18:34:26
20220908172859	2025-07-05 18:34:26
20220916233421	2025-07-05 18:34:26
20230119133233	2025-07-05 18:34:26
20230128025114	2025-07-05 18:34:26
20230128025212	2025-07-05 18:34:26
20230227211149	2025-07-05 18:34:26
20230228184745	2025-07-05 18:34:26
20230308225145	2025-07-05 18:34:26
20230328144023	2025-07-05 18:34:26
20231018144023	2025-07-05 18:34:26
20231204144023	2025-07-05 18:34:26
20231204144024	2025-07-05 18:34:26
20231204144025	2025-07-05 18:34:26
20240108234812	2025-07-05 18:34:26
20240109165339	2025-07-05 18:34:26
20240227174441	2025-07-05 18:34:26
20240311171622	2025-07-05 18:34:26
20240321100241	2025-07-05 18:34:26
20240401105812	2025-07-05 18:34:26
20240418121054	2025-07-05 18:34:26
20240523004032	2025-07-05 18:34:26
20240618124746	2025-07-05 18:34:26
20240801235015	2025-07-05 18:34:26
20240805133720	2025-07-05 18:34:26
20240827160934	2025-07-05 18:34:26
20240919163303	2025-07-05 18:34:26
20240919163305	2025-07-05 18:34:26
20241019105805	2025-07-05 18:34:26
20241030150047	2025-07-05 18:34:27
20241108114728	2025-07-05 18:34:27
20241121104152	2025-07-05 18:34:27
20241130184212	2025-07-05 18:34:27
20241220035512	2025-07-05 18:34:27
20241220123912	2025-07-05 18:34:27
20241224161212	2025-07-05 18:34:27
20250107150512	2025-07-05 18:34:27
20250110162412	2025-07-05 18:34:27
20250123174212	2025-07-05 18:34:27
20250128220012	2025-07-05 18:34:27
20250506224012	2025-07-05 18:34:27
20250523164012	2025-07-05 18:34:27
20250714121412	2025-07-19 04:39:30
\.


--
-- Data for Name: subscription; Type: TABLE DATA; Schema: realtime; Owner: supabase_admin
--

COPY realtime.subscription (id, subscription_id, entity, filters, claims, created_at) FROM stdin;
\.


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

COPY storage.buckets (id, name, owner, created_at, updated_at, public, avif_autodetection, file_size_limit, allowed_mime_types, owner_id) FROM stdin;
\.


--
-- Data for Name: migrations; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

COPY storage.migrations (id, name, hash, executed_at) FROM stdin;
0	create-migrations-table	e18db593bcde2aca2a408c4d1100f6abba2195df	2025-07-05 18:34:22.609043
1	initialmigration	6ab16121fbaa08bbd11b712d05f358f9b555d777	2025-07-05 18:34:22.621593
2	storage-schema	5c7968fd083fcea04050c1b7f6253c9771b99011	2025-07-05 18:34:22.626582
3	pathtoken-column	2cb1b0004b817b29d5b0a971af16bafeede4b70d	2025-07-05 18:34:22.645058
4	add-migrations-rls	427c5b63fe1c5937495d9c635c263ee7a5905058	2025-07-05 18:34:22.655889
5	add-size-functions	79e081a1455b63666c1294a440f8ad4b1e6a7f84	2025-07-05 18:34:22.660847
6	change-column-name-in-get-size	f93f62afdf6613ee5e7e815b30d02dc990201044	2025-07-05 18:34:22.666534
7	add-rls-to-buckets	e7e7f86adbc51049f341dfe8d30256c1abca17aa	2025-07-05 18:34:22.672365
8	add-public-to-buckets	fd670db39ed65f9d08b01db09d6202503ca2bab3	2025-07-05 18:34:22.678442
9	fix-search-function	3a0af29f42e35a4d101c259ed955b67e1bee6825	2025-07-05 18:34:22.683639
10	search-files-search-function	68dc14822daad0ffac3746a502234f486182ef6e	2025-07-05 18:34:22.689341
11	add-trigger-to-auto-update-updated_at-column	7425bdb14366d1739fa8a18c83100636d74dcaa2	2025-07-05 18:34:22.695814
12	add-automatic-avif-detection-flag	8e92e1266eb29518b6a4c5313ab8f29dd0d08df9	2025-07-05 18:34:22.701475
13	add-bucket-custom-limits	cce962054138135cd9a8c4bcd531598684b25e7d	2025-07-05 18:34:22.706618
14	use-bytes-for-max-size	941c41b346f9802b411f06f30e972ad4744dad27	2025-07-05 18:34:22.712033
15	add-can-insert-object-function	934146bc38ead475f4ef4b555c524ee5d66799e5	2025-07-05 18:34:22.729989
16	add-version	76debf38d3fd07dcfc747ca49096457d95b1221b	2025-07-05 18:34:22.735453
17	drop-owner-foreign-key	f1cbb288f1b7a4c1eb8c38504b80ae2a0153d101	2025-07-05 18:34:22.742663
18	add_owner_id_column_deprecate_owner	e7a511b379110b08e2f214be852c35414749fe66	2025-07-05 18:34:22.748718
19	alter-default-value-objects-id	02e5e22a78626187e00d173dc45f58fa66a4f043	2025-07-05 18:34:22.755332
20	list-objects-with-delimiter	cd694ae708e51ba82bf012bba00caf4f3b6393b7	2025-07-05 18:34:22.760544
21	s3-multipart-uploads	8c804d4a566c40cd1e4cc5b3725a664a9303657f	2025-07-05 18:34:22.769343
22	s3-multipart-uploads-big-ints	9737dc258d2397953c9953d9b86920b8be0cdb73	2025-07-05 18:34:22.782323
23	optimize-search-function	9d7e604cddc4b56a5422dc68c9313f4a1b6f132c	2025-07-05 18:34:22.794327
24	operation-function	8312e37c2bf9e76bbe841aa5fda889206d2bf8aa	2025-07-05 18:34:22.800286
25	custom-metadata	d974c6057c3db1c1f847afa0e291e6165693b990	2025-07-05 18:34:22.806081
\.


--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

COPY storage.objects (id, bucket_id, name, owner, created_at, updated_at, last_accessed_at, metadata, version, owner_id, user_metadata) FROM stdin;
\.


--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

COPY storage.s3_multipart_uploads (id, in_progress_size, upload_signature, bucket_id, key, version, owner_id, created_at, user_metadata) FROM stdin;
\.


--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

COPY storage.s3_multipart_uploads_parts (id, upload_id, size, part_number, bucket_id, key, etag, owner_id, version, created_at) FROM stdin;
\.


--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--

COPY vault.secrets (id, name, description, secret, key_id, nonce, created_at, updated_at) FROM stdin;
\.


--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('auth.refresh_tokens_id_seq', 247, true);


--
-- Name: attendance_attendance_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.attendance_attendance_id_seq', 2205, true);


--
-- Name: classes_schedule_schedule_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.classes_schedule_schedule_id_seq', 27, true);


--
-- Name: notice_notice_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.notice_notice_id_seq', 47, true);


--
-- Name: results_result_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.results_result_id_seq', 10, true);


--
-- Name: staff_subjects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.staff_subjects_id_seq', 20, true);


--
-- Name: subjects_subject_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.subjects_subject_id_seq', 20, true);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_user_id_seq', 125, true);


--
-- Name: subscription_id_seq; Type: SEQUENCE SET; Schema: realtime; Owner: supabase_admin
--

SELECT pg_catalog.setval('realtime.subscription_id_seq', 1, false);


--
-- Name: mfa_amr_claims amr_id_pk; Type: CONSTRAINT; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE ONLY auth.mfa_amr_claims
    ADD CONSTRAINT amr_id_pk PRIMARY KEY (id);


--
-- Name: audit_log_entries audit_log_entries_pkey; Type: CONSTRAINT; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE ONLY auth.audit_log_entries
    ADD CONSTRAINT audit_log_entries_pkey PRIMARY KEY (id);


--
-- Name: flow_state flow_state_pkey; Type: CONSTRAINT; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE ONLY auth.flow_state
    ADD CONSTRAINT flow_state_pkey PRIMARY KEY (id);


--
-- Name: identities identities_pkey; Type: CONSTRAINT; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE ONLY auth.identities
    ADD CONSTRAINT identities_pkey PRIMARY KEY (id);


--
-- Name: identities identities_provider_id_provider_unique; Type: CONSTRAINT; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE ONLY auth.identities
    ADD CONSTRAINT identities_provider_id_provider_unique UNIQUE (provider_id, provider);


--
-- Name: instances instances_pkey; Type: CONSTRAINT; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE ONLY auth.instances
    ADD CONSTRAINT instances_pkey PRIMARY KEY (id);


--
-- Name: mfa_amr_claims mfa_amr_claims_session_id_authentication_method_pkey; Type: CONSTRAINT; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE ONLY auth.mfa_amr_claims
    ADD CONSTRAINT mfa_amr_claims_session_id_authentication_method_pkey UNIQUE (session_id, authentication_method);


--
-- Name: mfa_challenges mfa_challenges_pkey; Type: CONSTRAINT; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE ONLY auth.mfa_challenges
    ADD CONSTRAINT mfa_challenges_pkey PRIMARY KEY (id);


--
-- Name: mfa_factors mfa_factors_last_challenged_at_key; Type: CONSTRAINT; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE ONLY auth.mfa_factors
    ADD CONSTRAINT mfa_factors_last_challenged_at_key UNIQUE (last_challenged_at);


--
-- Name: mfa_factors mfa_factors_pkey; Type: CONSTRAINT; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE ONLY auth.mfa_factors
    ADD CONSTRAINT mfa_factors_pkey PRIMARY KEY (id);


--
-- Name: one_time_tokens one_time_tokens_pkey; Type: CONSTRAINT; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE ONLY auth.one_time_tokens
    ADD CONSTRAINT one_time_tokens_pkey PRIMARY KEY (id);


--
-- Name: refresh_tokens refresh_tokens_pkey; Type: CONSTRAINT; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE ONLY auth.refresh_tokens
    ADD CONSTRAINT refresh_tokens_pkey PRIMARY KEY (id);


--
-- Name: refresh_tokens refresh_tokens_token_unique; Type: CONSTRAINT; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE ONLY auth.refresh_tokens
    ADD CONSTRAINT refresh_tokens_token_unique UNIQUE (token);


--
-- Name: saml_providers saml_providers_entity_id_key; Type: CONSTRAINT; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE ONLY auth.saml_providers
    ADD CONSTRAINT saml_providers_entity_id_key UNIQUE (entity_id);


--
-- Name: saml_providers saml_providers_pkey; Type: CONSTRAINT; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE ONLY auth.saml_providers
    ADD CONSTRAINT saml_providers_pkey PRIMARY KEY (id);


--
-- Name: saml_relay_states saml_relay_states_pkey; Type: CONSTRAINT; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE ONLY auth.saml_relay_states
    ADD CONSTRAINT saml_relay_states_pkey PRIMARY KEY (id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE ONLY auth.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE ONLY auth.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: sso_domains sso_domains_pkey; Type: CONSTRAINT; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE ONLY auth.sso_domains
    ADD CONSTRAINT sso_domains_pkey PRIMARY KEY (id);


--
-- Name: sso_providers sso_providers_pkey; Type: CONSTRAINT; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE ONLY auth.sso_providers
    ADD CONSTRAINT sso_providers_pkey PRIMARY KEY (id);


--
-- Name: users users_phone_key; Type: CONSTRAINT; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE ONLY auth.users
    ADD CONSTRAINT users_phone_key UNIQUE (phone);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE ONLY auth.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: attendance attendance_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.attendance
    ADD CONSTRAINT attendance_pkey PRIMARY KEY (attendance_id);


--
-- Name: classes_schedule classes_schedule_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.classes_schedule
    ADD CONSTRAINT classes_schedule_pkey PRIMARY KEY (schedule_id);


--
-- Name: notice notice_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.notice
    ADD CONSTRAINT notice_pkey PRIMARY KEY (notice_id);


--
-- Name: results results_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.results
    ADD CONSTRAINT results_pkey PRIMARY KEY (result_id);


--
-- Name: staff_subjects staff_subjects_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.staff_subjects
    ADD CONSTRAINT staff_subjects_pkey PRIMARY KEY (id);


--
-- Name: staff_subjects staff_subjects_staff_id_subject_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.staff_subjects
    ADD CONSTRAINT staff_subjects_staff_id_subject_id_key UNIQUE (staff_id, subject_id);


--
-- Name: subjects subjects_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subjects
    ADD CONSTRAINT subjects_pkey PRIMARY KEY (subject_id);


--
-- Name: subjects subjects_subject_code_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subjects
    ADD CONSTRAINT subjects_subject_code_key UNIQUE (subject_code);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: messages messages_pkey; Type: CONSTRAINT; Schema: realtime; Owner: supabase_realtime_admin
--

ALTER TABLE ONLY realtime.messages
    ADD CONSTRAINT messages_pkey PRIMARY KEY (id, inserted_at);


--
-- Name: subscription pk_subscription; Type: CONSTRAINT; Schema: realtime; Owner: supabase_admin
--

ALTER TABLE ONLY realtime.subscription
    ADD CONSTRAINT pk_subscription PRIMARY KEY (id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: realtime; Owner: supabase_admin
--

ALTER TABLE ONLY realtime.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: buckets buckets_pkey; Type: CONSTRAINT; Schema: storage; Owner: supabase_storage_admin
--

ALTER TABLE ONLY storage.buckets
    ADD CONSTRAINT buckets_pkey PRIMARY KEY (id);


--
-- Name: migrations migrations_name_key; Type: CONSTRAINT; Schema: storage; Owner: supabase_storage_admin
--

ALTER TABLE ONLY storage.migrations
    ADD CONSTRAINT migrations_name_key UNIQUE (name);


--
-- Name: migrations migrations_pkey; Type: CONSTRAINT; Schema: storage; Owner: supabase_storage_admin
--

ALTER TABLE ONLY storage.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (id);


--
-- Name: objects objects_pkey; Type: CONSTRAINT; Schema: storage; Owner: supabase_storage_admin
--

ALTER TABLE ONLY storage.objects
    ADD CONSTRAINT objects_pkey PRIMARY KEY (id);


--
-- Name: s3_multipart_uploads_parts s3_multipart_uploads_parts_pkey; Type: CONSTRAINT; Schema: storage; Owner: supabase_storage_admin
--

ALTER TABLE ONLY storage.s3_multipart_uploads_parts
    ADD CONSTRAINT s3_multipart_uploads_parts_pkey PRIMARY KEY (id);


--
-- Name: s3_multipart_uploads s3_multipart_uploads_pkey; Type: CONSTRAINT; Schema: storage; Owner: supabase_storage_admin
--

ALTER TABLE ONLY storage.s3_multipart_uploads
    ADD CONSTRAINT s3_multipart_uploads_pkey PRIMARY KEY (id);


--
-- Name: audit_logs_instance_id_idx; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE INDEX audit_logs_instance_id_idx ON auth.audit_log_entries USING btree (instance_id);


--
-- Name: confirmation_token_idx; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE UNIQUE INDEX confirmation_token_idx ON auth.users USING btree (confirmation_token) WHERE ((confirmation_token)::text !~ '^[0-9 ]*$'::text);


--
-- Name: email_change_token_current_idx; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE UNIQUE INDEX email_change_token_current_idx ON auth.users USING btree (email_change_token_current) WHERE ((email_change_token_current)::text !~ '^[0-9 ]*$'::text);


--
-- Name: email_change_token_new_idx; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE UNIQUE INDEX email_change_token_new_idx ON auth.users USING btree (email_change_token_new) WHERE ((email_change_token_new)::text !~ '^[0-9 ]*$'::text);


--
-- Name: factor_id_created_at_idx; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE INDEX factor_id_created_at_idx ON auth.mfa_factors USING btree (user_id, created_at);


--
-- Name: flow_state_created_at_idx; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE INDEX flow_state_created_at_idx ON auth.flow_state USING btree (created_at DESC);


--
-- Name: identities_email_idx; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE INDEX identities_email_idx ON auth.identities USING btree (email text_pattern_ops);


--
-- Name: INDEX identities_email_idx; Type: COMMENT; Schema: auth; Owner: supabase_auth_admin
--

COMMENT ON INDEX auth.identities_email_idx IS 'Auth: Ensures indexed queries on the email column';


--
-- Name: identities_user_id_idx; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE INDEX identities_user_id_idx ON auth.identities USING btree (user_id);


--
-- Name: idx_auth_code; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE INDEX idx_auth_code ON auth.flow_state USING btree (auth_code);


--
-- Name: idx_user_id_auth_method; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE INDEX idx_user_id_auth_method ON auth.flow_state USING btree (user_id, authentication_method);


--
-- Name: mfa_challenge_created_at_idx; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE INDEX mfa_challenge_created_at_idx ON auth.mfa_challenges USING btree (created_at DESC);


--
-- Name: mfa_factors_user_friendly_name_unique; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE UNIQUE INDEX mfa_factors_user_friendly_name_unique ON auth.mfa_factors USING btree (friendly_name, user_id) WHERE (TRIM(BOTH FROM friendly_name) <> ''::text);


--
-- Name: mfa_factors_user_id_idx; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE INDEX mfa_factors_user_id_idx ON auth.mfa_factors USING btree (user_id);


--
-- Name: one_time_tokens_relates_to_hash_idx; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE INDEX one_time_tokens_relates_to_hash_idx ON auth.one_time_tokens USING hash (relates_to);


--
-- Name: one_time_tokens_token_hash_hash_idx; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE INDEX one_time_tokens_token_hash_hash_idx ON auth.one_time_tokens USING hash (token_hash);


--
-- Name: one_time_tokens_user_id_token_type_key; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE UNIQUE INDEX one_time_tokens_user_id_token_type_key ON auth.one_time_tokens USING btree (user_id, token_type);


--
-- Name: reauthentication_token_idx; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE UNIQUE INDEX reauthentication_token_idx ON auth.users USING btree (reauthentication_token) WHERE ((reauthentication_token)::text !~ '^[0-9 ]*$'::text);


--
-- Name: recovery_token_idx; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE UNIQUE INDEX recovery_token_idx ON auth.users USING btree (recovery_token) WHERE ((recovery_token)::text !~ '^[0-9 ]*$'::text);


--
-- Name: refresh_tokens_instance_id_idx; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE INDEX refresh_tokens_instance_id_idx ON auth.refresh_tokens USING btree (instance_id);


--
-- Name: refresh_tokens_instance_id_user_id_idx; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE INDEX refresh_tokens_instance_id_user_id_idx ON auth.refresh_tokens USING btree (instance_id, user_id);


--
-- Name: refresh_tokens_parent_idx; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE INDEX refresh_tokens_parent_idx ON auth.refresh_tokens USING btree (parent);


--
-- Name: refresh_tokens_session_id_revoked_idx; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE INDEX refresh_tokens_session_id_revoked_idx ON auth.refresh_tokens USING btree (session_id, revoked);


--
-- Name: refresh_tokens_updated_at_idx; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE INDEX refresh_tokens_updated_at_idx ON auth.refresh_tokens USING btree (updated_at DESC);


--
-- Name: saml_providers_sso_provider_id_idx; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE INDEX saml_providers_sso_provider_id_idx ON auth.saml_providers USING btree (sso_provider_id);


--
-- Name: saml_relay_states_created_at_idx; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE INDEX saml_relay_states_created_at_idx ON auth.saml_relay_states USING btree (created_at DESC);


--
-- Name: saml_relay_states_for_email_idx; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE INDEX saml_relay_states_for_email_idx ON auth.saml_relay_states USING btree (for_email);


--
-- Name: saml_relay_states_sso_provider_id_idx; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE INDEX saml_relay_states_sso_provider_id_idx ON auth.saml_relay_states USING btree (sso_provider_id);


--
-- Name: sessions_not_after_idx; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE INDEX sessions_not_after_idx ON auth.sessions USING btree (not_after DESC);


--
-- Name: sessions_user_id_idx; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE INDEX sessions_user_id_idx ON auth.sessions USING btree (user_id);


--
-- Name: sso_domains_domain_idx; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE UNIQUE INDEX sso_domains_domain_idx ON auth.sso_domains USING btree (lower(domain));


--
-- Name: sso_domains_sso_provider_id_idx; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE INDEX sso_domains_sso_provider_id_idx ON auth.sso_domains USING btree (sso_provider_id);


--
-- Name: sso_providers_resource_id_idx; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE UNIQUE INDEX sso_providers_resource_id_idx ON auth.sso_providers USING btree (lower(resource_id));


--
-- Name: unique_phone_factor_per_user; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE UNIQUE INDEX unique_phone_factor_per_user ON auth.mfa_factors USING btree (user_id, phone);


--
-- Name: user_id_created_at_idx; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE INDEX user_id_created_at_idx ON auth.sessions USING btree (user_id, created_at);


--
-- Name: users_email_partial_key; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE UNIQUE INDEX users_email_partial_key ON auth.users USING btree (email) WHERE (is_sso_user = false);


--
-- Name: INDEX users_email_partial_key; Type: COMMENT; Schema: auth; Owner: supabase_auth_admin
--

COMMENT ON INDEX auth.users_email_partial_key IS 'Auth: A partial unique index that applies only when is_sso_user is false';


--
-- Name: users_instance_id_email_idx; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE INDEX users_instance_id_email_idx ON auth.users USING btree (instance_id, lower((email)::text));


--
-- Name: users_instance_id_idx; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE INDEX users_instance_id_idx ON auth.users USING btree (instance_id);


--
-- Name: users_is_anonymous_idx; Type: INDEX; Schema: auth; Owner: supabase_auth_admin
--

CREATE INDEX users_is_anonymous_idx ON auth.users USING btree (is_anonymous);


--
-- Name: ix_realtime_subscription_entity; Type: INDEX; Schema: realtime; Owner: supabase_admin
--

CREATE INDEX ix_realtime_subscription_entity ON realtime.subscription USING btree (entity);


--
-- Name: subscription_subscription_id_entity_filters_key; Type: INDEX; Schema: realtime; Owner: supabase_admin
--

CREATE UNIQUE INDEX subscription_subscription_id_entity_filters_key ON realtime.subscription USING btree (subscription_id, entity, filters);


--
-- Name: bname; Type: INDEX; Schema: storage; Owner: supabase_storage_admin
--

CREATE UNIQUE INDEX bname ON storage.buckets USING btree (name);


--
-- Name: bucketid_objname; Type: INDEX; Schema: storage; Owner: supabase_storage_admin
--

CREATE UNIQUE INDEX bucketid_objname ON storage.objects USING btree (bucket_id, name);


--
-- Name: idx_multipart_uploads_list; Type: INDEX; Schema: storage; Owner: supabase_storage_admin
--

CREATE INDEX idx_multipart_uploads_list ON storage.s3_multipart_uploads USING btree (bucket_id, key, created_at);


--
-- Name: idx_objects_bucket_id_name; Type: INDEX; Schema: storage; Owner: supabase_storage_admin
--

CREATE INDEX idx_objects_bucket_id_name ON storage.objects USING btree (bucket_id, name COLLATE "C");


--
-- Name: name_prefix_search; Type: INDEX; Schema: storage; Owner: supabase_storage_admin
--

CREATE INDEX name_prefix_search ON storage.objects USING btree (name text_pattern_ops);


--
-- Name: subscription tr_check_filters; Type: TRIGGER; Schema: realtime; Owner: supabase_admin
--

CREATE TRIGGER tr_check_filters BEFORE INSERT OR UPDATE ON realtime.subscription FOR EACH ROW EXECUTE FUNCTION realtime.subscription_check_filters();


--
-- Name: objects update_objects_updated_at; Type: TRIGGER; Schema: storage; Owner: supabase_storage_admin
--

CREATE TRIGGER update_objects_updated_at BEFORE UPDATE ON storage.objects FOR EACH ROW EXECUTE FUNCTION storage.update_updated_at_column();


--
-- Name: identities identities_user_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE ONLY auth.identities
    ADD CONSTRAINT identities_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: mfa_amr_claims mfa_amr_claims_session_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE ONLY auth.mfa_amr_claims
    ADD CONSTRAINT mfa_amr_claims_session_id_fkey FOREIGN KEY (session_id) REFERENCES auth.sessions(id) ON DELETE CASCADE;


--
-- Name: mfa_challenges mfa_challenges_auth_factor_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE ONLY auth.mfa_challenges
    ADD CONSTRAINT mfa_challenges_auth_factor_id_fkey FOREIGN KEY (factor_id) REFERENCES auth.mfa_factors(id) ON DELETE CASCADE;


--
-- Name: mfa_factors mfa_factors_user_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE ONLY auth.mfa_factors
    ADD CONSTRAINT mfa_factors_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: one_time_tokens one_time_tokens_user_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE ONLY auth.one_time_tokens
    ADD CONSTRAINT one_time_tokens_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: refresh_tokens refresh_tokens_session_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE ONLY auth.refresh_tokens
    ADD CONSTRAINT refresh_tokens_session_id_fkey FOREIGN KEY (session_id) REFERENCES auth.sessions(id) ON DELETE CASCADE;


--
-- Name: saml_providers saml_providers_sso_provider_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE ONLY auth.saml_providers
    ADD CONSTRAINT saml_providers_sso_provider_id_fkey FOREIGN KEY (sso_provider_id) REFERENCES auth.sso_providers(id) ON DELETE CASCADE;


--
-- Name: saml_relay_states saml_relay_states_flow_state_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE ONLY auth.saml_relay_states
    ADD CONSTRAINT saml_relay_states_flow_state_id_fkey FOREIGN KEY (flow_state_id) REFERENCES auth.flow_state(id) ON DELETE CASCADE;


--
-- Name: saml_relay_states saml_relay_states_sso_provider_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE ONLY auth.saml_relay_states
    ADD CONSTRAINT saml_relay_states_sso_provider_id_fkey FOREIGN KEY (sso_provider_id) REFERENCES auth.sso_providers(id) ON DELETE CASCADE;


--
-- Name: sessions sessions_user_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE ONLY auth.sessions
    ADD CONSTRAINT sessions_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: sso_domains sso_domains_sso_provider_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE ONLY auth.sso_domains
    ADD CONSTRAINT sso_domains_sso_provider_id_fkey FOREIGN KEY (sso_provider_id) REFERENCES auth.sso_providers(id) ON DELETE CASCADE;


--
-- Name: attendance attendance_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.attendance
    ADD CONSTRAINT attendance_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.users(user_id) ON DELETE CASCADE;


--
-- Name: attendance attendance_subject_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.attendance
    ADD CONSTRAINT attendance_subject_id_fkey FOREIGN KEY (subject_id) REFERENCES public.subjects(subject_id) ON DELETE CASCADE;


--
-- Name: classes_schedule classes_schedule_subject_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.classes_schedule
    ADD CONSTRAINT classes_schedule_subject_id_fkey FOREIGN KEY (subject_id) REFERENCES public.subjects(subject_id) ON DELETE CASCADE;


--
-- Name: notice notice_staff_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.notice
    ADD CONSTRAINT notice_staff_id_fkey FOREIGN KEY (staff_id) REFERENCES public.users(user_id) ON DELETE CASCADE;


--
-- Name: results results_subject_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.results
    ADD CONSTRAINT results_subject_id_fkey FOREIGN KEY (subject_id) REFERENCES public.subjects(subject_id) ON DELETE CASCADE;


--
-- Name: results results_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.results
    ADD CONSTRAINT results_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id) ON DELETE CASCADE;


--
-- Name: staff_subjects staff_subjects_staff_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.staff_subjects
    ADD CONSTRAINT staff_subjects_staff_id_fkey FOREIGN KEY (staff_id) REFERENCES public.users(user_id) ON DELETE CASCADE;


--
-- Name: staff_subjects staff_subjects_subject_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.staff_subjects
    ADD CONSTRAINT staff_subjects_subject_id_fkey FOREIGN KEY (subject_id) REFERENCES public.subjects(subject_id) ON DELETE CASCADE;


--
-- Name: objects objects_bucketId_fkey; Type: FK CONSTRAINT; Schema: storage; Owner: supabase_storage_admin
--

ALTER TABLE ONLY storage.objects
    ADD CONSTRAINT "objects_bucketId_fkey" FOREIGN KEY (bucket_id) REFERENCES storage.buckets(id);


--
-- Name: s3_multipart_uploads s3_multipart_uploads_bucket_id_fkey; Type: FK CONSTRAINT; Schema: storage; Owner: supabase_storage_admin
--

ALTER TABLE ONLY storage.s3_multipart_uploads
    ADD CONSTRAINT s3_multipart_uploads_bucket_id_fkey FOREIGN KEY (bucket_id) REFERENCES storage.buckets(id);


--
-- Name: s3_multipart_uploads_parts s3_multipart_uploads_parts_bucket_id_fkey; Type: FK CONSTRAINT; Schema: storage; Owner: supabase_storage_admin
--

ALTER TABLE ONLY storage.s3_multipart_uploads_parts
    ADD CONSTRAINT s3_multipart_uploads_parts_bucket_id_fkey FOREIGN KEY (bucket_id) REFERENCES storage.buckets(id);


--
-- Name: s3_multipart_uploads_parts s3_multipart_uploads_parts_upload_id_fkey; Type: FK CONSTRAINT; Schema: storage; Owner: supabase_storage_admin
--

ALTER TABLE ONLY storage.s3_multipart_uploads_parts
    ADD CONSTRAINT s3_multipart_uploads_parts_upload_id_fkey FOREIGN KEY (upload_id) REFERENCES storage.s3_multipart_uploads(id) ON DELETE CASCADE;


--
-- Name: audit_log_entries; Type: ROW SECURITY; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE auth.audit_log_entries ENABLE ROW LEVEL SECURITY;

--
-- Name: flow_state; Type: ROW SECURITY; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE auth.flow_state ENABLE ROW LEVEL SECURITY;

--
-- Name: identities; Type: ROW SECURITY; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE auth.identities ENABLE ROW LEVEL SECURITY;

--
-- Name: instances; Type: ROW SECURITY; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE auth.instances ENABLE ROW LEVEL SECURITY;

--
-- Name: mfa_amr_claims; Type: ROW SECURITY; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE auth.mfa_amr_claims ENABLE ROW LEVEL SECURITY;

--
-- Name: mfa_challenges; Type: ROW SECURITY; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE auth.mfa_challenges ENABLE ROW LEVEL SECURITY;

--
-- Name: mfa_factors; Type: ROW SECURITY; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE auth.mfa_factors ENABLE ROW LEVEL SECURITY;

--
-- Name: one_time_tokens; Type: ROW SECURITY; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE auth.one_time_tokens ENABLE ROW LEVEL SECURITY;

--
-- Name: refresh_tokens; Type: ROW SECURITY; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE auth.refresh_tokens ENABLE ROW LEVEL SECURITY;

--
-- Name: saml_providers; Type: ROW SECURITY; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE auth.saml_providers ENABLE ROW LEVEL SECURITY;

--
-- Name: saml_relay_states; Type: ROW SECURITY; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE auth.saml_relay_states ENABLE ROW LEVEL SECURITY;

--
-- Name: schema_migrations; Type: ROW SECURITY; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE auth.schema_migrations ENABLE ROW LEVEL SECURITY;

--
-- Name: sessions; Type: ROW SECURITY; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE auth.sessions ENABLE ROW LEVEL SECURITY;

--
-- Name: sso_domains; Type: ROW SECURITY; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE auth.sso_domains ENABLE ROW LEVEL SECURITY;

--
-- Name: sso_providers; Type: ROW SECURITY; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE auth.sso_providers ENABLE ROW LEVEL SECURITY;

--
-- Name: users; Type: ROW SECURITY; Schema: auth; Owner: supabase_auth_admin
--

ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

--
-- Name: messages; Type: ROW SECURITY; Schema: realtime; Owner: supabase_realtime_admin
--

ALTER TABLE realtime.messages ENABLE ROW LEVEL SECURITY;

--
-- Name: buckets; Type: ROW SECURITY; Schema: storage; Owner: supabase_storage_admin
--

ALTER TABLE storage.buckets ENABLE ROW LEVEL SECURITY;

--
-- Name: migrations; Type: ROW SECURITY; Schema: storage; Owner: supabase_storage_admin
--

ALTER TABLE storage.migrations ENABLE ROW LEVEL SECURITY;

--
-- Name: objects; Type: ROW SECURITY; Schema: storage; Owner: supabase_storage_admin
--

ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

--
-- Name: s3_multipart_uploads; Type: ROW SECURITY; Schema: storage; Owner: supabase_storage_admin
--

ALTER TABLE storage.s3_multipart_uploads ENABLE ROW LEVEL SECURITY;

--
-- Name: s3_multipart_uploads_parts; Type: ROW SECURITY; Schema: storage; Owner: supabase_storage_admin
--

ALTER TABLE storage.s3_multipart_uploads_parts ENABLE ROW LEVEL SECURITY;

--
-- Name: supabase_realtime; Type: PUBLICATION; Schema: -; Owner: postgres
--

CREATE PUBLICATION supabase_realtime WITH (publish = 'insert, update, delete, truncate');


ALTER PUBLICATION supabase_realtime OWNER TO postgres;

--
-- Name: SCHEMA auth; Type: ACL; Schema: -; Owner: supabase_admin
--

GRANT USAGE ON SCHEMA auth TO anon;
GRANT USAGE ON SCHEMA auth TO authenticated;
GRANT USAGE ON SCHEMA auth TO service_role;
GRANT ALL ON SCHEMA auth TO supabase_auth_admin;
GRANT ALL ON SCHEMA auth TO dashboard_user;
GRANT USAGE ON SCHEMA auth TO postgres;


--
-- Name: SCHEMA extensions; Type: ACL; Schema: -; Owner: postgres
--

GRANT USAGE ON SCHEMA extensions TO anon;
GRANT USAGE ON SCHEMA extensions TO authenticated;
GRANT USAGE ON SCHEMA extensions TO service_role;
GRANT ALL ON SCHEMA extensions TO dashboard_user;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: pg_database_owner
--

GRANT USAGE ON SCHEMA public TO postgres;
GRANT USAGE ON SCHEMA public TO anon;
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT USAGE ON SCHEMA public TO service_role;


--
-- Name: SCHEMA realtime; Type: ACL; Schema: -; Owner: supabase_admin
--

GRANT USAGE ON SCHEMA realtime TO postgres;
GRANT USAGE ON SCHEMA realtime TO anon;
GRANT USAGE ON SCHEMA realtime TO authenticated;
GRANT USAGE ON SCHEMA realtime TO service_role;
GRANT ALL ON SCHEMA realtime TO supabase_realtime_admin;


--
-- Name: SCHEMA storage; Type: ACL; Schema: -; Owner: supabase_admin
--

GRANT USAGE ON SCHEMA storage TO postgres;
GRANT USAGE ON SCHEMA storage TO anon;
GRANT USAGE ON SCHEMA storage TO authenticated;
GRANT USAGE ON SCHEMA storage TO service_role;
GRANT ALL ON SCHEMA storage TO supabase_storage_admin;
GRANT ALL ON SCHEMA storage TO dashboard_user;


--
-- Name: SCHEMA vault; Type: ACL; Schema: -; Owner: supabase_admin
--

GRANT USAGE ON SCHEMA vault TO postgres WITH GRANT OPTION;
GRANT USAGE ON SCHEMA vault TO service_role;


--
-- Name: FUNCTION email(); Type: ACL; Schema: auth; Owner: supabase_auth_admin
--

GRANT ALL ON FUNCTION auth.email() TO dashboard_user;
GRANT ALL ON FUNCTION auth.email() TO postgres;


--
-- Name: FUNCTION jwt(); Type: ACL; Schema: auth; Owner: supabase_auth_admin
--

GRANT ALL ON FUNCTION auth.jwt() TO postgres;
GRANT ALL ON FUNCTION auth.jwt() TO dashboard_user;


--
-- Name: FUNCTION role(); Type: ACL; Schema: auth; Owner: supabase_auth_admin
--

GRANT ALL ON FUNCTION auth.role() TO dashboard_user;
GRANT ALL ON FUNCTION auth.role() TO postgres;


--
-- Name: FUNCTION uid(); Type: ACL; Schema: auth; Owner: supabase_auth_admin
--

GRANT ALL ON FUNCTION auth.uid() TO dashboard_user;
GRANT ALL ON FUNCTION auth.uid() TO postgres;


--
-- Name: FUNCTION armor(bytea); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.armor(bytea) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.armor(bytea) TO dashboard_user;


--
-- Name: FUNCTION armor(bytea, text[], text[]); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.armor(bytea, text[], text[]) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.armor(bytea, text[], text[]) TO dashboard_user;


--
-- Name: FUNCTION crypt(text, text); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.crypt(text, text) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.crypt(text, text) TO dashboard_user;


--
-- Name: FUNCTION dearmor(text); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.dearmor(text) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.dearmor(text) TO dashboard_user;


--
-- Name: FUNCTION decrypt(bytea, bytea, text); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.decrypt(bytea, bytea, text) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.decrypt(bytea, bytea, text) TO dashboard_user;


--
-- Name: FUNCTION decrypt_iv(bytea, bytea, bytea, text); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.decrypt_iv(bytea, bytea, bytea, text) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.decrypt_iv(bytea, bytea, bytea, text) TO dashboard_user;


--
-- Name: FUNCTION digest(bytea, text); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.digest(bytea, text) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.digest(bytea, text) TO dashboard_user;


--
-- Name: FUNCTION digest(text, text); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.digest(text, text) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.digest(text, text) TO dashboard_user;


--
-- Name: FUNCTION encrypt(bytea, bytea, text); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.encrypt(bytea, bytea, text) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.encrypt(bytea, bytea, text) TO dashboard_user;


--
-- Name: FUNCTION encrypt_iv(bytea, bytea, bytea, text); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.encrypt_iv(bytea, bytea, bytea, text) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.encrypt_iv(bytea, bytea, bytea, text) TO dashboard_user;


--
-- Name: FUNCTION gen_random_bytes(integer); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.gen_random_bytes(integer) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.gen_random_bytes(integer) TO dashboard_user;


--
-- Name: FUNCTION gen_random_uuid(); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.gen_random_uuid() TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.gen_random_uuid() TO dashboard_user;


--
-- Name: FUNCTION gen_salt(text); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.gen_salt(text) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.gen_salt(text) TO dashboard_user;


--
-- Name: FUNCTION gen_salt(text, integer); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.gen_salt(text, integer) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.gen_salt(text, integer) TO dashboard_user;


--
-- Name: FUNCTION grant_pg_cron_access(); Type: ACL; Schema: extensions; Owner: supabase_admin
--

REVOKE ALL ON FUNCTION extensions.grant_pg_cron_access() FROM supabase_admin;
GRANT ALL ON FUNCTION extensions.grant_pg_cron_access() TO supabase_admin WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.grant_pg_cron_access() TO dashboard_user;
GRANT ALL ON FUNCTION extensions.grant_pg_cron_access() TO postgres WITH GRANT OPTION;


--
-- Name: FUNCTION grant_pg_graphql_access(); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.grant_pg_graphql_access() TO postgres WITH GRANT OPTION;


--
-- Name: FUNCTION grant_pg_net_access(); Type: ACL; Schema: extensions; Owner: supabase_admin
--

REVOKE ALL ON FUNCTION extensions.grant_pg_net_access() FROM supabase_admin;
GRANT ALL ON FUNCTION extensions.grant_pg_net_access() TO supabase_admin WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.grant_pg_net_access() TO dashboard_user;
GRANT ALL ON FUNCTION extensions.grant_pg_net_access() TO postgres WITH GRANT OPTION;


--
-- Name: FUNCTION hmac(bytea, bytea, text); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.hmac(bytea, bytea, text) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.hmac(bytea, bytea, text) TO dashboard_user;


--
-- Name: FUNCTION hmac(text, text, text); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.hmac(text, text, text) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.hmac(text, text, text) TO dashboard_user;


--
-- Name: FUNCTION pg_stat_statements(showtext boolean, OUT userid oid, OUT dbid oid, OUT toplevel boolean, OUT queryid bigint, OUT query text, OUT plans bigint, OUT total_plan_time double precision, OUT min_plan_time double precision, OUT max_plan_time double precision, OUT mean_plan_time double precision, OUT stddev_plan_time double precision, OUT calls bigint, OUT total_exec_time double precision, OUT min_exec_time double precision, OUT max_exec_time double precision, OUT mean_exec_time double precision, OUT stddev_exec_time double precision, OUT rows bigint, OUT shared_blks_hit bigint, OUT shared_blks_read bigint, OUT shared_blks_dirtied bigint, OUT shared_blks_written bigint, OUT local_blks_hit bigint, OUT local_blks_read bigint, OUT local_blks_dirtied bigint, OUT local_blks_written bigint, OUT temp_blks_read bigint, OUT temp_blks_written bigint, OUT shared_blk_read_time double precision, OUT shared_blk_write_time double precision, OUT local_blk_read_time double precision, OUT local_blk_write_time double precision, OUT temp_blk_read_time double precision, OUT temp_blk_write_time double precision, OUT wal_records bigint, OUT wal_fpi bigint, OUT wal_bytes numeric, OUT jit_functions bigint, OUT jit_generation_time double precision, OUT jit_inlining_count bigint, OUT jit_inlining_time double precision, OUT jit_optimization_count bigint, OUT jit_optimization_time double precision, OUT jit_emission_count bigint, OUT jit_emission_time double precision, OUT jit_deform_count bigint, OUT jit_deform_time double precision, OUT stats_since timestamp with time zone, OUT minmax_stats_since timestamp with time zone); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.pg_stat_statements(showtext boolean, OUT userid oid, OUT dbid oid, OUT toplevel boolean, OUT queryid bigint, OUT query text, OUT plans bigint, OUT total_plan_time double precision, OUT min_plan_time double precision, OUT max_plan_time double precision, OUT mean_plan_time double precision, OUT stddev_plan_time double precision, OUT calls bigint, OUT total_exec_time double precision, OUT min_exec_time double precision, OUT max_exec_time double precision, OUT mean_exec_time double precision, OUT stddev_exec_time double precision, OUT rows bigint, OUT shared_blks_hit bigint, OUT shared_blks_read bigint, OUT shared_blks_dirtied bigint, OUT shared_blks_written bigint, OUT local_blks_hit bigint, OUT local_blks_read bigint, OUT local_blks_dirtied bigint, OUT local_blks_written bigint, OUT temp_blks_read bigint, OUT temp_blks_written bigint, OUT shared_blk_read_time double precision, OUT shared_blk_write_time double precision, OUT local_blk_read_time double precision, OUT local_blk_write_time double precision, OUT temp_blk_read_time double precision, OUT temp_blk_write_time double precision, OUT wal_records bigint, OUT wal_fpi bigint, OUT wal_bytes numeric, OUT jit_functions bigint, OUT jit_generation_time double precision, OUT jit_inlining_count bigint, OUT jit_inlining_time double precision, OUT jit_optimization_count bigint, OUT jit_optimization_time double precision, OUT jit_emission_count bigint, OUT jit_emission_time double precision, OUT jit_deform_count bigint, OUT jit_deform_time double precision, OUT stats_since timestamp with time zone, OUT minmax_stats_since timestamp with time zone) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.pg_stat_statements(showtext boolean, OUT userid oid, OUT dbid oid, OUT toplevel boolean, OUT queryid bigint, OUT query text, OUT plans bigint, OUT total_plan_time double precision, OUT min_plan_time double precision, OUT max_plan_time double precision, OUT mean_plan_time double precision, OUT stddev_plan_time double precision, OUT calls bigint, OUT total_exec_time double precision, OUT min_exec_time double precision, OUT max_exec_time double precision, OUT mean_exec_time double precision, OUT stddev_exec_time double precision, OUT rows bigint, OUT shared_blks_hit bigint, OUT shared_blks_read bigint, OUT shared_blks_dirtied bigint, OUT shared_blks_written bigint, OUT local_blks_hit bigint, OUT local_blks_read bigint, OUT local_blks_dirtied bigint, OUT local_blks_written bigint, OUT temp_blks_read bigint, OUT temp_blks_written bigint, OUT shared_blk_read_time double precision, OUT shared_blk_write_time double precision, OUT local_blk_read_time double precision, OUT local_blk_write_time double precision, OUT temp_blk_read_time double precision, OUT temp_blk_write_time double precision, OUT wal_records bigint, OUT wal_fpi bigint, OUT wal_bytes numeric, OUT jit_functions bigint, OUT jit_generation_time double precision, OUT jit_inlining_count bigint, OUT jit_inlining_time double precision, OUT jit_optimization_count bigint, OUT jit_optimization_time double precision, OUT jit_emission_count bigint, OUT jit_emission_time double precision, OUT jit_deform_count bigint, OUT jit_deform_time double precision, OUT stats_since timestamp with time zone, OUT minmax_stats_since timestamp with time zone) TO dashboard_user;


--
-- Name: FUNCTION pg_stat_statements_info(OUT dealloc bigint, OUT stats_reset timestamp with time zone); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.pg_stat_statements_info(OUT dealloc bigint, OUT stats_reset timestamp with time zone) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.pg_stat_statements_info(OUT dealloc bigint, OUT stats_reset timestamp with time zone) TO dashboard_user;


--
-- Name: FUNCTION pg_stat_statements_reset(userid oid, dbid oid, queryid bigint, minmax_only boolean); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.pg_stat_statements_reset(userid oid, dbid oid, queryid bigint, minmax_only boolean) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.pg_stat_statements_reset(userid oid, dbid oid, queryid bigint, minmax_only boolean) TO dashboard_user;


--
-- Name: FUNCTION pgp_armor_headers(text, OUT key text, OUT value text); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.pgp_armor_headers(text, OUT key text, OUT value text) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.pgp_armor_headers(text, OUT key text, OUT value text) TO dashboard_user;


--
-- Name: FUNCTION pgp_key_id(bytea); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.pgp_key_id(bytea) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.pgp_key_id(bytea) TO dashboard_user;


--
-- Name: FUNCTION pgp_pub_decrypt(bytea, bytea); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.pgp_pub_decrypt(bytea, bytea) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.pgp_pub_decrypt(bytea, bytea) TO dashboard_user;


--
-- Name: FUNCTION pgp_pub_decrypt(bytea, bytea, text); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.pgp_pub_decrypt(bytea, bytea, text) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.pgp_pub_decrypt(bytea, bytea, text) TO dashboard_user;


--
-- Name: FUNCTION pgp_pub_decrypt(bytea, bytea, text, text); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.pgp_pub_decrypt(bytea, bytea, text, text) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.pgp_pub_decrypt(bytea, bytea, text, text) TO dashboard_user;


--
-- Name: FUNCTION pgp_pub_decrypt_bytea(bytea, bytea); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.pgp_pub_decrypt_bytea(bytea, bytea) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.pgp_pub_decrypt_bytea(bytea, bytea) TO dashboard_user;


--
-- Name: FUNCTION pgp_pub_decrypt_bytea(bytea, bytea, text); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.pgp_pub_decrypt_bytea(bytea, bytea, text) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.pgp_pub_decrypt_bytea(bytea, bytea, text) TO dashboard_user;


--
-- Name: FUNCTION pgp_pub_decrypt_bytea(bytea, bytea, text, text); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.pgp_pub_decrypt_bytea(bytea, bytea, text, text) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.pgp_pub_decrypt_bytea(bytea, bytea, text, text) TO dashboard_user;


--
-- Name: FUNCTION pgp_pub_encrypt(text, bytea); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.pgp_pub_encrypt(text, bytea) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.pgp_pub_encrypt(text, bytea) TO dashboard_user;


--
-- Name: FUNCTION pgp_pub_encrypt(text, bytea, text); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.pgp_pub_encrypt(text, bytea, text) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.pgp_pub_encrypt(text, bytea, text) TO dashboard_user;


--
-- Name: FUNCTION pgp_pub_encrypt_bytea(bytea, bytea); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.pgp_pub_encrypt_bytea(bytea, bytea) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.pgp_pub_encrypt_bytea(bytea, bytea) TO dashboard_user;


--
-- Name: FUNCTION pgp_pub_encrypt_bytea(bytea, bytea, text); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.pgp_pub_encrypt_bytea(bytea, bytea, text) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.pgp_pub_encrypt_bytea(bytea, bytea, text) TO dashboard_user;


--
-- Name: FUNCTION pgp_sym_decrypt(bytea, text); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.pgp_sym_decrypt(bytea, text) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.pgp_sym_decrypt(bytea, text) TO dashboard_user;


--
-- Name: FUNCTION pgp_sym_decrypt(bytea, text, text); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.pgp_sym_decrypt(bytea, text, text) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.pgp_sym_decrypt(bytea, text, text) TO dashboard_user;


--
-- Name: FUNCTION pgp_sym_decrypt_bytea(bytea, text); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.pgp_sym_decrypt_bytea(bytea, text) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.pgp_sym_decrypt_bytea(bytea, text) TO dashboard_user;


--
-- Name: FUNCTION pgp_sym_decrypt_bytea(bytea, text, text); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.pgp_sym_decrypt_bytea(bytea, text, text) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.pgp_sym_decrypt_bytea(bytea, text, text) TO dashboard_user;


--
-- Name: FUNCTION pgp_sym_encrypt(text, text); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.pgp_sym_encrypt(text, text) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.pgp_sym_encrypt(text, text) TO dashboard_user;


--
-- Name: FUNCTION pgp_sym_encrypt(text, text, text); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.pgp_sym_encrypt(text, text, text) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.pgp_sym_encrypt(text, text, text) TO dashboard_user;


--
-- Name: FUNCTION pgp_sym_encrypt_bytea(bytea, text); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.pgp_sym_encrypt_bytea(bytea, text) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.pgp_sym_encrypt_bytea(bytea, text) TO dashboard_user;


--
-- Name: FUNCTION pgp_sym_encrypt_bytea(bytea, text, text); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.pgp_sym_encrypt_bytea(bytea, text, text) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.pgp_sym_encrypt_bytea(bytea, text, text) TO dashboard_user;


--
-- Name: FUNCTION pgrst_ddl_watch(); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.pgrst_ddl_watch() TO postgres WITH GRANT OPTION;


--
-- Name: FUNCTION pgrst_drop_watch(); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.pgrst_drop_watch() TO postgres WITH GRANT OPTION;


--
-- Name: FUNCTION set_graphql_placeholder(); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.set_graphql_placeholder() TO postgres WITH GRANT OPTION;


--
-- Name: FUNCTION uuid_generate_v1(); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.uuid_generate_v1() TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.uuid_generate_v1() TO dashboard_user;


--
-- Name: FUNCTION uuid_generate_v1mc(); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.uuid_generate_v1mc() TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.uuid_generate_v1mc() TO dashboard_user;


--
-- Name: FUNCTION uuid_generate_v3(namespace uuid, name text); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.uuid_generate_v3(namespace uuid, name text) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.uuid_generate_v3(namespace uuid, name text) TO dashboard_user;


--
-- Name: FUNCTION uuid_generate_v4(); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.uuid_generate_v4() TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.uuid_generate_v4() TO dashboard_user;


--
-- Name: FUNCTION uuid_generate_v5(namespace uuid, name text); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.uuid_generate_v5(namespace uuid, name text) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.uuid_generate_v5(namespace uuid, name text) TO dashboard_user;


--
-- Name: FUNCTION uuid_nil(); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.uuid_nil() TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.uuid_nil() TO dashboard_user;


--
-- Name: FUNCTION uuid_ns_dns(); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.uuid_ns_dns() TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.uuid_ns_dns() TO dashboard_user;


--
-- Name: FUNCTION uuid_ns_oid(); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.uuid_ns_oid() TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.uuid_ns_oid() TO dashboard_user;


--
-- Name: FUNCTION uuid_ns_url(); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.uuid_ns_url() TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.uuid_ns_url() TO dashboard_user;


--
-- Name: FUNCTION uuid_ns_x500(); Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON FUNCTION extensions.uuid_ns_x500() TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION extensions.uuid_ns_x500() TO dashboard_user;


--
-- Name: FUNCTION graphql("operationName" text, query text, variables jsonb, extensions jsonb); Type: ACL; Schema: graphql_public; Owner: supabase_admin
--

GRANT ALL ON FUNCTION graphql_public.graphql("operationName" text, query text, variables jsonb, extensions jsonb) TO postgres;
GRANT ALL ON FUNCTION graphql_public.graphql("operationName" text, query text, variables jsonb, extensions jsonb) TO anon;
GRANT ALL ON FUNCTION graphql_public.graphql("operationName" text, query text, variables jsonb, extensions jsonb) TO authenticated;
GRANT ALL ON FUNCTION graphql_public.graphql("operationName" text, query text, variables jsonb, extensions jsonb) TO service_role;


--
-- Name: FUNCTION get_auth(p_usename text); Type: ACL; Schema: pgbouncer; Owner: supabase_admin
--

REVOKE ALL ON FUNCTION pgbouncer.get_auth(p_usename text) FROM PUBLIC;
GRANT ALL ON FUNCTION pgbouncer.get_auth(p_usename text) TO pgbouncer;
GRANT ALL ON FUNCTION pgbouncer.get_auth(p_usename text) TO postgres;


--
-- Name: FUNCTION apply_rls(wal jsonb, max_record_bytes integer); Type: ACL; Schema: realtime; Owner: supabase_admin
--

GRANT ALL ON FUNCTION realtime.apply_rls(wal jsonb, max_record_bytes integer) TO postgres;
GRANT ALL ON FUNCTION realtime.apply_rls(wal jsonb, max_record_bytes integer) TO dashboard_user;
GRANT ALL ON FUNCTION realtime.apply_rls(wal jsonb, max_record_bytes integer) TO anon;
GRANT ALL ON FUNCTION realtime.apply_rls(wal jsonb, max_record_bytes integer) TO authenticated;
GRANT ALL ON FUNCTION realtime.apply_rls(wal jsonb, max_record_bytes integer) TO service_role;
GRANT ALL ON FUNCTION realtime.apply_rls(wal jsonb, max_record_bytes integer) TO supabase_realtime_admin;


--
-- Name: FUNCTION broadcast_changes(topic_name text, event_name text, operation text, table_name text, table_schema text, new record, old record, level text); Type: ACL; Schema: realtime; Owner: supabase_admin
--

GRANT ALL ON FUNCTION realtime.broadcast_changes(topic_name text, event_name text, operation text, table_name text, table_schema text, new record, old record, level text) TO postgres;
GRANT ALL ON FUNCTION realtime.broadcast_changes(topic_name text, event_name text, operation text, table_name text, table_schema text, new record, old record, level text) TO dashboard_user;


--
-- Name: FUNCTION build_prepared_statement_sql(prepared_statement_name text, entity regclass, columns realtime.wal_column[]); Type: ACL; Schema: realtime; Owner: supabase_admin
--

GRANT ALL ON FUNCTION realtime.build_prepared_statement_sql(prepared_statement_name text, entity regclass, columns realtime.wal_column[]) TO postgres;
GRANT ALL ON FUNCTION realtime.build_prepared_statement_sql(prepared_statement_name text, entity regclass, columns realtime.wal_column[]) TO dashboard_user;
GRANT ALL ON FUNCTION realtime.build_prepared_statement_sql(prepared_statement_name text, entity regclass, columns realtime.wal_column[]) TO anon;
GRANT ALL ON FUNCTION realtime.build_prepared_statement_sql(prepared_statement_name text, entity regclass, columns realtime.wal_column[]) TO authenticated;
GRANT ALL ON FUNCTION realtime.build_prepared_statement_sql(prepared_statement_name text, entity regclass, columns realtime.wal_column[]) TO service_role;
GRANT ALL ON FUNCTION realtime.build_prepared_statement_sql(prepared_statement_name text, entity regclass, columns realtime.wal_column[]) TO supabase_realtime_admin;


--
-- Name: FUNCTION "cast"(val text, type_ regtype); Type: ACL; Schema: realtime; Owner: supabase_admin
--

GRANT ALL ON FUNCTION realtime."cast"(val text, type_ regtype) TO postgres;
GRANT ALL ON FUNCTION realtime."cast"(val text, type_ regtype) TO dashboard_user;
GRANT ALL ON FUNCTION realtime."cast"(val text, type_ regtype) TO anon;
GRANT ALL ON FUNCTION realtime."cast"(val text, type_ regtype) TO authenticated;
GRANT ALL ON FUNCTION realtime."cast"(val text, type_ regtype) TO service_role;
GRANT ALL ON FUNCTION realtime."cast"(val text, type_ regtype) TO supabase_realtime_admin;


--
-- Name: FUNCTION check_equality_op(op realtime.equality_op, type_ regtype, val_1 text, val_2 text); Type: ACL; Schema: realtime; Owner: supabase_admin
--

GRANT ALL ON FUNCTION realtime.check_equality_op(op realtime.equality_op, type_ regtype, val_1 text, val_2 text) TO postgres;
GRANT ALL ON FUNCTION realtime.check_equality_op(op realtime.equality_op, type_ regtype, val_1 text, val_2 text) TO dashboard_user;
GRANT ALL ON FUNCTION realtime.check_equality_op(op realtime.equality_op, type_ regtype, val_1 text, val_2 text) TO anon;
GRANT ALL ON FUNCTION realtime.check_equality_op(op realtime.equality_op, type_ regtype, val_1 text, val_2 text) TO authenticated;
GRANT ALL ON FUNCTION realtime.check_equality_op(op realtime.equality_op, type_ regtype, val_1 text, val_2 text) TO service_role;
GRANT ALL ON FUNCTION realtime.check_equality_op(op realtime.equality_op, type_ regtype, val_1 text, val_2 text) TO supabase_realtime_admin;


--
-- Name: FUNCTION is_visible_through_filters(columns realtime.wal_column[], filters realtime.user_defined_filter[]); Type: ACL; Schema: realtime; Owner: supabase_admin
--

GRANT ALL ON FUNCTION realtime.is_visible_through_filters(columns realtime.wal_column[], filters realtime.user_defined_filter[]) TO postgres;
GRANT ALL ON FUNCTION realtime.is_visible_through_filters(columns realtime.wal_column[], filters realtime.user_defined_filter[]) TO dashboard_user;
GRANT ALL ON FUNCTION realtime.is_visible_through_filters(columns realtime.wal_column[], filters realtime.user_defined_filter[]) TO anon;
GRANT ALL ON FUNCTION realtime.is_visible_through_filters(columns realtime.wal_column[], filters realtime.user_defined_filter[]) TO authenticated;
GRANT ALL ON FUNCTION realtime.is_visible_through_filters(columns realtime.wal_column[], filters realtime.user_defined_filter[]) TO service_role;
GRANT ALL ON FUNCTION realtime.is_visible_through_filters(columns realtime.wal_column[], filters realtime.user_defined_filter[]) TO supabase_realtime_admin;


--
-- Name: FUNCTION list_changes(publication name, slot_name name, max_changes integer, max_record_bytes integer); Type: ACL; Schema: realtime; Owner: supabase_admin
--

GRANT ALL ON FUNCTION realtime.list_changes(publication name, slot_name name, max_changes integer, max_record_bytes integer) TO postgres;
GRANT ALL ON FUNCTION realtime.list_changes(publication name, slot_name name, max_changes integer, max_record_bytes integer) TO dashboard_user;
GRANT ALL ON FUNCTION realtime.list_changes(publication name, slot_name name, max_changes integer, max_record_bytes integer) TO anon;
GRANT ALL ON FUNCTION realtime.list_changes(publication name, slot_name name, max_changes integer, max_record_bytes integer) TO authenticated;
GRANT ALL ON FUNCTION realtime.list_changes(publication name, slot_name name, max_changes integer, max_record_bytes integer) TO service_role;
GRANT ALL ON FUNCTION realtime.list_changes(publication name, slot_name name, max_changes integer, max_record_bytes integer) TO supabase_realtime_admin;


--
-- Name: FUNCTION quote_wal2json(entity regclass); Type: ACL; Schema: realtime; Owner: supabase_admin
--

GRANT ALL ON FUNCTION realtime.quote_wal2json(entity regclass) TO postgres;
GRANT ALL ON FUNCTION realtime.quote_wal2json(entity regclass) TO dashboard_user;
GRANT ALL ON FUNCTION realtime.quote_wal2json(entity regclass) TO anon;
GRANT ALL ON FUNCTION realtime.quote_wal2json(entity regclass) TO authenticated;
GRANT ALL ON FUNCTION realtime.quote_wal2json(entity regclass) TO service_role;
GRANT ALL ON FUNCTION realtime.quote_wal2json(entity regclass) TO supabase_realtime_admin;


--
-- Name: FUNCTION send(payload jsonb, event text, topic text, private boolean); Type: ACL; Schema: realtime; Owner: supabase_admin
--

GRANT ALL ON FUNCTION realtime.send(payload jsonb, event text, topic text, private boolean) TO postgres;
GRANT ALL ON FUNCTION realtime.send(payload jsonb, event text, topic text, private boolean) TO dashboard_user;


--
-- Name: FUNCTION subscription_check_filters(); Type: ACL; Schema: realtime; Owner: supabase_admin
--

GRANT ALL ON FUNCTION realtime.subscription_check_filters() TO postgres;
GRANT ALL ON FUNCTION realtime.subscription_check_filters() TO dashboard_user;
GRANT ALL ON FUNCTION realtime.subscription_check_filters() TO anon;
GRANT ALL ON FUNCTION realtime.subscription_check_filters() TO authenticated;
GRANT ALL ON FUNCTION realtime.subscription_check_filters() TO service_role;
GRANT ALL ON FUNCTION realtime.subscription_check_filters() TO supabase_realtime_admin;


--
-- Name: FUNCTION to_regrole(role_name text); Type: ACL; Schema: realtime; Owner: supabase_admin
--

GRANT ALL ON FUNCTION realtime.to_regrole(role_name text) TO postgres;
GRANT ALL ON FUNCTION realtime.to_regrole(role_name text) TO dashboard_user;
GRANT ALL ON FUNCTION realtime.to_regrole(role_name text) TO anon;
GRANT ALL ON FUNCTION realtime.to_regrole(role_name text) TO authenticated;
GRANT ALL ON FUNCTION realtime.to_regrole(role_name text) TO service_role;
GRANT ALL ON FUNCTION realtime.to_regrole(role_name text) TO supabase_realtime_admin;


--
-- Name: FUNCTION topic(); Type: ACL; Schema: realtime; Owner: supabase_realtime_admin
--

GRANT ALL ON FUNCTION realtime.topic() TO postgres;
GRANT ALL ON FUNCTION realtime.topic() TO dashboard_user;


--
-- Name: FUNCTION can_insert_object(bucketid text, name text, owner uuid, metadata jsonb); Type: ACL; Schema: storage; Owner: supabase_storage_admin
--

GRANT ALL ON FUNCTION storage.can_insert_object(bucketid text, name text, owner uuid, metadata jsonb) TO postgres;


--
-- Name: FUNCTION extension(name text); Type: ACL; Schema: storage; Owner: supabase_storage_admin
--

GRANT ALL ON FUNCTION storage.extension(name text) TO postgres;


--
-- Name: FUNCTION filename(name text); Type: ACL; Schema: storage; Owner: supabase_storage_admin
--

GRANT ALL ON FUNCTION storage.filename(name text) TO postgres;


--
-- Name: FUNCTION foldername(name text); Type: ACL; Schema: storage; Owner: supabase_storage_admin
--

GRANT ALL ON FUNCTION storage.foldername(name text) TO postgres;


--
-- Name: FUNCTION get_size_by_bucket(); Type: ACL; Schema: storage; Owner: supabase_storage_admin
--

GRANT ALL ON FUNCTION storage.get_size_by_bucket() TO postgres;


--
-- Name: FUNCTION list_multipart_uploads_with_delimiter(bucket_id text, prefix_param text, delimiter_param text, max_keys integer, next_key_token text, next_upload_token text); Type: ACL; Schema: storage; Owner: supabase_storage_admin
--

GRANT ALL ON FUNCTION storage.list_multipart_uploads_with_delimiter(bucket_id text, prefix_param text, delimiter_param text, max_keys integer, next_key_token text, next_upload_token text) TO postgres;


--
-- Name: FUNCTION list_objects_with_delimiter(bucket_id text, prefix_param text, delimiter_param text, max_keys integer, start_after text, next_token text); Type: ACL; Schema: storage; Owner: supabase_storage_admin
--

GRANT ALL ON FUNCTION storage.list_objects_with_delimiter(bucket_id text, prefix_param text, delimiter_param text, max_keys integer, start_after text, next_token text) TO postgres;


--
-- Name: FUNCTION operation(); Type: ACL; Schema: storage; Owner: supabase_storage_admin
--

GRANT ALL ON FUNCTION storage.operation() TO postgres;


--
-- Name: FUNCTION search(prefix text, bucketname text, limits integer, levels integer, offsets integer, search text, sortcolumn text, sortorder text); Type: ACL; Schema: storage; Owner: supabase_storage_admin
--

GRANT ALL ON FUNCTION storage.search(prefix text, bucketname text, limits integer, levels integer, offsets integer, search text, sortcolumn text, sortorder text) TO postgres;


--
-- Name: FUNCTION update_updated_at_column(); Type: ACL; Schema: storage; Owner: supabase_storage_admin
--

GRANT ALL ON FUNCTION storage.update_updated_at_column() TO postgres;


--
-- Name: FUNCTION _crypto_aead_det_decrypt(message bytea, additional bytea, key_id bigint, context bytea, nonce bytea); Type: ACL; Schema: vault; Owner: supabase_admin
--

GRANT ALL ON FUNCTION vault._crypto_aead_det_decrypt(message bytea, additional bytea, key_id bigint, context bytea, nonce bytea) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION vault._crypto_aead_det_decrypt(message bytea, additional bytea, key_id bigint, context bytea, nonce bytea) TO service_role;


--
-- Name: FUNCTION create_secret(new_secret text, new_name text, new_description text, new_key_id uuid); Type: ACL; Schema: vault; Owner: supabase_admin
--

GRANT ALL ON FUNCTION vault.create_secret(new_secret text, new_name text, new_description text, new_key_id uuid) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION vault.create_secret(new_secret text, new_name text, new_description text, new_key_id uuid) TO service_role;


--
-- Name: FUNCTION update_secret(secret_id uuid, new_secret text, new_name text, new_description text, new_key_id uuid); Type: ACL; Schema: vault; Owner: supabase_admin
--

GRANT ALL ON FUNCTION vault.update_secret(secret_id uuid, new_secret text, new_name text, new_description text, new_key_id uuid) TO postgres WITH GRANT OPTION;
GRANT ALL ON FUNCTION vault.update_secret(secret_id uuid, new_secret text, new_name text, new_description text, new_key_id uuid) TO service_role;


--
-- Name: TABLE audit_log_entries; Type: ACL; Schema: auth; Owner: supabase_auth_admin
--

GRANT ALL ON TABLE auth.audit_log_entries TO dashboard_user;
GRANT INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,MAINTAIN,UPDATE ON TABLE auth.audit_log_entries TO postgres;
GRANT SELECT ON TABLE auth.audit_log_entries TO postgres WITH GRANT OPTION;


--
-- Name: TABLE flow_state; Type: ACL; Schema: auth; Owner: supabase_auth_admin
--

GRANT INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,MAINTAIN,UPDATE ON TABLE auth.flow_state TO postgres;
GRANT SELECT ON TABLE auth.flow_state TO postgres WITH GRANT OPTION;
GRANT ALL ON TABLE auth.flow_state TO dashboard_user;


--
-- Name: TABLE identities; Type: ACL; Schema: auth; Owner: supabase_auth_admin
--

GRANT INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,MAINTAIN,UPDATE ON TABLE auth.identities TO postgres;
GRANT SELECT ON TABLE auth.identities TO postgres WITH GRANT OPTION;
GRANT ALL ON TABLE auth.identities TO dashboard_user;


--
-- Name: TABLE instances; Type: ACL; Schema: auth; Owner: supabase_auth_admin
--

GRANT ALL ON TABLE auth.instances TO dashboard_user;
GRANT INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,MAINTAIN,UPDATE ON TABLE auth.instances TO postgres;
GRANT SELECT ON TABLE auth.instances TO postgres WITH GRANT OPTION;


--
-- Name: TABLE mfa_amr_claims; Type: ACL; Schema: auth; Owner: supabase_auth_admin
--

GRANT INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,MAINTAIN,UPDATE ON TABLE auth.mfa_amr_claims TO postgres;
GRANT SELECT ON TABLE auth.mfa_amr_claims TO postgres WITH GRANT OPTION;
GRANT ALL ON TABLE auth.mfa_amr_claims TO dashboard_user;


--
-- Name: TABLE mfa_challenges; Type: ACL; Schema: auth; Owner: supabase_auth_admin
--

GRANT INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,MAINTAIN,UPDATE ON TABLE auth.mfa_challenges TO postgres;
GRANT SELECT ON TABLE auth.mfa_challenges TO postgres WITH GRANT OPTION;
GRANT ALL ON TABLE auth.mfa_challenges TO dashboard_user;


--
-- Name: TABLE mfa_factors; Type: ACL; Schema: auth; Owner: supabase_auth_admin
--

GRANT INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,MAINTAIN,UPDATE ON TABLE auth.mfa_factors TO postgres;
GRANT SELECT ON TABLE auth.mfa_factors TO postgres WITH GRANT OPTION;
GRANT ALL ON TABLE auth.mfa_factors TO dashboard_user;


--
-- Name: TABLE one_time_tokens; Type: ACL; Schema: auth; Owner: supabase_auth_admin
--

GRANT INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,MAINTAIN,UPDATE ON TABLE auth.one_time_tokens TO postgres;
GRANT SELECT ON TABLE auth.one_time_tokens TO postgres WITH GRANT OPTION;
GRANT ALL ON TABLE auth.one_time_tokens TO dashboard_user;


--
-- Name: TABLE refresh_tokens; Type: ACL; Schema: auth; Owner: supabase_auth_admin
--

GRANT ALL ON TABLE auth.refresh_tokens TO dashboard_user;
GRANT INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,MAINTAIN,UPDATE ON TABLE auth.refresh_tokens TO postgres;
GRANT SELECT ON TABLE auth.refresh_tokens TO postgres WITH GRANT OPTION;


--
-- Name: SEQUENCE refresh_tokens_id_seq; Type: ACL; Schema: auth; Owner: supabase_auth_admin
--

GRANT ALL ON SEQUENCE auth.refresh_tokens_id_seq TO dashboard_user;
GRANT ALL ON SEQUENCE auth.refresh_tokens_id_seq TO postgres;


--
-- Name: TABLE saml_providers; Type: ACL; Schema: auth; Owner: supabase_auth_admin
--

GRANT INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,MAINTAIN,UPDATE ON TABLE auth.saml_providers TO postgres;
GRANT SELECT ON TABLE auth.saml_providers TO postgres WITH GRANT OPTION;
GRANT ALL ON TABLE auth.saml_providers TO dashboard_user;


--
-- Name: TABLE saml_relay_states; Type: ACL; Schema: auth; Owner: supabase_auth_admin
--

GRANT INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,MAINTAIN,UPDATE ON TABLE auth.saml_relay_states TO postgres;
GRANT SELECT ON TABLE auth.saml_relay_states TO postgres WITH GRANT OPTION;
GRANT ALL ON TABLE auth.saml_relay_states TO dashboard_user;


--
-- Name: TABLE sessions; Type: ACL; Schema: auth; Owner: supabase_auth_admin
--

GRANT INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,MAINTAIN,UPDATE ON TABLE auth.sessions TO postgres;
GRANT SELECT ON TABLE auth.sessions TO postgres WITH GRANT OPTION;
GRANT ALL ON TABLE auth.sessions TO dashboard_user;


--
-- Name: TABLE sso_domains; Type: ACL; Schema: auth; Owner: supabase_auth_admin
--

GRANT INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,MAINTAIN,UPDATE ON TABLE auth.sso_domains TO postgres;
GRANT SELECT ON TABLE auth.sso_domains TO postgres WITH GRANT OPTION;
GRANT ALL ON TABLE auth.sso_domains TO dashboard_user;


--
-- Name: TABLE sso_providers; Type: ACL; Schema: auth; Owner: supabase_auth_admin
--

GRANT INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,MAINTAIN,UPDATE ON TABLE auth.sso_providers TO postgres;
GRANT SELECT ON TABLE auth.sso_providers TO postgres WITH GRANT OPTION;
GRANT ALL ON TABLE auth.sso_providers TO dashboard_user;


--
-- Name: TABLE users; Type: ACL; Schema: auth; Owner: supabase_auth_admin
--

GRANT ALL ON TABLE auth.users TO dashboard_user;
GRANT INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,MAINTAIN,UPDATE ON TABLE auth.users TO postgres;
GRANT SELECT ON TABLE auth.users TO postgres WITH GRANT OPTION;


--
-- Name: TABLE pg_stat_statements; Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON TABLE extensions.pg_stat_statements TO postgres WITH GRANT OPTION;
GRANT ALL ON TABLE extensions.pg_stat_statements TO dashboard_user;


--
-- Name: TABLE pg_stat_statements_info; Type: ACL; Schema: extensions; Owner: supabase_admin
--

GRANT ALL ON TABLE extensions.pg_stat_statements_info TO postgres WITH GRANT OPTION;
GRANT ALL ON TABLE extensions.pg_stat_statements_info TO dashboard_user;


--
-- Name: TABLE attendance; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.attendance TO anon;
GRANT ALL ON TABLE public.attendance TO authenticated;
GRANT ALL ON TABLE public.attendance TO service_role;


--
-- Name: SEQUENCE attendance_attendance_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.attendance_attendance_id_seq TO anon;
GRANT ALL ON SEQUENCE public.attendance_attendance_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.attendance_attendance_id_seq TO service_role;


--
-- Name: TABLE classes_schedule; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.classes_schedule TO anon;
GRANT ALL ON TABLE public.classes_schedule TO authenticated;
GRANT ALL ON TABLE public.classes_schedule TO service_role;


--
-- Name: SEQUENCE classes_schedule_schedule_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.classes_schedule_schedule_id_seq TO anon;
GRANT ALL ON SEQUENCE public.classes_schedule_schedule_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.classes_schedule_schedule_id_seq TO service_role;


--
-- Name: TABLE notice; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.notice TO anon;
GRANT ALL ON TABLE public.notice TO authenticated;
GRANT ALL ON TABLE public.notice TO service_role;


--
-- Name: SEQUENCE notice_notice_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.notice_notice_id_seq TO anon;
GRANT ALL ON SEQUENCE public.notice_notice_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.notice_notice_id_seq TO service_role;


--
-- Name: TABLE results; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.results TO anon;
GRANT ALL ON TABLE public.results TO authenticated;
GRANT ALL ON TABLE public.results TO service_role;


--
-- Name: SEQUENCE results_result_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.results_result_id_seq TO anon;
GRANT ALL ON SEQUENCE public.results_result_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.results_result_id_seq TO service_role;


--
-- Name: TABLE staff_subjects; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.staff_subjects TO anon;
GRANT ALL ON TABLE public.staff_subjects TO authenticated;
GRANT ALL ON TABLE public.staff_subjects TO service_role;


--
-- Name: SEQUENCE staff_subjects_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.staff_subjects_id_seq TO anon;
GRANT ALL ON SEQUENCE public.staff_subjects_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.staff_subjects_id_seq TO service_role;


--
-- Name: TABLE subjects; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.subjects TO anon;
GRANT ALL ON TABLE public.subjects TO authenticated;
GRANT ALL ON TABLE public.subjects TO service_role;


--
-- Name: SEQUENCE subjects_subject_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.subjects_subject_id_seq TO anon;
GRANT ALL ON SEQUENCE public.subjects_subject_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.subjects_subject_id_seq TO service_role;


--
-- Name: TABLE users; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.users TO anon;
GRANT ALL ON TABLE public.users TO authenticated;
GRANT ALL ON TABLE public.users TO service_role;


--
-- Name: SEQUENCE users_user_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.users_user_id_seq TO anon;
GRANT ALL ON SEQUENCE public.users_user_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.users_user_id_seq TO service_role;


--
-- Name: TABLE messages; Type: ACL; Schema: realtime; Owner: supabase_realtime_admin
--

GRANT ALL ON TABLE realtime.messages TO postgres;
GRANT ALL ON TABLE realtime.messages TO dashboard_user;
GRANT SELECT,INSERT,UPDATE ON TABLE realtime.messages TO anon;
GRANT SELECT,INSERT,UPDATE ON TABLE realtime.messages TO authenticated;
GRANT SELECT,INSERT,UPDATE ON TABLE realtime.messages TO service_role;


--
-- Name: TABLE schema_migrations; Type: ACL; Schema: realtime; Owner: supabase_admin
--

GRANT ALL ON TABLE realtime.schema_migrations TO postgres;
GRANT ALL ON TABLE realtime.schema_migrations TO dashboard_user;
GRANT SELECT ON TABLE realtime.schema_migrations TO anon;
GRANT SELECT ON TABLE realtime.schema_migrations TO authenticated;
GRANT SELECT ON TABLE realtime.schema_migrations TO service_role;
GRANT ALL ON TABLE realtime.schema_migrations TO supabase_realtime_admin;


--
-- Name: TABLE subscription; Type: ACL; Schema: realtime; Owner: supabase_admin
--

GRANT ALL ON TABLE realtime.subscription TO postgres;
GRANT ALL ON TABLE realtime.subscription TO dashboard_user;
GRANT SELECT ON TABLE realtime.subscription TO anon;
GRANT SELECT ON TABLE realtime.subscription TO authenticated;
GRANT SELECT ON TABLE realtime.subscription TO service_role;
GRANT ALL ON TABLE realtime.subscription TO supabase_realtime_admin;


--
-- Name: SEQUENCE subscription_id_seq; Type: ACL; Schema: realtime; Owner: supabase_admin
--

GRANT ALL ON SEQUENCE realtime.subscription_id_seq TO postgres;
GRANT ALL ON SEQUENCE realtime.subscription_id_seq TO dashboard_user;
GRANT USAGE ON SEQUENCE realtime.subscription_id_seq TO anon;
GRANT USAGE ON SEQUENCE realtime.subscription_id_seq TO authenticated;
GRANT USAGE ON SEQUENCE realtime.subscription_id_seq TO service_role;
GRANT ALL ON SEQUENCE realtime.subscription_id_seq TO supabase_realtime_admin;


--
-- Name: TABLE buckets; Type: ACL; Schema: storage; Owner: supabase_storage_admin
--

GRANT ALL ON TABLE storage.buckets TO anon;
GRANT ALL ON TABLE storage.buckets TO authenticated;
GRANT ALL ON TABLE storage.buckets TO service_role;
GRANT ALL ON TABLE storage.buckets TO postgres WITH GRANT OPTION;


--
-- Name: TABLE objects; Type: ACL; Schema: storage; Owner: supabase_storage_admin
--

GRANT ALL ON TABLE storage.objects TO anon;
GRANT ALL ON TABLE storage.objects TO authenticated;
GRANT ALL ON TABLE storage.objects TO service_role;
GRANT ALL ON TABLE storage.objects TO postgres WITH GRANT OPTION;


--
-- Name: TABLE s3_multipart_uploads; Type: ACL; Schema: storage; Owner: supabase_storage_admin
--

GRANT ALL ON TABLE storage.s3_multipart_uploads TO service_role;
GRANT SELECT ON TABLE storage.s3_multipart_uploads TO authenticated;
GRANT SELECT ON TABLE storage.s3_multipart_uploads TO anon;
GRANT ALL ON TABLE storage.s3_multipart_uploads TO postgres;


--
-- Name: TABLE s3_multipart_uploads_parts; Type: ACL; Schema: storage; Owner: supabase_storage_admin
--

GRANT ALL ON TABLE storage.s3_multipart_uploads_parts TO service_role;
GRANT SELECT ON TABLE storage.s3_multipart_uploads_parts TO authenticated;
GRANT SELECT ON TABLE storage.s3_multipart_uploads_parts TO anon;
GRANT ALL ON TABLE storage.s3_multipart_uploads_parts TO postgres;


--
-- Name: TABLE secrets; Type: ACL; Schema: vault; Owner: supabase_admin
--

GRANT SELECT,REFERENCES,DELETE,TRUNCATE ON TABLE vault.secrets TO postgres WITH GRANT OPTION;
GRANT SELECT,DELETE ON TABLE vault.secrets TO service_role;


--
-- Name: TABLE decrypted_secrets; Type: ACL; Schema: vault; Owner: supabase_admin
--

GRANT SELECT,REFERENCES,DELETE,TRUNCATE ON TABLE vault.decrypted_secrets TO postgres WITH GRANT OPTION;
GRANT SELECT,DELETE ON TABLE vault.decrypted_secrets TO service_role;


--
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: auth; Owner: supabase_auth_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE supabase_auth_admin IN SCHEMA auth GRANT ALL ON SEQUENCES TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_auth_admin IN SCHEMA auth GRANT ALL ON SEQUENCES TO dashboard_user;


--
-- Name: DEFAULT PRIVILEGES FOR FUNCTIONS; Type: DEFAULT ACL; Schema: auth; Owner: supabase_auth_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE supabase_auth_admin IN SCHEMA auth GRANT ALL ON FUNCTIONS TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_auth_admin IN SCHEMA auth GRANT ALL ON FUNCTIONS TO dashboard_user;


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: auth; Owner: supabase_auth_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE supabase_auth_admin IN SCHEMA auth GRANT ALL ON TABLES TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_auth_admin IN SCHEMA auth GRANT ALL ON TABLES TO dashboard_user;


--
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: extensions; Owner: supabase_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA extensions GRANT ALL ON SEQUENCES TO postgres WITH GRANT OPTION;


--
-- Name: DEFAULT PRIVILEGES FOR FUNCTIONS; Type: DEFAULT ACL; Schema: extensions; Owner: supabase_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA extensions GRANT ALL ON FUNCTIONS TO postgres WITH GRANT OPTION;


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: extensions; Owner: supabase_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA extensions GRANT ALL ON TABLES TO postgres WITH GRANT OPTION;


--
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: graphql; Owner: supabase_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA graphql GRANT ALL ON SEQUENCES TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA graphql GRANT ALL ON SEQUENCES TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA graphql GRANT ALL ON SEQUENCES TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA graphql GRANT ALL ON SEQUENCES TO service_role;


--
-- Name: DEFAULT PRIVILEGES FOR FUNCTIONS; Type: DEFAULT ACL; Schema: graphql; Owner: supabase_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA graphql GRANT ALL ON FUNCTIONS TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA graphql GRANT ALL ON FUNCTIONS TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA graphql GRANT ALL ON FUNCTIONS TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA graphql GRANT ALL ON FUNCTIONS TO service_role;


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: graphql; Owner: supabase_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA graphql GRANT ALL ON TABLES TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA graphql GRANT ALL ON TABLES TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA graphql GRANT ALL ON TABLES TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA graphql GRANT ALL ON TABLES TO service_role;


--
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: graphql_public; Owner: supabase_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA graphql_public GRANT ALL ON SEQUENCES TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA graphql_public GRANT ALL ON SEQUENCES TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA graphql_public GRANT ALL ON SEQUENCES TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA graphql_public GRANT ALL ON SEQUENCES TO service_role;


--
-- Name: DEFAULT PRIVILEGES FOR FUNCTIONS; Type: DEFAULT ACL; Schema: graphql_public; Owner: supabase_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA graphql_public GRANT ALL ON FUNCTIONS TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA graphql_public GRANT ALL ON FUNCTIONS TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA graphql_public GRANT ALL ON FUNCTIONS TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA graphql_public GRANT ALL ON FUNCTIONS TO service_role;


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: graphql_public; Owner: supabase_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA graphql_public GRANT ALL ON TABLES TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA graphql_public GRANT ALL ON TABLES TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA graphql_public GRANT ALL ON TABLES TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA graphql_public GRANT ALL ON TABLES TO service_role;


--
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: public; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON SEQUENCES TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON SEQUENCES TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON SEQUENCES TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON SEQUENCES TO service_role;


--
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: public; Owner: supabase_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON SEQUENCES TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON SEQUENCES TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON SEQUENCES TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON SEQUENCES TO service_role;


--
-- Name: DEFAULT PRIVILEGES FOR FUNCTIONS; Type: DEFAULT ACL; Schema: public; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON FUNCTIONS TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON FUNCTIONS TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON FUNCTIONS TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON FUNCTIONS TO service_role;


--
-- Name: DEFAULT PRIVILEGES FOR FUNCTIONS; Type: DEFAULT ACL; Schema: public; Owner: supabase_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON FUNCTIONS TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON FUNCTIONS TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON FUNCTIONS TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON FUNCTIONS TO service_role;


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: public; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON TABLES TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON TABLES TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON TABLES TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON TABLES TO service_role;


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: public; Owner: supabase_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON TABLES TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON TABLES TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON TABLES TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON TABLES TO service_role;


--
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: realtime; Owner: supabase_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA realtime GRANT ALL ON SEQUENCES TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA realtime GRANT ALL ON SEQUENCES TO dashboard_user;


--
-- Name: DEFAULT PRIVILEGES FOR FUNCTIONS; Type: DEFAULT ACL; Schema: realtime; Owner: supabase_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA realtime GRANT ALL ON FUNCTIONS TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA realtime GRANT ALL ON FUNCTIONS TO dashboard_user;


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: realtime; Owner: supabase_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA realtime GRANT ALL ON TABLES TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA realtime GRANT ALL ON TABLES TO dashboard_user;


--
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: storage; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA storage GRANT ALL ON SEQUENCES TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA storage GRANT ALL ON SEQUENCES TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA storage GRANT ALL ON SEQUENCES TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA storage GRANT ALL ON SEQUENCES TO service_role;


--
-- Name: DEFAULT PRIVILEGES FOR FUNCTIONS; Type: DEFAULT ACL; Schema: storage; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA storage GRANT ALL ON FUNCTIONS TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA storage GRANT ALL ON FUNCTIONS TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA storage GRANT ALL ON FUNCTIONS TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA storage GRANT ALL ON FUNCTIONS TO service_role;


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: storage; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA storage GRANT ALL ON TABLES TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA storage GRANT ALL ON TABLES TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA storage GRANT ALL ON TABLES TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA storage GRANT ALL ON TABLES TO service_role;


--
-- Name: issue_graphql_placeholder; Type: EVENT TRIGGER; Schema: -; Owner: supabase_admin
--

CREATE EVENT TRIGGER issue_graphql_placeholder ON sql_drop
         WHEN TAG IN ('DROP EXTENSION')
   EXECUTE FUNCTION extensions.set_graphql_placeholder();


ALTER EVENT TRIGGER issue_graphql_placeholder OWNER TO supabase_admin;

--
-- Name: issue_pg_cron_access; Type: EVENT TRIGGER; Schema: -; Owner: supabase_admin
--

CREATE EVENT TRIGGER issue_pg_cron_access ON ddl_command_end
         WHEN TAG IN ('CREATE EXTENSION')
   EXECUTE FUNCTION extensions.grant_pg_cron_access();


ALTER EVENT TRIGGER issue_pg_cron_access OWNER TO supabase_admin;

--
-- Name: issue_pg_graphql_access; Type: EVENT TRIGGER; Schema: -; Owner: supabase_admin
--

CREATE EVENT TRIGGER issue_pg_graphql_access ON ddl_command_end
         WHEN TAG IN ('CREATE FUNCTION')
   EXECUTE FUNCTION extensions.grant_pg_graphql_access();


ALTER EVENT TRIGGER issue_pg_graphql_access OWNER TO supabase_admin;

--
-- Name: issue_pg_net_access; Type: EVENT TRIGGER; Schema: -; Owner: supabase_admin
--

CREATE EVENT TRIGGER issue_pg_net_access ON ddl_command_end
         WHEN TAG IN ('CREATE EXTENSION')
   EXECUTE FUNCTION extensions.grant_pg_net_access();


ALTER EVENT TRIGGER issue_pg_net_access OWNER TO supabase_admin;

--
-- Name: pgrst_ddl_watch; Type: EVENT TRIGGER; Schema: -; Owner: supabase_admin
--

CREATE EVENT TRIGGER pgrst_ddl_watch ON ddl_command_end
   EXECUTE FUNCTION extensions.pgrst_ddl_watch();


ALTER EVENT TRIGGER pgrst_ddl_watch OWNER TO supabase_admin;

--
-- Name: pgrst_drop_watch; Type: EVENT TRIGGER; Schema: -; Owner: supabase_admin
--

CREATE EVENT TRIGGER pgrst_drop_watch ON sql_drop
   EXECUTE FUNCTION extensions.pgrst_drop_watch();


ALTER EVENT TRIGGER pgrst_drop_watch OWNER TO supabase_admin;

--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database cluster dump complete
--

