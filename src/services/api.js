export const fetchTeams = async () => {
    const res = await fetch("https://katrina-nonmonogamous-pseudofamously.ngrok-free.dev/content/cq:graphql/TDTraining/endpoint.json", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Basic " + btoa("admin:admin")
        },
        body: JSON.stringify({
            query: `
   {
  teamModelList{
    items{
      title
      code 
      descriptiom {
        plaintext
      }
      members{
        name 
        email
        role
        profilePicture{
          ... on ImageRef{
          _path
          }
        }
        biography {
          plaintext
        }
      }
    }
  }
}
      `
        })
    });

    const data = await res.json();
    console.log('TeamCard', data);
    return data?.data?.teamModelList?.items || [];
};  