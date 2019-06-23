class AvatarUploader < CarrierWave::Uploader::Base
  include CarrierWave::MiniMagick

  storage :file

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  version :avatar_list do
    process resize_to_fill: [92,92]
  end

  def extension_whitelist
    %w(jpg jpeg gif png)
  end

  def default_url
    "avatar.png"
  end

end
