<template>
    <div class="page-wrapper">
        <div class="page-head">
            <div class="container">
                <h1>Column</h1>
                <p>An overview of Bootstrap, how to download and use, basic templates and examples, and more.</p>
            </div>
        </div>
        <div class="page-body">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <column-serially-scale></column-serially-scale>
                    </div>
                    <div class="col-md-4">
                        <column-serially-scale-from-middle></column-serially-scale-from-middle>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	import ColumnSeriallyScale from '@/components/column/ColumnSeriallyScale';
	import ColumnSeriallyScaleFromMiddle from "../column/ColumnSeriallyScaleFromMiddle";

	export default {
		name: 'column',
		components: {
            ColumnSeriallyScale,
			ColumnSeriallyScaleFromMiddle,
		}
	}
</script>
