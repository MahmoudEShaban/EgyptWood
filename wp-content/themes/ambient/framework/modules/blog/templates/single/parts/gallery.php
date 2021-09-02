<?php $image_gallery_val = get_post_meta( get_the_ID(), 'eltdf_post_gallery_images_meta' , true );?>
<?php if($image_gallery_val !== ""){ ?>
	<div class="eltdf-post-image">
		<div class="eltdf-blog-gallery eltdf-owl-slider">
			<?php
			if($image_gallery_val != '' ) {
				$image_gallery_array = explode(',',$image_gallery_val);
			}
			if(isset($image_gallery_array) && count($image_gallery_array)!= 0):
				foreach($image_gallery_array as $gimg_id): ?>
					<div>
						<?php if(!empty($display_custom_feature_image_width) && $display_custom_feature_image_width !== '') {
							echo wp_get_attachment_image( $gimg_id, array($display_custom_feature_image_width, 0) );
						} else {
							echo wp_get_attachment_image( $gimg_id, 'large' );
						} ?>
					</div>
				<?php endforeach;
			endif;
			?>
		</div>
	</div>
<?php } ?>