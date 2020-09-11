/* eslint-disable import/no-extraneous-dependencies */
import * as sapper from '@sapper/app';

sapper.start({
	target: document.querySelector('#app'),
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener('click', (e) => {
		e.preventDefault();
		document.querySelector(anchor.getAttribute('href')).scrollIntoView({
			behavior: 'smooth',
		});
	});
});
