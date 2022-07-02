
create table category (
    category_id serial primary key,
    category_name text not null
);

create table authors (
    author_id serial primary key,
    author_fName text not null,
    author_lName text not null,
    author_img text not null
);


create table books(
    book_id serial primary key,
    book_title text not null,
    book_price text not null,
    book_img text not null, 
    book_description text not null,
    book_created_at timestamptz DEFAULT CURRENT_TIMESTAMP,
    book_category serial,
    book_author serial,
    FOREIGN KEY (book_category)
		REFERENCES category (category_id)
		ON DELETE SET NULL,
    FOREIGN KEY (book_author)
		REFERENCES authors (author_id)
		ON DELETE SET NULL
    
);



create table users (
    user_id serial primary key,
    user_fName text not null,
    user_lName text not null,
    user_phone numeric(15) not null,
    user_adress text not null,
    user_email text not null,
    user_book serial,
    FOREIGN KEY (user_book)
		REFERENCES books (book_id)
		ON DELETE SET NULL
);