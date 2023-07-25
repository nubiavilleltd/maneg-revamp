import Button from "../../components/UI/Button/Button";
import styles from "./MemberDirectory.module.scss";
import members from "../../utils/members";
import Member from "./Member";
import Pagination from "../../components/UI/Pagination/Pagination";
import { useState } from "react";

const MemberDirectory = () => {
  const handleMemberFormHandler = () => {
    console.log("submitted!");
  };

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage, setProductsPerPage] = useState<number>(5);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = members.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <>
      <div className={styles["members-header"]}>
        <div className={styles["members-text"]}>
          <h1>Need to Find a Member?</h1>
          <form
            className={styles["member-form"]}
            name="member-form"
            id="member-form"
            onSubmit={handleMemberFormHandler}
          >
            <input type="text" placeholder="search for member" />

            <Button type="submit" className={styles.submit}>
              Find Member
            </Button>
          </form>
        </div>
      </div>
      <div className={styles["members-body"]}>
        <div className={styles.tags}>
          Tags:
          <Button type="button" className={styles.tag}>
            fish
          </Button>
          <Button type="button" className={styles.tag}>
            cocoa
          </Button>
          <Button type="button" className={styles.tag}>
            groundnut
          </Button>
          <Button type="button" className={styles.tag}>
            rubber
          </Button>
          <Button type="button" className={styles.tag}>
            tobacco
          </Button>
          <Button type="button" className={`${styles.tag} ${styles.active}`}>
            vine
          </Button>
          <Button type="button" className={styles.tag}>
            splitter
          </Button>
        </div>
        <div className={styles["members-container"]}>
          {currentProducts.map((member, index) => {
            const { id, logo, company_name, description, address } = member;
            return (
              <Member
                index={index}
                company={company_name}
                logo={logo}
                address={address}
                id={id}
                description={description}
              />
            );
          })}
        </div>
      </div>

      <Pagination
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalProducts={members.length}
      />
    </>
  );
};

export default MemberDirectory;
