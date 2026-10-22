const places = [
  {
    name: 'Goa',
    location: 'India',
    category: 'Beach',
    description: 'Beautiful beaches and amazing sunsets.',
    image:
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800',
    about:
      'Goa is famous for its beautiful beaches, Portuguese heritage, lively markets, and delicious seafood.',
    attractions: [
  { name: 'Baga Beach', image: 'https://www.explorebees.com/uploads/Baga%20Beach%20(1).jpg' },
  { name: 'Fort Aguada', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtFKyRkWfVJ1u2MPyVo7EN1i-TPcnYVXrcVjUG53fCw&s=10' },
  { name: 'Dudhsagar Falls', image: 'https://ak-d.tripcdn.com/images/1mi05224x9atzubriC8F5.jpg?proc=source/trip' },
],
    bestTime: 'November to February',
  },
  {
    name: 'Manali',
    location: 'Himachal Pradesh, India',
    category: 'Mountain',
    description: 'Snowy mountains and peaceful forests.',
    image:
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800',
    about:
      'Manali is a beautiful hill station surrounded by Himalayan mountains, green valleys, and pine forests.',
    
    attractions: [
  { name: 'Solang Valley', image: 'https://hblimg.mmtcdn.com/content/hubble/img/manali/mmt/activities/m_activities-manali-solang-valley_l_400_640.jpg' },
  { name: 'Hadimba Temple', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDQtShatpXQb0YIEDzvZIv-hppOxYH7KWJXPuBkDOR9A&s=10' },
  { name: 'Old Manali', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrsGhvlUZ1gEZt24GTAHUt_dDlOTv-CrQ96hO4dxU1VNDIj4KAosoy7tA&s=10' },
],
    bestTime: 'March to June',
  },
  {
    name: 'Hyderabad',
    location: 'Telangana, India',
    category: 'City',
    description: 'Historic monuments and delicious food.',
    image:
      'https://images.unsplash.com/photo-1572445271230-a78b5944a659?w=800',
    about:
      'Hyderabad combines historic architecture, modern technology, colourful markets, and famous Hyderabadi biryani.',
    
    attractions: [
  { name: 'Charminar', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT87lJToc_iGhHH7uzeJpIBSJYxxIJrJs3MFFX927fPZA&s=10' },
  { name: 'Golconda Fort', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1mt8NqwrnXuyi3vDevKrJM7c8PMcGKaa3JQB44dZYsPR9yN0nvFxnk2YE&s=10' },
  { name: 'Hussain Sagar', image: 'https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=60%2Cwidth=375%2Cheight=375%2Cdpr=2/tour_img/737346f87f8aef2d934c72a43f3fb225dccb838775e9ddd38bd133fb48664569.jpg' },
],
    bestTime: 'October to February',
  },
];

const categories = ['All', 'Beach', 'Mountain', 'City'];

export { places, categories};