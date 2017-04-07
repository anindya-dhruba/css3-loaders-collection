<template>
    <div class="page-wrapper">
        <div class="page-head">
            <div class="container">
                <h1>Rectangular</h1>
                <p>An overview of Bootstrap, how to download and use, basic templates and examples, and more.</p>
            </div>
        </div>
        <div class="page-body">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <rectangular-two-sided-rotation></rectangular-two-sided-rotation>
                    </div>
                    <div class="col-md-4">
                        <two-rectangulars-translation></two-rectangulars-translation>
                    </div>
                    <div class="col-md-4">
                        <rectangular-four-sided-rotation></rectangular-four-sided-rotation>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	import RectangularTwoSidedRotation from '@/components/rectangular/RectangularTwoSidedRotation';
	import TwoRectangularsTranslation from '@/components/rectangular/TwoRectangularsTranslation';
	import RectangularFourSidedRotation from "../rectangular/RectangularFourSidedRotation";

	export default {
		name: 'rectangular',
		components: {
            RectangularTwoSidedRotation,
			TwoRectangularsTranslation,
			RectangularFourSidedRotation,
		}
	}
</script>