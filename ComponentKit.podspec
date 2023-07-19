Pod::Spec.new do |s|
  s.name = 'ComponentKit'
  s.version = '0.31.3.1'
  s.license = 'BSD'
  s.summary = 'A React-inspired view framework for iOS'
  s.homepage = 'https://componentkit.org'
  s.social_media_url = 'https://twitter.com/componentkit'
  s.authors = 'adamjernst@fb.com'
  s.source = { :git => 'https://github.com/GRiA/ComponentKit.git', :tag => s.version.to_s }
  s.ios.deployment_target = '14.0'
  s.requires_arc = true

  s.source_files = 'ComponentKit/**/*', 'ComponentTextKit/**/*'
  s.exclude_files = ['ComponentKit/Info.plist']
  s.frameworks = 'UIKit', 'CoreText'
  s.library = 'c++'
  s.xcconfig = {
    'CLANG_CXX_LANGUAGE_STANDARD' => 'gnu++14',
    'CLANG_CXX_LIBRARY' => 'libc++',
  }
  s.dependency 'RenderCore31'
  s.dependency 'Yoga14'
end
