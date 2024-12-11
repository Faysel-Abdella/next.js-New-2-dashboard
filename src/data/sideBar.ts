import assets from '@/assets';

// this comment has nothing to do with the code
// testing

const sideBarContent = [
  {
    order: '1',
    mainTitle: '홈',
    icon: assets.home,
    activeIcon: assets.homeActive,
    init: '/admin/home',
    firstRoute: '/admin/home/dashboard',
    subTitles: [
      {
        label: '대시보드',
        route: '/admin/home/dashboard',
      },

      {
        label: '종합지표',
        route: '/admin/home/comprehensive-indicator',
      },
    ],
  },
  {
    order: '2',
    mainTitle: '회원 관리',
    icon: assets.member,
    activeIcon: assets.memberActive,
    init: '/admin/member-management',
    firstRoute: '/admin/member-management/full-member',
    subTitles: [
      {
        label: '전체 회원 관리',
        route: '/admin/member-management/full-member',
      },
      {
        label: '정지 회원 관리',
        route: '/admin/member-management/suspended-member',
      },
    ],
  },
  {
    order: '3',
    mainTitle: '그룹 관리',
    icon: assets.group,
    activeIcon: assets.groupActive,
    init: '/admin/group-management',
    firstRoute: '/admin/group-management',
    subTitles: [],
  },

  {
    order: '4',
    mainTitle: '필터 관리',
    icon: assets.filter,
    activeIcon: assets.filterActive,
    init: '/admin/filter-management',
    firstRoute: '/admin/filter-management',
    subTitles: [],
  },
  {
    order: '5',
    mainTitle: '연회원권 관리',
    icon: assets.annual,
    activeIcon: assets.annualActive,
    init: '/admin/annual-membership',
    firstRoute: '/admin/annual-membership',
    subTitles: [],
  },
  {
    order: '6',
    mainTitle: '1:1 문의 관리',
    icon: assets.inquiry,
    activeIcon: assets.inquiryActive,
    init: '/admin/inquiry-management',
    firstRoute: '/admin/inquiry-management',
    subTitles: [],
  },
  {
    order: '7',
    mainTitle: '배너 관리',
    icon: assets.banner,
    activeIcon: assets.bannerActive,
    init: '/admin/banner-management',
    firstRoute: '/admin/banner-management/main-banner',
    subTitles: [
      {
        label: '메인 배너',
        route: '/admin/banner-management/main-banner',
      },
      {
        label: '중간 배너',
        route: '/admin/banner-management/middle-banner',
      },
    ],
  },
];

export default sideBarContent;
