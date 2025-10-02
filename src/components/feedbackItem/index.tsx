import { FeedbackItemProps } from "./type"
import { Rating } from "react-simple-star-rating";
import { Avatar } from 'primereact/avatar';
export const FeedbackItemComponent = (props: FeedbackItemProps) => {

    return (
        <div className="w-full inline-flex flex-col justify-center items-start mb-4">
            <div className="inline-flex justify-start items-center gap-1.5">
                <Avatar label="F" shape="circle" size="xlarge" style={{ backgroundColor: '#4067e6', color: '#FFFFFF' }} />

                <div className="w-full inline-flex flex-col justify-start items-start gap-0.5">
                    <div className="self-stretch justify-center blackfeddback12w500">{props.author}</div>
                    <div className="self-stretch justify-center greyfeedback12w500">{props.content}</div>
                </div>
            </div>
            <div className="w-64 inline-flex justify-start items-center gap-1.5">
                <div className="flex flex-row items-center space-x-2 mb-1.5">
                    <Rating

                        initialValue={props.assessment}
                        allowFraction
                        size={16}
                        //onClick={handleRating}]
                        readonly={true}
                        fillColor="#eab308"  // yellow-500 //bg-yellow-400
                        emptyColor="#e5e7eb" // gray-200
                    />
                </div>
                <div className="w-full justify-center greyfeedback12w400">{props.createAt}</div>
            </div>
        </div>
    )
}