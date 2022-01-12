useEffect(() => {
  // componentDidMount

  return () => {
    // componentWillUnMount
  };
}, []);

useEffect(() => {
  // componentDidMount
  // componentDidUpdate pour toutes variable modifiées

  return () => {
    // componentWillUnMount
  };
});

useEffect(() => {
  // componentDidMount
  // componentDidUpdate uniquement quand le value est mis à jour

  return () => {
    // componentWillUnMount
  };
}, [value]);
