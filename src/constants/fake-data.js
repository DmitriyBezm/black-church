import profile from 'images/profile.jpg';

export const FEEDBACK = {
  title: 'Join our 1000+ happy black churches using Black ChMS',
  profileUrl: profile,
  username: 'Mikle P.',
  userPosition: 'Meeker United Methodist Church',
  message: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in.
  `,
};

export const FEEDBACK_LIST = new Array(5)
  .fill(FEEDBACK)
  .map((feedback, index) => ({
    id: index,
    feedback,
  }));
