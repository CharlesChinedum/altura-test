import React, { useState, ReactDOM } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import img from "../assets/metaverse.png";
import "../styles/modal.css";

const ModalComponent = ({
  modalTitle,
  modalImg,
  tokenId,
  collectionAddress,
  supply,
  maxSupply,
}) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const tableData1 = "text-[#ec51b1] font-bold tracking-wider";
  const tableData2 = "text-gray-200 text-sm";

  return (
    <div className="">
      <button
        onClick={onOpenModal}
        className="text-[#ec51b1] border-gray-600 border-[1px] px-3 py-1 rounded-md"
      >
        view
      </button>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{ overlay: "customOverlay", modal: "customModal" }}
      >
        <div className="w-full p-2 card">
          <div className="w-full p-2">
            <div className="flex gap-2 justify-between items-center mb-2">
              <h2 className="text-gray-200 font-bold">{modalTitle}</h2>
              <img src={modalImg} alt="" className="w-14 h-14 rounded-full" />
            </div>

            <div className="w-full">
              <table className="w-full flex flex-col gap-2">
                <tbody>
                  <tr className="flex w-full justify-between">
                    <td className={tableData1}>TokenID</td>
                    <td className={tableData2}> {tokenId} </td>
                  </tr>
                  {/* <tr className="flex w-full justify-between">
                    <td className={tableData1}>Collection Address</td>
                    <td className={`${tableData2} break-words`}>
                    {collectionAddress}
                    </td>
                  </tr> */}
                  <tr className="flex w-full justify-between">
                    <td className={tableData1}>Supply</td>
                    <td className={tableData2}> {supply} </td>
                  </tr>
                  <tr className="flex w-full justify-between">
                    <td className={tableData1}>Max Supply</td>
                    <td className={tableData2}> {maxSupply} </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="w-full mt-5">
              <a href="https://www.alturanft.com/">
                <button className="w-full bg-gray-200 text-[#ec51b1] font-bold py-2 rounded-md">
                  Buy
                </button>
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalComponent;
