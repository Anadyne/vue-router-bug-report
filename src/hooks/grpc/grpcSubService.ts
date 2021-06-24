import { UserId } from 'src/protos/common_pb';
import { SubUpdReq } from 'src/protos/sub_pb';
import asyncSubClient from 'src/services/grpc/subClient';
import { SubT } from 'src/types/types';

export class Sub {
  // private subs: SubT[] = [];
  private id: UserId;

  constructor() {
    const id = localStorage.getItem('userId');
    const uid = new UserId();
    uid.setId(id);
    this.id = uid;
  }
  getSubs = async () => {
    const res = await asyncSubClient.getSubs(this.id);
    // this.subs = res.getSubList();
    return res.getSubList();
  };
  updSubs = async (data: SubT[]) => {
    const req = new SubUpdReq();
    req.setId(this.id);
    req.setSubList(data);

    const res = await asyncSubClient.updSubs(req);
    return res;
  };
}

export default () => ({
  Sub,
});
