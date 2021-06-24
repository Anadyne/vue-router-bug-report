import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as common_pb from './common_pb';


export class Contacts extends jspb.Message {
  getLocation(): string;
  setLocation(value: string): Contacts;

  getPhoneList(): Array<string>;
  setPhoneList(value: Array<string>): Contacts;
  clearPhoneList(): Contacts;
  addPhone(value: string, index?: number): Contacts;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Contacts.AsObject;
  static toObject(includeInstance: boolean, msg: Contacts): Contacts.AsObject;
  static serializeBinaryToWriter(message: Contacts, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Contacts;
  static deserializeBinaryFromReader(message: Contacts, reader: jspb.BinaryReader): Contacts;
}

export namespace Contacts {
  export type AsObject = {
    location: string,
    phoneList: Array<string>,
  }
}

export class ProfileData extends jspb.Message {
  getFirst(): string;
  setFirst(value: string): ProfileData;

  getLast(): string;
  setLast(value: string): ProfileData;

  getPatronymic(): string;
  setPatronymic(value: string): ProfileData;

  getSex(): string;
  setSex(value: string): ProfileData;

  getBirthdate(): string;
  setBirthdate(value: string): ProfileData;

  getContacts(): Contacts | undefined;
  setContacts(value?: Contacts): ProfileData;
  hasContacts(): boolean;
  clearContacts(): ProfileData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileData.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileData): ProfileData.AsObject;
  static serializeBinaryToWriter(message: ProfileData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileData;
  static deserializeBinaryFromReader(message: ProfileData, reader: jspb.BinaryReader): ProfileData;
}

export namespace ProfileData {
  export type AsObject = {
    first: string,
    last: string,
    patronymic: string,
    sex: string,
    birthdate: string,
    contacts?: Contacts.AsObject,
  }
}

export class ProfileReq extends jspb.Message {
  getId(): common_pb.UserId | undefined;
  setId(value?: common_pb.UserId): ProfileReq;
  hasId(): boolean;
  clearId(): ProfileReq;

  getData(): ProfileData | undefined;
  setData(value?: ProfileData): ProfileReq;
  hasData(): boolean;
  clearData(): ProfileReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileReq): ProfileReq.AsObject;
  static serializeBinaryToWriter(message: ProfileReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileReq;
  static deserializeBinaryFromReader(message: ProfileReq, reader: jspb.BinaryReader): ProfileReq;
}

export namespace ProfileReq {
  export type AsObject = {
    id?: common_pb.UserId.AsObject,
    data?: ProfileData.AsObject,
  }
}

