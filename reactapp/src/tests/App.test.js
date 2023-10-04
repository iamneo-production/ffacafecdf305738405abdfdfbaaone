// Import necessary modules for testing
import React from 'react';
import { render,screen,fireEvent } from '@testing-library/react';
import App from '../App';



test('renders_loading', () => {
  const { getByText } = render(<App />);
  const welcomeMessage = getByText("Loading...");
  expect(welcomeMessage).toBeInTheDocument();
});

test('renders_welcome_page', async() => {
  const { getByText } = render(<App />);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const welcomeMessage = getByText("Home Page - List of Blog Posts");
  expect(welcomeMessage).toBeInTheDocument();
  const inputlabel = getByText("Enter Blog Post ID:");
  expect(inputlabel).toBeInTheDocument();
  const blog = getByText("View Blog Post");
  expect(blog).toBeInTheDocument();
  const allblog = getByText("View All Blogs");
  expect(allblog).toBeInTheDocument();
});
test('displays_specific_blog_and_returns_to_home_page', async() => {
  const { getByText, } = render(<App />);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const inputElement = screen.getByLabelText("Enter Blog Post ID:");
  const viewButtonElement = screen.getByText("View Blog Post");

  fireEvent.change(inputElement, { target: { value: '2' } });
  fireEvent.click(viewButtonElement);
  const load = getByText("Loading...");
  expect(load).toBeInTheDocument();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const inputlabel1 = getByText("qui est esse");
  expect(inputlabel1).toBeInTheDocument();
  const backtoblog = screen.getByText("Back to Home");
  fireEvent.click(backtoblog);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const welcomeMessage = getByText("Home Page - List of Blog Posts");
  expect(welcomeMessage).toBeInTheDocument();
  const inputlabel = getByText("Enter Blog Post ID:");
  expect(inputlabel).toBeInTheDocument();
  const blog = getByText("View Blog Post");
  expect(blog).toBeInTheDocument();
  const allblog = getByText("View All Blogs");
  expect(allblog).toBeInTheDocument();
},10000);
test('displays_specific_blog_and_displays_all_blogs', async() => {
  const { getByText, } = render(<App />);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const inputElement = screen.getByLabelText("Enter Blog Post ID:");
  const viewButtonElement = screen.getByText("View Blog Post");

  fireEvent.change(inputElement, { target: { value: '2' } });
  fireEvent.click(viewButtonElement);
  const welcomeMessage = getByText("Loading...");
  expect(welcomeMessage).toBeInTheDocument();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const inputlabel = getByText("qui est esse");
  expect(inputlabel).toBeInTheDocument();
  const backtoblog = screen.getByText("Back to Blog List");
  fireEvent.click(backtoblog);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const heading1 = getByText("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
  expect(heading1).toBeInTheDocument();
  const heading2 = getByText("qui est esse");
  expect(heading2).toBeInTheDocument();
  const heading3 = getByText("ea molestias quasi exercitationem repellat qui ipsa sit aut");
  expect(heading3).toBeInTheDocument();
  const heading4 = getByText("eum et est occaecati");
  expect(heading4).toBeInTheDocument();
  const heading5 = getByText("nesciunt quas odio");
  expect(heading5).toBeInTheDocument();
  const heading6 = getByText("dolorem eum magni eos aperiam quia");
  expect(heading6).toBeInTheDocument();
  const content1 = getByText("quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto");
  expect(content1).toBeInTheDocument();
  const content2 = getByText("est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla");
  expect(content2).toBeInTheDocument();
  const content3 = getByText("et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut");
  expect(content3).toBeInTheDocument();
  const content4 = getByText("ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit");
  expect(content4).toBeInTheDocument();
  const content5 = getByText("repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque");
  expect(content5).toBeInTheDocument();
  const content6 = getByText("ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae");
  expect(content6).toBeInTheDocument();
  fireEvent.click(heading1);
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const backtohome = screen.getByText("Back to Home");
  fireEvent.click(backtohome);
},12000);
test('view_all_blog_from_home_page', async() => {
  const { getByText } = render(<App />);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const welcomeMessage = getByText("Home Page - List of Blog Posts");
  expect(welcomeMessage).toBeInTheDocument();
  const inputlabel = getByText("Enter Blog Post ID:");
  expect(inputlabel).toBeInTheDocument();
  const blog = getByText("View Blog Post");
  expect(blog).toBeInTheDocument();
  const allblog = getByText("View All Blogs");
  expect(allblog).toBeInTheDocument();
  fireEvent.click(allblog);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const heading1 = getByText("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
  expect(heading1).toBeInTheDocument();
  const heading2 = getByText("qui est esse");
  expect(heading2).toBeInTheDocument();
  const heading3 = getByText("ea molestias quasi exercitationem repellat qui ipsa sit aut");
  expect(heading3).toBeInTheDocument();
  const heading4 = getByText("eum et est occaecati");
  expect(heading4).toBeInTheDocument();
  const heading5 = getByText("nesciunt quas odio");
  expect(heading5).toBeInTheDocument();
  const heading6 = getByText("dolorem eum magni eos aperiam quia");
  expect(heading6).toBeInTheDocument();
  const content1 = getByText("quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto");
  expect(content1).toBeInTheDocument();
  const content2 = getByText("est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla");
  expect(content2).toBeInTheDocument();
  const content3 = getByText("et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut");
  expect(content3).toBeInTheDocument();
  const content4 = getByText("ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit");
  expect(content4).toBeInTheDocument();
  const content5 = getByText("repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque");
  expect(content5).toBeInTheDocument();
  const content6 = getByText("ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae");
  expect(content6).toBeInTheDocument();
});
