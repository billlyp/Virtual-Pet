CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS petDatabase (
    id   uuid      DEFAULT uuid_generate_v4() PRIMARY KEY,
    pet json
);
