import { useState } from "react";
import {
  Modal,
  Button,
  Group,
  TextInput,
  Text,
  Grid,
  Select,
  Box,
  PasswordInput,
  Avatar,
  Textarea,
  ActionIcon,
  AspectRatio,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import Dropzone, { useDropzone } from "react-dropzone";
import { uploadImage } from "@services/cloudinary";
import { Edit2 } from "iconsax-react";
import { productManager } from "@store/catalog/product";
import { PublishProductDtoTypeEnum } from "../../../sdk/catalog";
import { taxonomyManager } from "@store/catalog/taxonomy";

export function NewProductProcess() {
  const [opened, setOpened] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      price: 0,
      body: "",
      image: "",
      name: "",
      category: "",
    },
  });

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Create Account"
      >
        <form
          onSubmit={form.onSubmit((values) => {
            productManager.publishItem({
              ...values,
              price: parseInt(values.price + ""),
              collections: [],
              status: "available",
              type: "physical",
            });

            setOpened(false);
          })}
        >
          <Grid>
            <Grid.Col md={12}>
              <Box>
                <Dropzone
                  onDropAccepted={(props) => {
                    // toast("Uploading file...");
                    uploadImage(props[0])
                      .then((url) => {
                        console.log(url);
                        form.setFieldValue("image", url ?? "");
                      })
                      .catch((err: any) => {
                        console.log(err);
                      });
                  }}
                >
                  {({ getRootProps, getInputProps }) => (
                    <AspectRatio
                      {...getRootProps()}
                      ratio={1 / 0.5}
                      style={{}}
                      sx={() => {
                        let temp =
                          "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2019/06/06153006/product-boxes-packhelp-ed.jpg";

                        return {
                          backgroundImage: `url(${form.values.image ?? temp})`,
                          backgroundSize: "cover",
                        };
                      }}
                    >
                      <ActionIcon
                        aria-activedescendant=""
                        variant="transparent"
                      >
                        <Edit2 />
                        <input {...getInputProps()} />
                      </ActionIcon>
                    </AspectRatio>
                  )}
                </Dropzone>
              </Box>
            </Grid.Col>
            <Grid.Col md={12}>
              <TextInput label="Product Name" {...form.getInputProps("name")} />
            </Grid.Col>
            <Grid.Col md={12}>
              <Textarea label="Description" {...form.getInputProps("body")} />
            </Grid.Col>
            <Grid.Col md={6}>
              <TextInput
                label="Price"
                type={"number"}
                {...form.getInputProps("price")}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <Select
                label="Category"
                data={taxonomyManager.items.map((element) => {
                  //@ts-ignore
                  return { value: element._id, label: element.name };
                })}
              />
            </Grid.Col>
          </Grid>
          <Box sx={{ height: 24 }} />
          <Grid>
            <Grid.Col span={12}>
              <Button fullWidth type="submit" loading={loading}>
                Create
              </Button>
            </Grid.Col>
          </Grid>
        </form>
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Create Product</Button>
      </Group>
    </>
  );
}
