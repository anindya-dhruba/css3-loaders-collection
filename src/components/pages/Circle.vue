<template>
    <div class="page-wrapper">
        <div class="page-head">
            <div class="container">
                <h1>Circle</h1>
                <p>An overview of Bootstrap, how to download and use, basic templates and examples, and more.</p>
            </div>
        </div>
        <div class="page-body">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="thumbnail">
                            <circle-rotate></circle-rotate>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="thumbnail">
                            <gradient-circle-rotate></gradient-circle-rotate>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="thumbnail">
                            <circle-lazy-rotate></circle-lazy-rotate>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="thumbnail">
                            <circle-scale-fading></circle-scale-fading>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="thumbnail">
                            <two-circles-scale></two-circles-scale>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="thumbnail">
                            <circle-serially-scale-fade></circle-serially-scale-fade>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="thumbnail">
                            <two-circles-rotate-scale></two-circles-rotate-scale>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	import CircleRotate from '@/components/circle/CircleRotate';
	import GradientCircleRotate from '@/components/circle/GradientCircleRotate';
	import CircleLazyRotate from '@/components/circle/CircleLazyRotate';
	import CircleScaleFading from '@/components/circle/CircleScaleFading';
	import TwoCirclesScale from '@/components/circle/TwoCirclesScale';
	import CircleSeriallyScaleFade from '@/components/circle/CircleSeriallyScaleFade';
	import TwoCirclesRotateScale from '@/components/circle/TwoCirclesRotateScale';

	export default {
		name: 'circle',
		components: {
			CircleRotate,
			GradientCircleRotate,
			CircleLazyRotate,
			CircleScaleFading,
			TwoCirclesScale,
			CircleSeriallyScaleFade,
			TwoCirclesRotateScale,

		}
	}
</script>

