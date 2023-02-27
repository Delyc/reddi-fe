import Image from "next/image";
import net from '../../public/assets/net.png'
import red from '../../public/assets/red.png'
import amazon from '../../public/assets/amazon.png'
import discord from '../../public/assets/discord.png'
import spotify from '../../public/assets/spotify.png'

const Partners = () => {
    return ( 
        <section className="flex gap-3 justify-between mt-10 xl:mt-44 w-3/5 flex-wrap">
                    <Image className="w-28 h-10" src={net} alt="image" width={100} height={100} />
                    <Image className="w-28 h-10" src={red} alt="image" width={100} height={100} />
                    <Image className="w-28 h-10" src={discord} alt="image" width={100} height={100} />
                    <Image className="w-28 h-10" src={spotify} alt="image" width={100} height={100} />
                    <Image className="w-32 xl:h-40   xl:mt-[-50px]" src={amazon} alt="image" width={100} height={100} />
                </section>

     );
}
 
export default Partners;