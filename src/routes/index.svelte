<script>
	import Scroll from '../components/Scroll.svelte';
</script>

<section class="relative w-full h-full text-center bg-gray-300 center">
	<h1>EdHoc Consulting</h1>
	<Scroll target="#services" />
</section>
<section class="relative w-full h-full text-center bg-gray-200 center" id="services">
	<div class="grid grid-cols-1 md:grid-cols-2">
		<div class="p-1 text-center center">
			<h1>Our services</h1>
		</div>
		<div class="p-1 center">
			<ul>
				<li>Senior Managment Consulting</li>
				<li>Senior Project Managment</li>
			</ul>
		</div>
	</div>
	<Scroll target="#contact" />
</section>
<section class="relative w-full h-full text-center bg-gray-100 center" id="contact">
	<div class="grid grid-cols-1 md:grid-cols-2">
		<div class="order-1 p-1 text-center center md:order-3">
			<h1>Contact</h1>
		</div>
		<div class="order-2 p-1 center">
			<ul>
				<li>Phone: +49 179 2949189</li>
				<li>E-Mail: kontakt@edhoc.com</li>
			</ul>
		</div>
	</div>
</section>
<section class="relative w-full text-center bg-white center" id="footer">
	<p class="p-4">
		This website <a
			href="https://www.gnu.org/philosophy/free-software-even-more-important.html">respects
			the users freedom</a>.<br /> Its source code is available <a
			href="https://github.com/GitGangGuy/edhoc">here</a>.
	</p>
</section>
