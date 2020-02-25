<!-- footer and menu provided by index/footer.php -->
      <footer>
			<table><tr>
				<td id="contact">
					<h2>Contact Me!</h2>
					<form method="post" action="/~AdamN/index/contact.php" id="contact-form">
						<input type="text" name="name" placeholder="Your Name">
						<input type="text" name="email" placeholder="Your Email">
						<input type="text" name="subject" placeholder="Subject">
						<textarea name="message" placeholder="Message"></textarea>
						<input type="submit" id="submit" value="submit">
                  <!-- contact.js requires a value for each child of the form -->
					</form>
				</td>
				<td id="logo"><a href="/~AdamN/about/">
					<img src="/~AdamN/index/images/logo.png" alt="Duck Wizard Studios' logo">
				</a></td>
				<td id="license">
					<div id="license-icons">
						<img src="/~AdamN/index/images/cc.png" alt="creative commons">
						<img src="/~AdamN/index/images/by.png" alt="attribution">
					</div>
					<p>Unless otherwise noted,
						<span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Duck Wizard Studios' websites</span> are by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">Nathaniel Adam</span> and are licensed
						under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.</p>
					<p>Icons made are by <a href="http://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> and are licensed under the same license.</p>
				</td>
			</tr></table>
		</footer>
	</div>

	<!-- the menu -->
	<div off-canvas="id-1 left push">
		<a href="/~AdamN/" class="menu-links">
			<img src="/~AdamN/index/images/home.png" alt="home icon">Home
		</a>
		<a href="/~AdamN/sitemap/" class="menu-links">
			<img src="/~AdamN/index/images/sitemap.png" alt="sitemap icon">The Sitemap
		</a>
      <a href="/~AdamN/music/" class="menu-links">
         <img src="/~AdamN/index/images/music.png" alt="music icon">Music Collection
      </a>
      <a href="/~AdamN/dog/" class="menu-links">
         <img src="/~AdamN/index/images/dog.png" alt="dog">Dog
      </a>
		<a href="/~AdamN/gallery/" class="menu-links">
			<img src="/~AdamN/index/images/gallery.png" alt="gallery icon">The Gallery
		</a>
		<a href="/~AdamN/contact/" class="menu-links">
			<img src="/~AdamN/index/images/contact.png" alt="contact icon">Contact Me
		</a>
	</div>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
   <script src="http://www.etch.wlwv.k12.or.us/~AdamN/index/jquery.color-2.1.2.min.js"></script>
	<script src="/~AdamN/index/Slidebars/dev/slidebars.js"></script>
	<!-- ScrollMe is not used yet
   <script src="/~AdamN/index/scrollme/jquery.scrollme.js"></script>-->
	<script src="/~AdamN/index/contact.js"></script>
	<script src="/~AdamN/index/favicon.js"></script>
	<script src="/~AdamN/index/index.js"></script>
</body>
</html>
