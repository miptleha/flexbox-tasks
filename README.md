# 20 Practical Flexbox Tasks

> 🚧 **Solutions not ready yet**

## Task 1: Simple Horizontal Navigation Bar

**Objective:** Master `display: flex`, `flex-direction`, and main axis alignment.

**Task:** Create a horizontal menu with logo on the left and 4 navigation items on the right. The menu should span the full screen width.

**Hint:** Use `justify-content: space-between` for the container.

**Elements:**
- Logo: `https://dummyimage.com/100x40/4a90e2/ffffff&text=Logo`
- Menu items: "Home", "About", "Services", "Contact"

**Solution:** [view page](https://miptleha.github.io/flexbox-tasks/https://miptleha.github.io/flexbox-tasks/solution/task-1/index.html)

## Task 2: Vertical and Horizontal Centering

**Objective:** Practice alignment on both axes.

**Task:** Create a page with a single block perfectly centered both vertically and horizontally.

**Hint:** Use `height: 100vh`, `display: flex`, `justify-content: center`, `align-items: center` for the container.

**Elements:**
- Content block: `https://dummyimage.com/300x200/2ecc71/ffffff&text=Centered`

**Solution:** [view page](https://miptleha.github.io/flexbox-tasks/solution/task-2/index.html)

## Task 3: User Profile Card (Vertical Stack)

**Objective:** Master `flex-direction: column` and cross-axis alignment.

**Task:** Create a user card with avatar on top, name, description, and "Follow" button. All elements should be center-aligned.

**Hint:** Use `flex-direction: column` and `align-items: center`.

**Elements:**
- Avatar: `https://dummyimage.com/80x80/e74c3c/ffffff&text=Avatar`
- Cover: `https://dummyimage.com/300x150/34495e/ffffff&text=Profile`

**Solution:** [view page](https://miptleha.github.io/flexbox-tasks/solution/task-3/index.html)

## Task 4: Basic Page Layout (Header, Main, Footer)

**Objective:** Create a simple full-page layout.

**Task:** Build a layout where header and footer have fixed height (70px), and main content takes all remaining space.

**Hint:** Use column flexbox for body with `min-height: 100vh`. For main use `flex: 1`.

**Elements:**
- Header: `https://dummyimage.com/1200x70/2c3e50/ffffff&text=Header`
- Main: `https://dummyimage.com/1200x400/ecf0f1/333333&text=Main+Content`
- Footer: `https://dummyimage.com/1200x70/2c3e50/ffffff&text=Footer`

**Solution:** [view page](https://miptleha.github.io/flexbox-tasks/solution/task-4/index.html)

## Task 5: Flexible Image Grid

**Objective:** Master `flex-wrap` and multi-line element management.

**Task:** Create a container with 6 square images that wrap to new lines and distribute space evenly.

**Hint:** Use `flex-wrap: wrap` and `justify-content: space-around`.

**Elements:**
- Images: `https://dummyimage.com/150x150/9b59b6/ffffff&text=Image+1` (change number 1-6)

**Solution:** [view page](https://miptleha.github.io/flexbox-tasks/solution/task-5/index.html)

## Task 6: Columns with Different Widths

**Objective:** Master the `flex` property (flex-grow, flex-shrink, flex-basis).

**Task:** Create a layout with three columns: left sidebar (fixed width 200px), main content (takes remaining space), right sidebar (fixed width 150px).

**Hint:** For center column use `flex: 1`.

**Elements:**
- Left sidebar: `https://dummyimage.com/200x400/3498db/ffffff&text=Sidebar+Left`
- Main content: `https://dummyimage.com/600x400/ecf0f1/333333&text=Main+Content`
- Right sidebar: `https://dummyimage.com/150x400/3498db/ffffff&text=Sidebar+Right`

**Solution:** [view page](https://miptleha.github.io/flexbox-tasks/solution/task-6/index.html)

## Task 7: Simple Footer with Social Icons

**Objective:** Combine different alignment types.

**Task:** Create a footer with copyright on the left and 3 social icons aligned in a row on the right.

**Hint:** Similar to Task 1 but inside footer.

**Elements:**
- Social icons: `https://dummyimage.com/30x30/3b5998/ffffff&text=FB`, `https://dummyimage.com/30x30/1da1f2/ffffff&text=TW`, `https://dummyimage.com/30x30/e4405f/ffffff&text=IG`
- Footer background: `https://dummyimage.com/1200x80/2c3e50/ffffff&text=Footer`

**Solution:** [view page](https://miptleha.github.io/flexbox-tasks/solution/task-7/index.html)

## Task 8: Menu with Separators

**Objective:** Practice working with pseudo-elements and `:last-child`.

**Task:** Create a horizontal menu with vertical separators between items. Ensure no separator after the last item.

**Hint:** Use `::after` pseudo-element for menu items and `:last-child::after { display: none; }`.

**Elements:**
- Menu items: "Home", "Products", "About", "Contact"

**Solution:** [view page](https://miptleha.github.io/flexbox-tasks/solution/task-8/index.html)

## Task 9: Product Card with "Sticky" Action

**Objective:** Master `margin-top: auto` inside flex container.

**Task:** Create a product card with image, title, description, and "Add to Cart" button. The button should always stick to the bottom of the card.

**Hint:** For card container use `flex-direction: column`. For button use `margin-top: auto`.

**Elements:**
- Product image: `https://dummyimage.com/250x180/f39c12/ffffff&text=Product`

**Solution:** [view page](https://miptleha.github.io/flexbox-tasks/solution/task-9/index.html)

## Task 10: Responsive Navbar

**Objective:** Consolidate all skills and add simple responsiveness.

**Task:** Create a navbar that shows logo and menu items horizontally on desktop. When window narrows (max-width: 768px), it should switch to column layout with centered items.

**Hint:** Change `flex-direction` from `row` to `column` inside media query.

**Elements:**
- Logo: `https://dummyimage.com/120x40/4a90e2/ffffff&text=Logo`
- Menu items: "Home", "About", "Blog", "Contact"

**Solution:** [view page](https://miptleha.github.io/flexbox-tasks/solution/task-10/index.html)

## Task 11: Holy Grail Layout

**Objective:** Create classic layout with header, footer and three columns.

**Task:** Build layout: header, footer, left sidebar (navigation, 200px), right sidebar (ads, 150px), main content (fluid). Content should be centered on page.

**Elements:**
- Header: `https://dummyimage.com/1200x100/2c3e50/ffffff&text=Header`
- Main content: `https://dummyimage.com/600x400/ecf0f1/333333&text=Main+Content`
- Footer: `https://dummyimage.com/1200x80/2c3e50/ffffff&text=Footer`

**Solution:** [view page](https://miptleha.github.io/flexbox-tasks/solution/task-11/index.html)

## Task 12: Product Cards Grid

**Objective:** Create responsive card grid.

**Task:** Make 6 product cards. Each card: image, title, price, "Buy" button. Cards should wrap and take equal width (min 250px).

**Elements:**
- Product images: `https://dummyimage.com/250x200/e74c3c/ffffff&text=Product+1` (change number 1-6)

**Solution:** [view page](https://miptleha.github.io/flexbox-tasks/solution/task-12/index.html)

## Task 13: User Profile with Cover

**Objective:** Work with overlapping elements and alignment.

**Task:** Create profile block: wide cover, circular avatar overlapping the cover, username and description below avatar.

**Elements:**
- Cover: `https://dummyimage.com/800x200/34495e/ffffff&text=Cover`
- Avatar: `https://dummyimage.com/100x100/e74c3c/ffffff&text=Avatar`

**Solution:** [view page](https://miptleha.github.io/flexbox-tasks/solution/task-13/index.html)

## Task 14: Media Object (Comment)

**Objective:** Classic "Media Object" pattern.

**Task:** Create comment component: avatar on left (fixed width), user name and comment text on right taking all remaining space.

**Elements:**
- Avatar: `https://dummyimage.com/60x60/95a5a6/ffffff&text=Avatar`

**Solution:** [view page](https://miptleha.github.io/flexbox-tasks/solution/task-14/index.html)

## Task 15: Fixed Bottom Action Bar

**Objective:** Stick element to bottom of screen.

**Task:** Create action bar with buttons that always sticks to bottom. Page content shouldn't hide behind the bar.

**Hint:** For body use `padding-bottom` equal to bar height.

**Elements:**
- Buttons: "Back", "Add to Cart", "Buy Now"

**Solution:** [view page](https://miptleha.github.io/flexbox-tasks/solution/task-15/index.html)

## Task 16: "Related Articles" Layout

**Objective:** Combine column and row flexboxes.

**Task:** Create "You Might Like" block with 3 articles. Each article: image on top, title, excerpt, and publish date. All articles same height.

**Elements:**
- Article images: `https://dummyimage.com/300x150/27ae60/ffffff&text=Article+1` (change number 1-3)

**Solution:** [view page](https://miptleha.github.io/flexbox-tasks/solution/task-16/index.html)

## Task 17: Filters and Sort Row

**Objective:** Group heterogeneous elements in one row.

**Task:** Create filter panel with: dropdown "Categories", checkboxes "In Stock", search field, and "Reset Filters" button. Search should take all available space.

**Hint:** For search field use `flex: 1`.

**Elements:**
- No images needed

**Solution:** [view page](https://miptleha.github.io/flexbox-tasks/solution/task-17/index.html)

## Task 18: Notifications Stack

**Objective:** Vertical layout with spacing.

**Task:** Create 3 different type notifications (success, error, warning) stacked vertically. Notifications should have internal padding and left icon.

**Hint:** Use `gap` for spacing between notifications.

**Elements:**
- Icons: `https://dummyimage.com/20x20/27ae60/ffffff&text=✓` (success), `https://dummyimage.com/20x20/f39c12/ffffff&text=!` (warning), `https://dummyimage.com/20x20/e74c3c/ffffff&text=X` (error)

**Solution:** [view page](https://miptleha.github.io/flexbox-tasks/solution/task-18/index.html)

## Task 19: Navbar with Dropdown Menu

**Objective:** Nested flex containers for complex navigation.

**Task:** Create horizontal menu where one item shows dropdown (vertical) on hover. Use flexbox for dropdown positioning.

**Elements:**
- No images needed, text only

**Solution:** [view page](https://miptleha.github.io/flexbox-tasks/solution/task-19/index.html)

## Task 20: Pricing Cards with Emphasis

**Objective:** Control element order and alignment.

**Task:** Create 3 pricing cards. Make middle card emphasized (slightly larger). Each card: plan name, price, features list, button. Buttons should align to card bottoms.

**Hint:** Use `align-self: stretch` and `margin-top: auto` for buttons.

**Elements:**
- Card backgrounds: `https://dummyimage.com/280x350/95a5a6/ffffff&text=Basic`, `https://dummyimage.com/300x370/3498db/ffffff&text=Pro`, `https://dummyimage.com/280x350/2c3e50/ffffff&text=Enterprise`

**Solution:** [view page](https://miptleha.github.io/flexbox-tasks/solution/task-20/index.html)
