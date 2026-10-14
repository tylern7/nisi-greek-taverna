NISI GREEK TAVERNA — static site package
=========================================

What this is
------------
A one-page replacement for https://www.nisigreek.ca
Upload these files to a normal web host (the web root / public_html).
Open index.html. No build step, no database, no Node.

Current hosting (important)
---------------------------
The live site is built and hosted on Wix (generator: Wix.com Website Builder),
in front of Cloudflare. Site revision seen: 340.

Wix does NOT accept a zip of HTML as a replacement site. There is no
"upload this folder" button that swaps out a Wix site. To put this page on
nisigreek.ca, one of these has to happen:

  1. Point the domain away from Wix to ordinary hosting
     (cPanel / Plesk public_html, Netlify, S3, etc.) and upload this folder
     so index.html is at the web root. FTP or the host's file manager is enough.
  2. Stay on Wix and rebuild the page by hand in the Wix editor.
     You cannot drop these files into the Wix editor.

Do not cancel the Wix plan until the two Wix-only tools below are reconnected.
They live inside Wix apps and cannot be copied into this zip.

What still points at the old site
----------------------------------
Reservations for up to 12 guests
  OpenTable, restaurant id 1387429
  https://www.opentable.ca/r/nisi-greek-taverna-burlington
  This link is already wired and was checked. It does not depend on Wix.

Parties of 13 or more
  The old form is Wix Table Reservations.
  It collects party size (minimum 13), date, and a time slot, then a $200 deposit.
  The on-page form collects the same details plus name, email, phone and notes.
  It cannot post the deposit into Wix. The "Continue to book the party" button
  opens https://www.nisigreek.ca/group-reservations
  Reconnect: when you leave Wix, point that button at your new group-booking
  tool, or set an inbox and email the request.

Order online
  Uber Eats
  https://www.ubereats.com/ca/store/nisi-greek-taverna/g6tyfICnTbOUssDXY2j6Hg

Social
  Instagram https://www.instagram.com/nisigreektaverna/
  TikTok    https://www.tiktok.com/@nisigreektaverna
  No public email and no Facebook page were published on the site.

Upload steps (cPanel-style host)
--------------------------------
1. Unzip this folder.
2. Upload index.html, css/, js/ and photos/ into public_html
   (not into a subfolder, unless you want the site at /nisi/).
3. Visit the domain. You should see the dining-room hero.
4. Click Reserve and confirm OpenTable opens.
5. Leave the Wix plan up until group booking is reconnected.

Photos and the wordmark are the restaurant's own images from the current site.
