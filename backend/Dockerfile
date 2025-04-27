FROM rust:1.84.1

WORKDIR /usr/src/myapp
COPY . .

RUN cargo build --release

ENV PORT 8000

ENTRYPOINT ["./target/release/daily-report"]