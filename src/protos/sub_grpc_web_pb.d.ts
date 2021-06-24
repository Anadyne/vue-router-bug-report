import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as common_pb from './common_pb';
import * as sub_pb from './sub_pb';


export class SubscriptionServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getSubs(
    request: common_pb.UserId,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: sub_pb.SubResp) => void
  ): grpcWeb.ClientReadableStream<sub_pb.SubResp>;

  updSubs(
    request: sub_pb.SubUpdReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class SubscriptionServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getSubs(
    request: common_pb.UserId,
    metadata?: grpcWeb.Metadata
  ): Promise<sub_pb.SubResp>;

  updSubs(
    request: sub_pb.SubUpdReq,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

