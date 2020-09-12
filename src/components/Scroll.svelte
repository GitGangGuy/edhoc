<script>
	export let target = '#';
</script>

<style>
	a {
		position: absolute;
		left: 50%;
		bottom: 20%;
		padding-top: 60px;
		transition: opacity 2s cubic-bezier(0.16, 1, 0.3, 1);
		transform: translate(-50%, 50%);
		color: #2d3748;
		&:hover {
			opacity: 0.6;
		}
		> span {
			position: absolute;
			display: block;
			width: 25px;
			height: 25px;
			border-left: 1px solid #2d3748;
			border-bottom: 1px solid #2d3748;
			top: 0px;
			left: 50%;
			transform: translate(-50%, 50%) rotate(-45deg);
			animation: tip 4s cubic-bezier(0.19, 1, 0.3, 1) 0s infinite;
		}
	}
	@keyframes tip {
		0% {
			transform: translate(-50%, 50%) rotate(-45deg);
		}
		20% {
			transform: translate(-50%, calc(50% + 10px)) rotate(-45deg);
		}
		30% {
			transform: translate(-50%, 50%) rotate(-45deg);
		}
	}
</style>

<a href="{target}"><span></span>Scroll</a>
