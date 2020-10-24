#!/bin/bash
# Requires sudo permission

openssl req \
  -nodes \
  -newkey rsa:2048 \
  -keyout ssl/localssl.key \
  -out ssl/localssl.crt \
  -subj "/C=GB/ST=London/L=London/O=Global Security/OU=IT Department/CN=localssl.com"
