<template>
    <div class="modal fade" id="showModalPopup">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title" id="showModalPopupLabel">Source Code</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-5">
                            <h4>HTML</h4>
                            <pre><code>{{ html }}</code></pre>
                        </div>
                        <div class="col-md-7">
                            <h4>CSS</h4>
                            <pre><code class="css">{{ css }}</code></pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	import bus from './../../bus'

	export default {
		name: 'modal',
		data() {
			return {
				html: null,
				css: null
			}
		},
		created() {
			bus.$on('showModal', (code) => {
				this.html = code.html;
				this.css = code.css;
				$('#showModalPopup').modal('show');
			})
		}
	}
</script>