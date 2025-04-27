FROM rust:1.84.1

WORKDIR /usr/src/myapp
COPY . .

RUN cargo install --path .

ENV PORT 8000

# Run the web service on container startup.
ENTRYPOINT ["target/release/daily-report"]