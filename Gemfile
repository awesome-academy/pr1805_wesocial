source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

gem "rails", "~> 5.2.3"
gem "sqlite3"
gem "puma", git: 'https://github.com/eric-norcross/puma.git', branch: 'chrome_70_ssl_curve_compatiblity'
gem "sass-rails", "~> 5.0"
gem "uglifier", ">= 1.3.0"
gem "devise"
gem "omniauth", "~> 1.9"
gem "omniauth-google-oauth2"
gem "omniauth-facebook"
gem "figaro"
gem "letter_opener", :group => :development
gem "coffee-rails", "~> 4.2"
gem "turbolinks", "~> 5"
gem "jbuilder", "~> 2.5"
gem "carrierwave"
gem "cloudinary"
gem "link_thumbnailer"
gem "rails_autolink", "~> 1.1", ">= 1.1.6"
gem "grabbit"
gem "acts_as_votable"




gem "bootsnap", ">= 1.1.0", require: false

group :development, :test do
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem "web-console", ">= 3.3.0"
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
end

group :test do
  gem "capybara", ">= 2.15"
  gem "selenium-webdriver"
  gem "chromedriver-helper"
end

gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
