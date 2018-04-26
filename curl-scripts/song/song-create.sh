#!/bin/bash

curl --include --request POST "http://localhost:4741/songs/" \
--header "Content-Type: application/json" \
--header "Authorization: Token token=${TOKEN}" \
--data '{
  "song": {
    "title": "'"${TITLE}"'",
    "artist": "'"${ARTIST}"'",
    "mood": "'"${MOOD}"'",
  }
}'

echo
