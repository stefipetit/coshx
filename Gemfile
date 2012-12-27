source "http://rubygems.org"

ruby "1.9.3"

gem "rails", "~> 3.2.9"

# web server
gem 'thin'

# database
gem "pg"

# authentication
gem "devise"

# presentation
gem "redcarpet"
gem "pygmentize"
gem "nokogiri"
gem "jquery-rails"
gem "haml-rails"
gem "gravatar-ultimate"
gem "kaminari"

# pictures
gem 'carrierwave'
gem 'rmagick'
gem 'fog'

#Social media is cool?
gem "twitter"

# Turbolinks!
gem "turbolinks"

gem 'i18n-active_record',
    :git => 'git://github.com/svenfuchs/i18n-active_record.git',
    :branch => 'rails-3.2',
    :require => 'i18n/active_record'

# lightweight I18n frontend
gem 'contenteditable', :github => 'micmmakarov/contenteditable', :branch => 'master'

# sass mixin library
gem 'bourbon'

# upload assets to s3 before deploying to heroku
gem "asset_sync"

group :assets do
  gem "sass-rails",   '~> 3.2.3'
  gem "coffee-rails", '~> 3.2.1'
  gem "uglifier"
  gem 'compass-rails', '~> 1.0.3'
  gem 'zurb-foundation', '~> 3.0.1'
  gem 'libv8', '~> 3.11.8'
  gem 'execjs'
end

group :development do
  gem "heroku_san"
  gem "pry"
  gem "pry-nav"
end

group :development, :test do
  gem "cucumber-rails", :require => false
  gem "factory_girl_rails"
  gem "timecop"
  gem 'shoulda-matchers'
  gem 'simplecov', :require => false # code coverage tool
  gem "database_cleaner"
  gem "forgery"
  gem "rspec-rails"
  gem 'pry'
  gem 'pry-nav'
  gem 'faker'
end
