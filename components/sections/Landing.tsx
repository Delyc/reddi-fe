import posts from "@/data/posts";
import { Heading1, Heading3, Paragraph } from "../ui/Typography";
import SideNavBarWrapper from "../wrappers/SideNavBarWrapper";
import Image from "next/image";
import postImage from '../../public/assets/post3.webp'
import centerNavItems from "@/data/centerNavItems";
import Link from "next/link";
import Button from "../ui/Button";
import ContentWrapper from "../wrappers/ContentWrapper";
import PageWrapper from "../wrappers/PageWrapper";
import { useSelector } from "react-redux"


const Landing = () => {
    const name = useSelector((state: any) => state.UserSignup.firstName)

    console.log("name", name)
    return (
        <PageWrapper>

            <SideNavBarWrapper />

            <ContentWrapper>
                <div>
                    <Heading1>Trending Posts</Heading1>
                    <div className="grid grid-cols-4 relative gap-x-10 w-full mt-10">
                        {posts.map((post, index) => {
                            return (
                                <div key={index} className="rounded-md  w-[16rem]">
                                    <Image className="w-full rounded-md h-full object-contain" src={postImage} alt="post image" width={100} height={100} />
                                    <div className="absolute rounded-md  bg-black/40 text-white h-full px-4 top-0 w-[16rem] gap-4 justify-center flex flex-col flex-wrap break-words">
                                        <Heading3 className="font-bold">{post.title}</Heading3>
                                        <Paragraph className="">{post.hook}</Paragraph>
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                </div>

                <div>
                    <Heading1>Popular Posts</Heading1>
                    <div className="grid grid-cols-3 w-full gap-x-10 mt-5">
                        <div className=" col-span-2">
                            <div className="bg-white py-6 rounded-md  px-20 border">
                                <ul className="flex justify-between ">
                                    {centerNavItems.map((centerNavItem, index) => {
                                        return (
                                            <Link href={centerNavItem.path} key={index}>{centerNavItem.title}</Link>

                                        )
                                    })}
                                </ul>
                            </div>
                            <div className="mt-10 px-16 bg-white flex flex-col gap-5 py-5">
                                <p>A Stork mother, making a tough decision, by throwing one of her chicks out of the nest to enhance the survival probability of her other chicks.</p>

                                <Image className="w-full h-64 object-fill" src={postImage} alt="post image" width={100} height={100} />
                                <p>A Stork mother, making a tough decision, by throwing one of her chicks out of the nest to enhance the survival probability of her other chicks.</p>
                                <div className="flex gap-4">
                                    <p>Like</p>
                                    <p>dislike</p>
                                    <p>Comment</p>

                                </div>
                            </div>

                            <div className="mt-10 px-16 bg-white flex flex-col gap-5 py-5">
                                <p>A Stork mother, making a tough decision, by throwing one of her chicks out of the nest to enhance the survival probability of her other chicks.</p>

                                <Image className="w-full h-64 object-fill" src={postImage} alt="post image" width={100} height={100} />
                                <p>A Stork mother, making a tough decision, by throwing one of her chicks out of the nest to enhance the survival probability of her other chicks.</p>
                                <div className="flex gap-4">
                                    <p>Like</p>
                                    <p>dislike</p>
                                    <p>Comment</p>

                                </div>
                            </div>
                            <div className="mt-10 px-16 bg-white flex flex-col gap-5 py-5">
                                <p>A Stork mother, making a tough decision, by throwing one of her chicks out of the nest to enhance the survival probability of her other chicks.</p>

                                <Image className="w-full h-64 object-fill" src={postImage} alt="post image" width={100} height={100} />
                                <p>A Stork mother, making a tough decision, by throwing one of her chicks out of the nest to enhance the survival probability of her other chicks.</p>
                                <div className="flex gap-4">
                                    <p>Like</p>
                                    <p>dislike</p>
                                    <p>Comment</p>

                                </div>
                            </div>
                            <div className="mt-10 px-16 bg-white flex flex-col gap-5 py-5">
                                <p>A Stork mother, making a tough decision, by throwing one of her chicks out of the nest to enhance the survival probability of her other chicks.</p>

                                <Image className="w-full h-64 object-fill" src={postImage} alt="post image" width={100} height={100} />
                                <p>A Stork mother, making a tough decision, by throwing one of her chicks out of the nest to enhance the survival probability of her other chicks.</p>
                                <div className="flex gap-4">
                                    <p>Like</p>
                                    <p>dislike</p>
                                    <p>Comment</p>

                                </div>
                            </div>
                        </div>

                        <div className="bg-white flex flex-col gap-4 px-10 py-10 h-80">
                            <p>Sub reddit one</p>
                            <p>Sub reddit one</p>
                            <p>Sub reddit one</p>
                            <p>Sub reddit one</p>
                            <p>Sub reddit one</p>
                            <p>Sub reddit one</p>
                            <p>Sub reddit one</p>

                        </div>
                    </div>
                    <div className=" flex justify-end bottom-10 sticky mr-0">
                        <Button text="Back to top" className=" rounded-full" />

                    </div>


                </div>
            </ContentWrapper>
        </PageWrapper>
    );
}

export default Landing;