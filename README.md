# split


# about CI and env var

__GCR_JSON_KEY_FILE__ should be the json file, containing only the private key and the email is ok. strip space and line break. Inside the private key, leave the line break without escaping.
```
{"email":"xxx@xxx.com","private_key":"-----BEGIN PRIVATE KEY-----\nxxxxxxxx\nxxxxxx\n-----END PRIVATE KEY-----\n"}
```
