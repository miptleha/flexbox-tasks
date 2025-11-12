# 20 Practical Flexbox Tasks

## Task 1: Simple Horizontal Navigation Bar
**Objective:** Master `display: flex`, `flex-direction`, and main axis alignment.
**Task:** Create a horizontal menu with logo on the left and 4 navigation items on the right. The menu should span the full screen width.
**Hint:** Use `justify-content: space-between` for the container.
**Elements:**
- Logo: `https://picsum.photos/100/40?text=Logo`
- Menu items: "Home", "About", "Services", "Contact"

**Solution:** [task-1/index.html](task-1/index.html)

## Task 2: Vertical and Horizontal Centering
**Objective:** Practice alignment on both axes.
**Task:** Create a page with a single block perfectly centered both vertically and horizontally.
**Hint:** Use `height: 100vh`, `display: flex`, `justify-content: center`, `align-items: center` for the container.
**Elements:**
- Content block: `https://picsum.photos/300/200?text=Centered`
**Solution:** [task-2/index.html](task-2/index.html)

## Task 3: User Profile Card (Vertical Stack)
**Objective:** Master `flex-direction: column` and cross-axis alignment.
**Task:** Create a user card with avatar on top, name, description, and "Follow" button. All elements should be center-aligned.
**Hint:** Use `flex-direction: column` and `align-items: center`.
**Elements:**
- Avatar: `https://picsum.photos/80/80?text=Avatar`
- Cover: `https://picsum.photos/300/150?text=Profile`
**Solution:** [task-3/index.html](task-3/index.html)

## Task 4: Basic Page Layout (Header, Main, Footer)
**Objective:** Create a simple full-page layout.
**Task:** Build a layout where header and footer have fixed height (70px), and main content takes all remaining space.
**Hint:** Use column flexbox for body with `min-height: 100vh`. For main use `flex: 1`.
**Elements:**
- Header: `https://picsum.photos/1200/70?text=Header`
- Main: `https://picsum.photos/1200/400?text=Main+Content`
- Footer: `https://picsum.photos/1200/70?text=Footer`
**Solution:** [task-4/index.html](task-4/index.html)

## Task 5: Flexible Image Grid
**Objective:** Master `flex-wrap` and multi-line element management.
**Task:** Create a container with 6 square images that wrap to new lines and distribute space evenly.
**Hint:** Use `flex-wrap: wrap` and `justify-content: space-around`.
**Elements:**
- Images: `https://picsum.photos/150/150?text=Image+1` (change number 1-6)
**Solution:** [task-5/index.html](task-5/index.html)

## Task 6: Columns with Different Widths
**Objective:** Master the `flex` property (flex-grow, flex-shrink, flex-basis).
**Task:** Create a layout with three columns: left sidebar (fixed width 200px), main content (takes remaining space), right sidebar (fixed width 150px).
**Hint:** For center column use `flex: 1`.
**Elements:**
- Left sidebar: `https://picsum.photos/200/400?text=Sidebar+Left`
- Main content: `https://picsum.photos/600/400?text=Main+Content`
- Right sidebar: `https://picsum.photos/150/400?text=Sidebar+Right`
**Solution:** [task-6/index.html](task-6/index.html)

## Task 7: Simple Footer with Social Icons
**Objective:** Combine different alignment types.
**Task:** Create a footer with copyright on the left and 3 social icons aligned in a row on the right.
**Hint:** Similar to Task 1 but inside footer.
**Elements:**
- Social icons: `https://picsum.photos/30/30?text=FB`, `https://picsum.photos/30/30?text=TW`, `https://picsum.photos/30/30?text=IG`
- Footer background: `https://picsum.photos/1200/80?text=Footer`
**Solution:** [task-7/index.html](task-7/index.html)

## Task 8: Menu with Separators
**Objective:** Practice working with pseudo-elements and `:last-child`.
**Task:** Create a horizontal menu with vertical separators between items. Ensure no separator after the last item.
**Hint:** Use `::after` pseudo-element for menu items and `:last-child::after { display: none; }`.
**Elements:**
- Menu items: "Home", "Products", "About", "Contact"
**Solution:** [task-8/index.html](task-8/index.html)

## Task 9: Product Card with "Sticky" Action
**Objective:** Master `margin-top: auto` inside flex container.
**Task:** Create a product card with image, title, description, and "Add to Cart" button. The button should always stick to the bottom of the card.
**Hint:** For card container use `flex-direction: column`. For button use `margin-top: auto`.
**Elements:**
- Product image: `https://picsum.photos/250/180?text=Product`
**Solution:** [task-9/index.html](task-9/index.html)

## Task 10: Responsive Navbar
**Objective:** Consolidate all skills and add simple responsiveness.
**Task:** Create a navbar that shows logo and menu items horizontally on desktop. When window narrows (max-width: 768px), it should switch to column layout with centered items.
**Hint:** Change `flex-direction` from `row` to `column` inside media query.
**Elements:**
- Logo: `https://picsum.photos/120/40?text=Logo`
- Menu items: "Home", "About", "Blog", "Contact"
**Solution:** [task-10/index.html](task-10/index.html)

## Task 11: Holy Grail Layout
**Objective:** Create classic layout with header, footer and three columns.
**Task:** Build layout: header, footer, left sidebar (navigation, 200px), right sidebar (ads, 150px), main content (fluid). Content should be centered on page.
**Elements:**
- Header: `https://picsum.photos/1200/100?text=Header`
- Main content: `https://picsum.photos/600/400?text=Main+Content`
- Footer: `https://picsum.photos/1200/80?text=Footer`
**Solution:** [task-11/index.html](task-11/index.html)

## Task 12: Product Cards Grid
**Objective:** Create responsive card grid.
**Task:** Make 6 product cards. Each card: image, title, price, "Buy" button. Cards should wrap and take equal width (min 250px).
**Elements:**
- Product images: `https://picsum.photos/250/200?text=Product+1` (change number 1-6)
**Solution:** [task-12/index.html](task-12/index.html)

## Task 13: User Profile with Cover
**Objective:** Work with overlapping elements and alignment.
**Task:** Create profile block: wide cover, circular avatar overlapping the cover, username and description below avatar.
**Elements:**
- Cover: `https://picsum.photos/800/200?text=Cover`
- Avatar: `https://picsum.photos/100/100?text=Avatar`
**Solution:** [task-13/index.html](task-13/index.html)

## Task 14: Media Object (Comment)
**Objective:** Classic "Media Object" pattern.
**Task:** Create comment component: avatar on left (fixed width), user name and comment text on right taking all remaining space.
**Elements:**
- Avatar: `https://picsum.photos/60/60?text=Avatar`
**Solution:** [task-14/index.html](task-14/index.html)

## Task 15: Fixed Bottom Action Bar
**Objective:** Stick element to bottom of screen.
**Task:** Create action bar with buttons that always sticks to bottom. Page content shouldn't hide behind the bar.
**Hint:** For body use `padding-bottom` equal to bar height.
**Elements:**
- Buttons: "Back", "Add to Cart", "Buy Now"
**Solution:** [task-15/index.html](task-15/index.html)

## Task 16: "Related Articles" Layout
**Objective:** Combine column and row flexboxes.
**Task:** Create "You Might Like" block with 3 articles. Each article: image on top, title, excerpt, and publish date. All articles same height.
**Elements:**
- Article images: `https://picsum.photos/300/150?text=Article+1` (change number 1-3)
**Solution:** [task-16/index.html](task-16/index.html)

## Task 17: Filters and Sort Row
**Objective:** Group heterogeneous elements in one row.
**Task:** Create filter panel with: dropdown "Categories", checkboxes "In Stock", search field, and "Reset Filters" button. Search should take all available space.
**Hint:** For search field use `flex: 1`.
**Elements:**
- No images needed
**Solution:** [task-17/index.html](task-17/index.html)

## Task 18: Notifications Stack
**Objective:** Vertical layout with spacing.
**Task:** Create 3 different type notifications (success, error, warning) stacked vertically. Notifications should have internal padding and left icon.
**Hint:** Use `gap` for spacing between notifications.
**Elements:**
- Icons: `https://picsum.photos/20/20?text=✓` (success), `https://picsum.photos/20/20?text=!` (warning), `https://picsum.photos/20/20?text=X` (error)
**Solution:** [task-18/index.html](task-18/index.html)

## Task 19: Navbar with Dropdown Menu
**Objective:** Nested flex containers for complex navigation.
**Task:** Create horizontal menu where one item shows dropdown (vertical) on hover. Use flexbox for dropdown positioning.
**Elements:**
- No images needed, text only
**Solution:** [task-19/index.html](task-19/index.html)

## Task 20: Pricing Cards with Emphasis
**Objective:** Control element order and alignment.
**Task:** Create 3 pricing cards. Make middle card emphasized (slightly larger). Each card: plan name, price, features list, button. Buttons should align to card bottoms.
**Hint:** Use `align-self: stretch` and `margin-top: auto` for buttons.
**Elements:**
- Card backgrounds: `https://picsum.photos/280/350?text=Basic`, `https://picsum.photos/300/370?text=Pro`, `https://picsum.photos/280/350?text=Enterprise`
**Solution:** [task-20/index.html](task-20/index.html)
