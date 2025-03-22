import AdditionLinkCard from "./AdditionLinkCard";
import Image from 'next/image'
const AdditionalLinks = ({ category }) => {
  let additionalLinks = null;

  switch (category.toLowerCase()) {
    case "rajasthan":
      additionalLinks = (
        <AdditionLinkCard
          state1={"Himachal"}
          state2={"Uttarakhand"}
          imageUrl1={
            "https://via.placeholder.com/500"
          }
          imageUrl2={
            "https://via.placeholder.com/500"
          }
          width={500}
          height={300}
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
              "https://via.placeholder.com/500"
            }
            imageUrl2={
              "https://via.placeholder.com/500"
            }
             width={500}
            height={300}
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
              "https://via.placeholder.com/500"
            }
            imageUrl2={
              "https://via.placeholder.com/500"
            }
             width={500}
            height={300}
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
              "https://via.placeholder.com/500"
            }
            imageUrl2={
              "https://via.placeholder.com/500"
            }
             width={500}
            height={300}
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
              "https://via.placeholder.com/500"
            }
            imageUrl2={
              "https://via.placeholder.com/500"
            }
             width={500}
            height={300}
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
              "https://via.placeholder.com/500"
            }
            imageUrl2={
              "https://via.placeholder.com/500"
            }
             width={500}
            height={300}
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
              "https://via.placeholder.com/500"
            }
            imageUrl2={
              "https://via.placeholder.com/500"
            }
             width={500}
            height={300}
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
              "https://via.placeholder.com/500"
            }
            imageUrl2={
              "https://via.placeholder.com/500"
            }
             width={500}
            height={300}
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
              "https://via.placeholder.com/500"
            }
            imageUrl2={
              "https://via.placeholder.com/500"
            }
             width={500}
            height={300}
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
              "https://via.placeholder.com/500"
            }
            imageUrl2={
              "https://via.placeholder.com/500"
            }
             width={500}
            height={300}
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
              "https://via.placeholder.com/500"
            }
            imageUrl2={
              "https://via.placeholder.com/500"
            }
             width={500}
            height={300}
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
              "https://via.placeholder.com/500"
            }
            imageUrl2={
              "https://via.placeholder.com/500"
            }
             width={500}
            height={300}
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
              "https://via.placeholder.com/500"
            }
            imageUrl2={
              "https://via.placeholder.com/500"
            }
             width={500}
            height={300}
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
              "https://via.placeholder.com/500"
            }
            imageUrl2={
              "https://via.placeholder.com/500"
            }
             width={500}
            height={300}
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
              "https://via.placeholder.com/500"
            }
            imageUrl2={
              "https://via.placeholder.com/500"
            }
             width={500}
            height={300}
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
              "https://via.placeholder.com/500"
            }
            imageUrl2={
              "https://via.placeholder.com/500"
            }
             width={500}
            height={300}
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
              "https://via.placeholder.com/500"
            }
            imageUrl2={
              "https://via.placeholder.com/500"
            }
             width={500}
            height={300}
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
              "https://via.placeholder.com/500"
            }
            imageUrl2={
              "https://via.placeholder.com/500"
            }
             width={500}
            height={300}
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
              "https://via.placeholder.com/500"
            }
            imageUrl2={
              "https://via.placeholder.com/500"
            }
             width={500}
            height={300}
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
              "https://via.placeholder.com/500"
            }
            imageUrl2={
              "https://via.placeholder.com/500"
            }
             width={500}
            height={300}
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
              "https://via.placeholder.com/500"
            }
            imageUrl2={
              "https://via.placeholder.com/500"
            }
             width={500}
            height={300}
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
              "https://via.placeholder.com/500"
            }
            imageUrl2={
              "https://via.placeholder.com/500"
            }
            width={500}
            height={300}
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
