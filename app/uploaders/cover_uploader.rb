class CoverUploader < CarrierWave::Uploader::Base
  include CarrierWave::MiniMagick

  storage :file

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  def default_url
    "friend9.jpg"
  end

  version :cover_list do
    process resize_to_fill: [318,122]
  end

  def extension_whitelist
    %w(jpg jpeg gif png)
  end

end
