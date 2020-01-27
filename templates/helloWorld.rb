# Nexss PROGRAMMER 2.0.0 - Ruby
# Default template for JSON Data
# STDIN
# $stdin.set_encoding("utf-8")
require 'json'

nexssStdin = STDIN.gets

# Modify Data
nexssStdout = JSON.parse(nexssStdin,:quirks_mode => true)
nexssStdout['rubyOutput'] = "helloFromRuby" + RUBY_VERSION
# On Windows there is an issue with string encoding on Ruby
# Below we can read encodings and add to the data parsers
nexssStdout['RUBY_External_ENCODING'] = Encoding.default_external
nexssStdout['RUBY_Internal_ENCODING'] = "foo".encoding
# # STDOUT
STDOUT.write(JSON nexssStdout)
