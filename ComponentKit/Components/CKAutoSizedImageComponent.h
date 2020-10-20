/*
 *  Copyright (c) 2014-present, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 *
 */

#import <ComponentKit/CKDefines.h>

#if CK_NOT_SWIFT

#import <ComponentKit/CKCompositeComponent.h>

NS_ASSUME_NONNULL_BEGIN

struct CKComponentSize;

/**
 A component that displays an image using UIImageView.
 */
@interface CKAutoSizedImageComponent : CKCompositeComponent

CK_COMPOSITE_COMPONENT_INIT_UNAVAILABLE;

/**
 Uses a static layout with the image's size and apply additional attributes.
 */
- (instancetype)initWithImage:(UIImage *)image
                   attributes:(const CKViewComponentAttributeValueMap &)attributes;

@end

NS_ASSUME_NONNULL_END

#import <ComponentKit/AutoSizedImageComponentBuilder.h>

#endif
