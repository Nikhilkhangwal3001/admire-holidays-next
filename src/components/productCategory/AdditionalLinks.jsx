import AdditionLinkCard from "./AdditionLinkCard";

const AdditionalLinks = ({ category }) => {
  let additionalLinks = null;

  switch (category.toLowerCase()) {
    case "rajasthan":
      additionalLinks = (
        <AdditionLinkCard
          state1={"Himachal"}
          state2={"Uttarakhand"}
          imageUrl1={
            "https://images.unsplash.com/photo-1587623266208-c1784a7da10d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGhpbWFjaGFsJTIwcHJhZGVzaHxlbnwwfHwwfHx8MA%3D%3D"
          }
          imageUrl2={
            "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXR0YXJha2hhbmQlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D"
          }
        />
      );
      break;
    case "himachal":
      additionalLinks = (
        <div className="flex gap-4 my-6">
          <AdditionLinkCard
            state1={"Kashmir"}
            state2={"Ladakh"}
            imageUrl1={
              "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FzaG1pcnxlbnwwfHwwfHx8MA%3D%3D"
            }
            imageUrl2={
              "https://images.unsplash.com/photo-1536295243470-d7cba4efab7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhZGFraHxlbnwwfHwwfHx8MA%3D%3D"
            }
          />
        </div>
      );
      break;
    case "kashmir":
      additionalLinks = (
        <div className="flex gap-4 my-6">
          <AdditionLinkCard
            state1={"goa"}
            state2={"sikkim"}
            imageUrl1={
              "https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z29hfGVufDB8fDB8fHww"
            }
            imageUrl2={
              "https://images.unsplash.com/photo-1613339027986-b94d85708995?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2lra2ltfGVufDB8fDB8fHww"
            }
          />
        </div>
      );
      break;
    case "odisha":
      additionalLinks = (
        <div className="flex gap-4 my-6">
          <AdditionLinkCard
            state1={"punjab"}
            state2={"delhi"}
            imageUrl1={
              "https://images.unsplash.com/photo-1623059508779-2542c6e83753?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHVuamFifGVufDB8fDB8fHww"
            }
            imageUrl2={
              "https://images.unsplash.com/photo-1597040663342-45b6af3d91a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVsaGl8ZW58MHx8MHx8fDA%3D"
            }
          />
        </div>
      );
      break;
    case "uttarakhand":
      additionalLinks = (
        <div className="flex gap-4 my-6">
          <AdditionLinkCard
            state1={"kerala"}
            state2={"andaman"}
            imageUrl1={
              "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            imageUrl2={
              "https://images.unsplash.com/photo-1615966650071-855b15f29ad1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5kYW1hbnxlbnwwfHwwfHx8MA%3D%3D"
            }
          />
        </div>
      );
      break;
    case "kerala":
      additionalLinks = (
        <div className="flex gap-4 my-6">
          <AdditionLinkCard
            state1={"gujrat"}
            state2={"goa"}
            imageUrl1={
              "https://images.unsplash.com/photo-1622257955271-a7c070559998?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3VqcmF0fGVufDB8fDB8fHww"
            }
            imageUrl2={
              "https://images.unsplash.com/photo-1580741186862-c5d0bf2aff33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdvYXxlbnwwfHwwfHx8MA%3D%3D"
            }
          />
        </div>
      );
      break;
    case "andaman":
      additionalLinks = (
        <div className="flex gap-4 my-6">
          <AdditionLinkCard
            state1={"punjab"}
            state2={"sikkim"}
            imageUrl1={
              "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHB1bmphYnxlbnwwfHwwfHx8MA%3D%3D"
            }
            imageUrl2={
              "https://images.unsplash.com/photo-1515747802812-e9226ae7e01b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNpa2tpbXxlbnwwfHwwfHx8MA%3D%3D"
            }
          />
        </div>
      );
      break;
    case "gujrat":
      additionalLinks = (
        <div className="flex gap-4 my-6">
          <AdditionLinkCard
            state1={"rajasthan"}
            state2={"himachal"}
            imageUrl1={
              "https://images.unsplash.com/photo-1631867675167-90a456a90863?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhamFzdGhhbnxlbnwwfHwwfHx8MA%3D%3D"
            }
            imageUrl2={
              "https://images.unsplash.com/photo-1521354719423-661a3204204f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGltYWNoYWx8ZW58MHx8MHx8fDA%3D"
            }
          />
        </div>
      );
      break;
    case "sikkim":
      additionalLinks = (
        <div className="flex gap-4 my-6">
          <AdditionLinkCard
            state1={"ladakh"}
            state2={"odisha"}
            imageUrl1={
              "https://images.unsplash.com/photo-1559105283-be7df38efebf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGxhZGFraHxlbnwwfHwwfHx8MA%3D%3D"
            }
            imageUrl2={
              "https://images.unsplash.com/photo-1588137769937-382684e3d7a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG9kaXNoYXxlbnwwfHwwfHx8MA%3D%3D"
            }
          />
        </div>
      );
      break;
    case "goa":
      additionalLinks = (
        <div className="flex gap-4 my-6">
          <AdditionLinkCard
            state1={"punjab"}
            state2={"kerala"}
            imageUrl1={
              "https://images.unsplash.com/photo-1629887424001-c1442e96b73d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHB1bmphYnxlbnwwfHwwfHx8MA%3D%3D"
            }
            imageUrl2={
              "https://images.unsplash.com/photo-1575305327780-a887f284432f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGtlcmFsYXxlbnwwfHwwfHx8MA%3D%3D"
            }
          />
        </div>
      );
      break;
    case "delhi":
      additionalLinks = (
        <div className="flex gap-4 my-6">
          <AdditionLinkCard
            state1={"kerala"}
            state2={"gujrat"}
            imageUrl1={
              "https://images.unsplash.com/photo-1552155677-48b570b1d34c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGtlcmFsYXxlbnwwfHwwfHx8MA%3D%3D"
            }
            imageUrl2={
              "https://images.unsplash.com/photo-1621392652239-dc083d01942d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3VqcmF0fGVufDB8fDB8fHww"
            }
          />
        </div>
      );
      break;
    case "punjab":
      additionalLinks = (
        <div className="flex gap-4 my-6">
          <AdditionLinkCard
            state1={"ladakh"}
            state2={"uttarakhand"}
            imageUrl1={
              "https://images.unsplash.com/photo-1565610340067-73645dba2caf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGxhZGFraHxlbnwwfHwwfHx8MA%3D%3D"
            }
            imageUrl2={
              "https://images.unsplash.com/photo-1606722581293-628fa217a6f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHV0dGFyYWtoYW5kfGVufDB8fDB8fHww"
            }
          />
        </div>
      );
      break;
    case "westBengal":
      additionalLinks = (
        <div className="flex gap-4 my-6">
          <AdditionLinkCard
            state1={"kerala"}
            state2={"delhi"}
            imageUrl1={
              "https://images.unsplash.com/photo-1589983846997-04788035bc83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtlcmFsYXxlbnwwfHwwfHx8MA%3D%3D"
            }
            imageUrl2={
              "https://images.unsplash.com/photo-1609258678760-ba05d9b95bb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRlbGhpfGVufDB8fDB8fHww"
            }
          />
        </div>
      );
      break;
    case "ladakh":
      additionalLinks = (
        <div className="flex gap-4 my-6">
          <AdditionLinkCard
            state1={"andaman"}
            state2={"rajasthan"}
            imageUrl1={
              "https://images.unsplash.com/photo-1589983846997-04788035bc83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtlcmFsYXxlbnwwfHwwfHx8MA%3D%3D"
            }
            imageUrl2={
              "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFqYXN0aGFufGVufDB8fDB8fHww"
            }
          />
        </div>
      );
      break;
    case "dubai":
      additionalLinks = (
        <div className="flex gap-4 my-6">
          <AdditionLinkCard
            state1={"bali"}
            state2={"thailand"}
            imageUrl1={
              "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFsaXxlbnwwfHwwfHx8MA%3D%3D"
            }
            imageUrl2={
              "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRoYWlsYW5kfGVufDB8fDB8fHww"
            }
          />
        </div>
      );
      break;
    case "bali":
      additionalLinks = (
        <div className="flex gap-4 my-6">
          <AdditionLinkCard
            state1={"singapore"}
            state2={"bhutan"}
            imageUrl1={
              "https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2luZ2Fwb3JlfGVufDB8fDB8fHww"
            }
            imageUrl2={
              "https://images.unsplash.com/photo-1597658333270-8c0d8f0eb845?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ymh1dGFufGVufDB8fDB8fHww"
            }
          />
        </div>
      );
      break;
    case "singapore":
      additionalLinks = (
        <div className="flex gap-4 my-6">
          <AdditionLinkCard
            state1={"vietnam"}
            state2={"dubai"}
            imageUrl1={
              "https://images.unsplash.com/photo-1504457047772-27faf1c00561?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmlldG5hbXxlbnwwfHwwfHx8MA%3D%3D"
            }
            imageUrl2={
              "https://images.unsplash.com/flagged/photo-1559717201-fbb671ff56b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGR1YmFpfGVufDB8fDB8fHww"
            }
          />
        </div>
      );
      break;
    case "thailand":
      additionalLinks = (
        <div className="flex gap-4 my-6">
          <AdditionLinkCard
            state1={"nepal"}
            state2={"malaysia"}
            imageUrl1={
              "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmVwYWx8ZW58MHx8MHx8fDA%3D"
            }
            imageUrl2={
              "https://images.unsplash.com/photo-1545424436-1be2b5c0d0fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbGF5c2lhfGVufDB8fDB8fHww"
            }
          />
        </div>
      );
      break;
    case "bhutan":
      additionalLinks = (
        <div className="flex gap-4 my-6">
          <AdditionLinkCard
            state1={"thailand"}
            state2={"bali"}
            imageUrl1={
              "https://images.unsplash.com/photo-1528181304800-259b08848526?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGhhaWxhbmR8ZW58MHx8MHx8fDA%3D"
            }
            imageUrl2={
              "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFsaXxlbnwwfHwwfHx8MA%3D%3D"
            }
          />
        </div>
      );
      break;
    case "nepal":
      additionalLinks = (
        <div className="flex gap-4 my-6">
          <AdditionLinkCard
            state1={"dubai"}
            state2={"singapore"}
            imageUrl1={
              "https://images.unsplash.com/photo-1546412414-8035e1776c9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGR1YmFpfGVufDB8fDB8fHww"
            }
            imageUrl2={
              "https://images.unsplash.com/photo-1533281808624-e9b07b4294ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNpbmdhcG9yZXxlbnwwfHwwfHx8MA%3D%3D"
            }
          />
        </div>
      );
      break;
    case "malaysia":
      additionalLinks = (
        <div className="flex gap-4 my-6">
          <AdditionLinkCard
            state1={"nepal"}
            state2={"thailand"}
            imageUrl1={
              "https://images.unsplash.com/photo-1553886334-43d24f24d3bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5lcGFsfGVufDB8fDB8fHww"
            }
            imageUrl2={
              "https://images.unsplash.com/photo-1528535661949-5dac90a11fb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHRoYWlsYW5kfGVufDB8fDB8fHww"
            }
          />
        </div>
      );
      break;
    case "vietnam":
      additionalLinks = (
        <div className="flex gap-4 my-6">
          <AdditionLinkCard
            state1={"malaysia"}
            state2={"singapore"}
            imageUrl1={
              "https://images.unsplash.com/photo-1545424436-1be2b5c0d0fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbGF5c2lhfGVufDB8fDB8fHww"
            }
            imageUrl2={
              "https://images.unsplash.com/photo-1533281808624-e9b07b4294ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNpbmdhcG9yZXxlbnwwfHwwfHx8MA%3D%3D"
            }
          />
        </div>
      );
      break;
    default:
      break;
  }

  return additionalLinks;
};

export default AdditionalLinks;
