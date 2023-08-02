Pod::Spec.new do |s|
  s.name = 'RenderCore31'
  s.version = '0.31.3.2'
  s.license = 'BSD'
  s.summary = 'Base library for ComponentKit'
  s.homepage = 'https://componentkit.org'
  s.authors = 'adamjernst@fb.com'
  s.source = { :git => 'https://github.com/GRiA/ComponentKit.git', :tag => s.version.to_s }
  s.ios.deployment_target = '14.0'
  s.requires_arc = true
  s.source_files = 'RenderCore/**/*.{h,m,mm}'
  s.frameworks = 'UIKit'
  s.library = 'c++'
  s.xcconfig = {
    'CLANG_CXX_LANGUAGE_STANDARD' => 'gnu++17',
    'CLANG_CXX_LIBRARY' => 'libc++',
  }
  s.pod_target_xcconfig {
    'DEFINES_MODULE' => 'YES'
  }
  s.module_name = 'RenderCore'
  s.static_framework = false
end
