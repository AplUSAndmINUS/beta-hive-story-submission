import { useNavigate } from 'react-router-dom';

import { routes, Routes } from 'shared/routes/routes';

const useNavigation = () => {
  const navigate = useNavigate();

  const handleNavigation = (name: string) => {
    const route = routes.find((route: Routes) => route.name === name);

    if (!route) {
      throw new Error(`Route with name ${name} not found`);
    }

    if (route && route.path) {
      navigate(route.path);
    }
  };

  return handleNavigation;
};

export default useNavigation;