# Introduction

Retrieved the http_ca.crt using the the browser to https://localhost:9200, ignoring the security
warning and storing the PEM certificate in the file.

Created an API key manually, configuring it to have the correct security privileges:
```json
{
  "earthquakes_example_writer": {
    "cluster": [
      "monitor"
    ],
    "indices": [
      {
        "names": [
          "earthquakes"
        ],
        "privileges": [
          "write",
          "create_index",
          "read",
          "manage"
        ],
        "allow_restricted_indices": false
      }
    ]
  }
}
```
Verified the stuff connects ... SUCCESS!
