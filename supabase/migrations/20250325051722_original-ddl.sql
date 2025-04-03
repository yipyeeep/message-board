CREATE TABLE IF NOT EXISTS user_profiles (
    user_id uuid PRIMARY KEY REFERENCES auth.users (id) NOT NULL,
    username TEXT UNIQUE NOT NULL

    CONSTRAINT proper_username CHECK (username ~* '^[a-zA-Z0-9_]+$')
    CONSTRAINT username_length CHECK (char_length(username) > 3 and char_length(username) < 15)
);

alter table <user_profiles> enable row level security;