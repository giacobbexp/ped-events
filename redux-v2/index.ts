let cop: Char;

(async () => {
  const onPedCreate = async (event) => {
    const ped = Memory.GetPedRef(event.data.address);

    if (Char.DoesExist(+ped)) {
      if (ped.getModel() === 280) {
        cop = ped;
      }
    }
  };

  addEventListener('OnPedCreate', onPedCreate);

  while (true) {
    await asyncWait(0);

    if (Char.DoesExist(+cop)) {
      log(cop.getHighestPriorityEvent());
    }
  }
})();
