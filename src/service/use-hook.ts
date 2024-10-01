// Hook customizado

export function useCustomHook() {
  //   const [data, setData] = useState(null);

  const customLogicTest = (error) => {
    console.log("customLogicTest", error);

    // Sua lógica aqui
    return "testdsds";
  };

  return { customLogicTest };
}

// Função utilitária que pode ser usada no interceptor
export function customLogic() {
  let hookTest = {};

  function HookWrapper() {
    hookTest = useCustomHook();
  }

  HookWrapper();

  return hookTest;
}
