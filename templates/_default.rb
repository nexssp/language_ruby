#!/usr/bin/env ruby -n
# Nexss PROGRAMMER 2.0.0 - Ruby
# Default template for JSON Data
# STDIN
# $stdin.set_encoding("utf-8")
require 'json'

# Modify Data
parsed = JSON.parse("#{$_}")
parsed['rubyOutput'] = "Hello from Ruby! " + RUBY_VERSION
# On Windows there is an issue with string encoding on Ruby
# Below we can read encodings and add to the data parsers
parsed['RUBY_External_ENCODING'] = Encoding.default_external
parsed['RUBY_Internal_ENCODING'] = "foo".encoding
# STDOUT
STDOUT.write(JSON parsed)
