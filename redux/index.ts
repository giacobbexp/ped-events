import { PedType } from '../.config/enums';

Streaming.RequestModel(280);
Streaming.LoadAllModelsNow();

while (!Streaming.HasModelLoaded(280)) {
  wait(0);
}

let cop = Char.Create(PedType.Cop, 280, 2163.4861, -1700.9186, 15.0859);

while (true) {
  wait(0);

  if (Char.DoesExist(+cop)) {
    log(cop.getHighestPriorityEvent());
  }
}
